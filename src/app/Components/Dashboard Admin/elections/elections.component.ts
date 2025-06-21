import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElectionService } from 'src/app/Core/services/Elections/election.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})
export class ElectionsComponent implements OnInit {

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

  constructor(private fb: FormBuilder , private election:ElectionService ) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      id: [0, [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      startDate: ['', [Validators.required, Validators.minLength(3)]],
      endDate: ['', [Validators.required, Validators.pattern(/^(\+966)?\d{9}$/)]],
      electionType: [2, [Validators.required]]
    });



    // Get All Admins
    this.getAllAdmins();

  }


  // Get All Admins
  getAllAdmins() : void {
    this.election.getElections().subscribe({
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
    // this.showModal = false;
    // this.adminForm.enable();
    // if (!this.adminForm.valid) {
    //   return
    // }

const adminData = this.adminForm.value;
    if(this.adminForm.get('electionType')?.value === '' || this.adminForm.get('electionType')?.value === null) {
      adminData.electionType = 2;
    }

    if (this.adminForm.get('id')?.value === '' || this.adminForm.get('id')?.value === null) {
      adminData.id = 0;
    }
    console.log("admin data : "+ JSON.stringify(this.adminForm.value));

    // const adminData = this.adminForm.value;
    if(!this.mode) {
      this.election.createElection(adminData).subscribe({
        next : (res) => {
          console.log(res);

          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: "Election Added Successfully",
            confirmButtonColor: '#28a745',
            confirmButtonText: 'OK',
            timer: 2000,
            timerProgressBar: true,
          }).then(() => {
            this.getAllAdmins();
            this.showModal = false ;
            this.mode = false ;
          });
        },
        error : (err) => {
          console.log(err);

          Swal.fire({
            icon: 'error',
            title: "Error!",
            confirmButtonColor: '#d33',
            confirmButtonText: 'Close',
            timer: 2000,
            timerProgressBar: true,
          });
        }
      })
    }else {
      this.election.updateElection(this.selectId , adminData).subscribe({
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
            this.getAllAdmins();
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
    // this.hideInputpass = true;

    this.mode = true;
    // this.showModal = false;

    const adminData = this.adminForm.value;

    if(this.adminForm.get('electionType')?.value === '' || this.adminForm.get('electionType')?.value === null) {
      adminData.electionType = 2;
    }

    if (this.adminForm.get('id')?.value === '' || this.adminForm.get('id')?.value === null) {
      adminData.id = 0;
    }

      // تأكد أن التاريخ بصيغة YYYY-MM-DD
    const formattedStartDate = category.startDate?.split('T')[0];
    const formattedEndDate = category.endDate?.split('T')[0];

    this.adminForm.patchValue({
      name: category.name,
      startDate: formattedStartDate,
      endDate: formattedEndDate
    });
    console.log(this.adminForm.value);

    this.selectId = category.id;
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
    console.log(id);

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
        this.election.deleteElection(id).subscribe({
          next: (res) => {
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: "Election Deleted Successfully",
              confirmButtonColor: '#28a745',
              timer: 2000,
              timerProgressBar: true,
            }).then(() => {
              this.getAllAdmins();
              this.showModal = false ;
            });
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: "Election Not Deleted",
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
