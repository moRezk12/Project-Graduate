import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/services/Auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showPassword = false;

  // بيانات إضافية خارج الـ FormGroup
  nationalId: string = '';
  uploadedImage: File | null = null;
  imagePreview: string | null = '';
  capturedImage: string | null = '';
  isCameraOpen = false;
  stream: MediaStream | null = null;

  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;

  constructor(private formBuilder: FormBuilder , private authService: AuthService , private router : Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]{3,20}$/)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      electionType: [0],
      // age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      nationalId: ['', Validators.required],
      nationalIdPhoto: [''],
      selfiePhoto: [''],
      nationalIdPhotoDataType: ['jpg'],
      selfiePhotoDataType: ['jpg'],
      provinceId: [1],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['Voter'],
    });
  }

  ngOnInit(): void {

  }

  // عرض وإخفاء كلمة المرور
  showIcon() {
    this.showPassword = !this.showPassword;
  }

  showimage: string | null = '';
  // تحميل الصورة ومعاينتها
  previewImage(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.uploadedImage = file;
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string);
        // إزالة data:image/...;base64,
        this.showimage = base64String;
        const cleanedBase64 = base64String.split(',')[1];

        this.imagePreview = cleanedBase64;
        console.log('Preview Image:', this.imagePreview);

        this.registerForm.get('nationalIdPhoto')?.setValue(this.imagePreview);
      };
      reader.readAsDataURL(file);
    }
  }

  // فتح الكاميرا
  openCamera() {
    this.capturedImage = null;
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          this.stream = stream;
          const video = this.videoRef.nativeElement;
          video.srcObject = stream;
          video.play();
          this.isCameraOpen = true;
          console.log('الكاميرا تعمل الآن');
        })
        .catch((error) => {
          console.error('خطأ أثناء فتح الكاميرا:', error);
          if (error.name === 'NotAllowedError') {
            alert('تم رفض الوصول إلى الكاميرا. تأكد من أنك قد منحت الإذن.');
          } else if (error.name === 'NotFoundError') {
            alert('لم يتم العثور على كاميرا. تأكد من أن الجهاز يحتوي على كاميرا.');
          } else {
            alert('حدث خطأ غير معروف: ' + error.message);
          }
        });
    } else {
      console.error('المتصفح لا يدعم الوصول إلى الكاميرا');
      alert('المتصفح لا يدعم الوصول إلى الكاميرا');
    }
  }

  imageCamera: string | null = '';
  // التقاط الصورة
  capturePhoto() {
    if (this.videoRef && this.videoRef.nativeElement) {
      const video = this.videoRef.nativeElement;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        this.imageCamera = canvas.toDataURL('image/png');
        this.capturedImage = canvas.toDataURL('image/png').split(',')[1];
        console.log('Captured Image:', this.capturedImage);

        this.registerForm.get('selfiePhoto')?.setValue(this.capturedImage);

        if (this.stream) {
          this.stream.getTracks().forEach((track) => track.stop());
        }
        this.isCameraOpen = false;
        console.log('تم التقاط الصورة');
      }
    }
  }

  // دالة التسجيل عند الضغط على زر Sign Up
  registerUser() {
    if (this.registerForm.valid) {


      console.log('Registration Data:', this.registerForm.value);

      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          Swal.fire({
            title: 'Done',
            text: "Successfully Registered",
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then(() => {
            this.router.navigate(['/login']);
          });
        },
        error: (error) => {
          console.log("error"  );

          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Server Error',
            confirmButtonText: 'Ok'
          })

          console.error('Registration failed', error.error?.errors);
        }
      })

    } else {
      console.log('Form is invalid');
      this.registerForm.markAllAsTouched();
    }
  }



  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }


}
