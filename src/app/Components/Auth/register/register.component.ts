import { Component , ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  imagePreview: string | null = null;

  // دالة لتحميل الصورة ومعاينتها
  previewImage(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string; // تحويل الصورة إلى Data URL
      };
      reader.readAsDataURL(file);
    }
  }
  showPassword: boolean = false;

  showIcon() {
    this.showPassword = !this.showPassword;
  }

  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>; // ربط عنصر الفيديو
  capturedImage: string | null = null; // لحفظ الصورة الملتقطة
  isCameraOpen: boolean = false; // حالة الكاميرا مفتوحة أم لا
  stream: MediaStream | null = null; // تخزين تدفق الفيديو لإيقافه لاحقًا

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


  // التقاط الصورة
  capturePhoto() {
    if (this.videoRef && this.videoRef.nativeElement) {
      const video = this.videoRef.nativeElement;
      const canvas = document.createElement('canvas'); // إنشاء عنصر Canvas
      const context = canvas.getContext('2d');

      if (context) {
        // ضبط أبعاد الكانفاس لتطابق الفيديو
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // رسم إطار من الفيديو على الكانفاس
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // تحويل الكانفاس إلى صورة Base64
        this.capturedImage = canvas.toDataURL('image/png');

        // إيقاف الكاميرا
        if (this.stream) {
          this.stream.getTracks().forEach((track) => track.stop());
        }
        this.isCameraOpen = false;
        console.log('تم التقاط الصورة');
      }
    }
  }


}
