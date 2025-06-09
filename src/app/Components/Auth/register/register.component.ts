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

  // 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

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
            title: 'تم!',
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
            text: error.error?.errors,
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
