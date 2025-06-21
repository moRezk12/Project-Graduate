import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/Core/services/Candidates/candidate.service';
import { ElectionService } from 'src/app/Core/services/Elections/election.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-candidate-type',
  templateUrl: './candidate-type.component.html',
  styleUrls: ['./candidate-type.component.css']
})
export class CandidateTypeComponent implements OnInit {

  showModal = false;
  adminForm!: FormGroup;
  showPassword : boolean = false;
  mode : boolean = false;
  selectId! : number
  hideInputpass = false ;
  admins : any[] = []

  trackBy(index: number, admin: any): number {
    return admin.id;
  }

  editingIndex: number | null = null;

  constructor(private fb: FormBuilder , private candidate:CandidateService , private _Election : ElectionService ) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      name: ['', [Validators.required, Validators.email]],
      party: ['', [Validators.required, Validators.minLength(3)]],
      bio: ['', [Validators.required, Validators.minLength(3)]],
      electionId: ['', [Validators.required]],
      voteCount: [0, [Validators.required]],
      imageDataType : ['jpg', [Validators.required]],
      image : ['', [Validators.required]]
    });

    /*
    {
  "name": "string",
  "party": "string",
  "bio": "string",
  "voteCount": 0,
  "electionId": 0,
  "image": "string",
  "imageDataType": "string"
}
    */


      // Check if the value is a phone number
      this.adminForm.get('mobileNumber')?.valueChanges.subscribe(value => {
      if (this.isPhoneNumber(value)) {
        if (!value.startsWith('+966')) {
          this.adminForm.patchValue({ mobileNumber: `+966${value}` }, { emitEvent: false });
        }
      }
    });

    // Get All Admins
    this.getAllCandidate();

    // Get All Elections
    this.getAllElection();

  }

    // Check if the value is a phone number
    isPhoneNumber(value: string): boolean {
      return /^[0-9]{10,}$/.test(value);
    }

  // Get All Admins
  getAllCandidate() : void {
    this.candidate.getCandidates().subscribe({
      next : (res) => {
        console.log(res);

        this.admins = res.$values;
      },
      error : (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.error?.message,
          confirmButtonColor: '#d33',
          timer: 2000,
          timerProgressBar: true,
        });
      }
    })
  }

  // Get All Elections
  electionId : any ;
  getAllElection() : void {
    this._Election.getElections().subscribe({
      next : (res) => {
        console.log(res);
        this.electionId = res.$values;
        // this.admins = res.data.elections;
      },
      error : (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.error?.message,
          confirmButtonColor: '#d33',
          timer: 2000,
          timerProgressBar: true,
        });
      }
    })
  }

previewImage: string | null = null;

onImageSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      this.previewImage = base64; // لعرض الصورة
      this.adminForm.get('image')?.setValue(base64.split(',')[1]); // إزالة header وإرسال base64 فقط
    };
    reader.readAsDataURL(file);
  }
}



  // Show password
  showIcon() {
    this.showPassword = !this.showPassword;
  }

  // Open the modal
  openAddModal() {
    this.adminForm.enable();
    this.adminForm.reset();
    this.editingIndex = null;
    this.showModal = true;
  }

  // Add or update an admin
  addOrUpdateAdmin() {

    const adminData = this.adminForm.value;
console.log("adminData Object:", adminData);
console.log("voteCount =", adminData.voteCount);
console.log("imageDataType =", adminData.imageDataType);

    if(this.adminForm.get('imageDataType')?.value === '' || this.adminForm.get('imageDataType')?.value === null) {
      adminData.imageDataType = 'jpg';
    }

    if (this.adminForm.get('voteCount')?.value === '' || this.adminForm.get('voteCount')?.value === null) {
      adminData.voteCount = 0;
    }

    console.log("admin data : "+ JSON.stringify(this.adminForm.value));

    // const adminData = this.adminForm.value;
    console.log("admin data : "+adminData);

    if(!this.mode) {
      this.candidate.createCandidate(adminData).subscribe({
        next : (res) => {
          console.log(res);

          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: "Candidate Added Successfully",
            confirmButtonColor: '#28a745',
            confirmButtonText: 'OK',
            timer: 2000,
            timerProgressBar: true,
          }).then(() => {
            this.getAllCandidate();
            this.showModal = false ;
            this.mode = false ;
            this.previewImage = null;
          });
        },
        error : (err) => {
          console.log(err);

          Swal.fire({
            icon: 'error',
            title: err.error?.message,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Close',
            timer: 2000,
            timerProgressBar: true,
          });
        }
      })
    }else {
      this.candidate.updateCandidate(this.selectId , adminData).subscribe({
        next : (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: res.message,
            confirmButtonColor: '#28a745',
            confirmButtonText: 'OK',
            timer: 2000,
            timerProgressBar: true,
          }).then(() => {
            this.getAllCandidate();
            this.showModal = false ;
            this.mode = false ;
          });
        },
        error : (err) => {
          Swal.fire({
            icon: 'error',
            title: err.error?.message,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Close',
            timer: 2000,
            timerProgressBar: true,
          });
        }
      })
    }

  }

  // Edit an admin
  editAdmin(category: any) {
    this.hideInputpass = true;
    this.mode = true;
    this.showModal = false;
    this.selectId = category.id;

    this.adminForm.patchValue({
      name: category.name,
      party: category.party,
      bio: category.bio,
      electionId: category.electionId,
      voteCount: category.voteCount ?? 0,
      imageDataType: category.imageDataType || 'jpg',
      image: category.image || ''
    });

    this.previewImage = "data:image/jpeg;base64,"+category.image;
    this.showModal = true;
  }


  // Show an admin
  show : boolean = false ;
  showAdmin(category: any) {

    // this.hideInputpass = true;
    // this.show = true;
    // this.adminForm.disable();
    // const fullname = category.username;

    // const [firstName, lastName] = fullname.split(' ');
    // this.adminForm.get('firstName')?.setValue(firstName);
    // this.adminForm.get('lastName')?.setValue(lastName);

    // this.adminForm.patchValue({
    //   email: category.email,
    //   firstName: firstName,
    //   lastName: lastName,
    //   mobileNumber: category.mobileNumber,
    //   city : category.city
    // });
    // this.selectId = category.id;
    // this.showModal = true;
  }

  // Delete an admin
  deleteAdmin(id: number) {
    Swal.fire({
      title: 'Are you sure want to delete ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.candidate.deleteCandidate(id).subscribe({
          next: (res) => {
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: res.message,
              confirmButtonColor: '#28a745',
              timer: 2000,
              timerProgressBar: true,
            }).then(() => {
              this.getAllCandidate(); // تحديث القائمة بعد الحذف
              this.showModal = false;
            });
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: err.error?.message,
              confirmButtonColor: '#d33',
              timer: 2000,
              timerProgressBar: true,
            });
          }
        });
      }
    });
  }

  // Close the modal
  closeModal() {
    this.showModal = false;
    this.adminForm.reset();
    this.editingIndex = null;
    this.show = false;
    this.hideInputpass = false ;
  }


}
