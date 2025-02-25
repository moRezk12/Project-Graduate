import { Component , ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-opencamera',
  templateUrl: './opencamera.component.html',
  styleUrls: ['./opencamera.component.css']
})
export class OpencameraComponent {

    @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>; // ربط عنصر الفيديو
    capturedImage: string | null = null; // لحفظ الصورة الملتقطة
    isCameraOpen: boolean = false; // حالة الكاميرا مفتوحة أم لا
    stream: MediaStream | null = null; // تخزين تدفق الفيديو لإيقافه لاحقًا


    // فتح الكاميرا
    openCamera() {
      this.isCameraOpen = false
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

    @Output() close = new EventEmitter<boolean>();
    closeModal() {
      this.close.emit(false);
    }

}
