import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/Core/services/Candidates/candidate.service';


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

  constructor(private fb: FormBuilder , private candidate:CandidateService ) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^(\+966)?\d{9}$/)]],
      password: ['', this.mode ? [] : [Validators.required]],
      city : ['', [Validators.required]]
    });

    // Check if the value is a phone number
    this.adminForm.get('mobileNumber')?.valueChanges.subscribe(value => {
    if (this.isPhoneNumber(value)) {
      if (!value.startsWith('+966')) {
        this.adminForm.patchValue({ mobileNumber: `+966${value}` }, { emitEvent: false });
      }
    }
  });

    // Get All Admins
    this.getAllAdmins();

  }

    // Check if the value is a phone number
    isPhoneNumber(value: string): boolean {
      return /^[0-9]{10,}$/.test(value);
    }

  // Get All Admins
  getAllAdmins() : void {
    // this.candidate.getCandidates().subscribe({
    //   next : (res) => {

    //     this.admins = res.data.admins;
    //   },
    //   error : (err) => {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Error!',
    //       text: err.error?.message,
    //       confirmButtonColor: '#d33',
    //       timer: 2000,
    //       timerProgressBar: true,
    //     });
    //   }
    // })
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

    // const adminData = this.adminForm.value;
    // if(!this.mode) {
    //   this.candidate.createCandidate(adminData).subscribe({
    //     next : (res) => {

    //       Swal.fire({
    //         icon: 'success',
    //         title: 'Success',
    //         text: res.message.message,
    //         confirmButtonColor: '#28a745',
    //         confirmButtonText: 'OK',
    //         timer: 2000,
    //         timerProgressBar: true,
    //       }).then(() => {
    //         this.getAllAdmins();
    //         this.showPassword = false ;
    //         this.mode = false ;
    //       });
    //     },
    //     error : (err) => {
    //       Swal.fire({
    //         icon: 'error',
    //         title: err.error?.message,
    //         confirmButtonColor: '#d33',
    //         confirmButtonText: 'Close',
    //         timer: 2000,
    //         timerProgressBar: true,
    //       });
    //     }
    //   })
    // }else {
    //   this.candidate.updateCandidate(this.selectId , adminData).subscribe({
    //     next : (res) => {
    //       Swal.fire({
    //         icon: 'success',
    //         title: 'Success',
    //         text: res.message,
    //         confirmButtonColor: '#28a745',
    //         confirmButtonText: 'OK',
    //         timer: 2000,
    //         timerProgressBar: true,
    //       }).then(() => {
    //         this.getAllAdmins();
    //         this.showPassword = false ;
    //         this.mode = false ;
    //       });
    //     },
    //     error : (err) => {
    //       Swal.fire({
    //         icon: 'error',
    //         title: err.error?.message,
    //         confirmButtonColor: '#d33',
    //         confirmButtonText: 'Close',
    //         timer: 2000,
    //         timerProgressBar: true,
    //       });
    //     }
    //   })
    // }

  }

  // Edit an admin
  editAdmin(category: any) {
    // this.hideInputpass = true;

    // this.mode = true;
    // this.showModal = false;
    // this.adminForm.enable();
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
    // // Remove password validator
    // this.adminForm.get('password')?.clearValidators();
    // this.adminForm.get('password')?.updateValueAndValidity();
    // this.showModal = true;
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
    // Swal.fire({
    //   title: 'Are you sure want to delete ?',
    //   text: "",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#d33',
    //   cancelButtonColor: '#3085d6',
    //   confirmButtonText: 'Yes, delete it!',
    //   cancelButtonText: 'Cancel'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     this.candidate.deleteCandidate(id).subscribe({
    //       next: (res) => {
    //         Swal.fire({
    //           icon: 'success',
    //           title: 'Deleted!',
    //           text: res.message,
    //           confirmButtonColor: '#28a745',
    //           timer: 2000,
    //           timerProgressBar: true,
    //         }).then(() => {
    //           this.getAllAdmins(); // تحديث القائمة بعد الحذف
    //         });
    //       },
    //       error: (err) => {
    //         Swal.fire({
    //           icon: 'error',
    //           title: 'Error!',
    //           text: err.error?.message,
    //           confirmButtonColor: '#d33',
    //           timer: 2000,
    //           timerProgressBar: true,
    //         });
    //       }
    //     });
    //   }
    // });
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
