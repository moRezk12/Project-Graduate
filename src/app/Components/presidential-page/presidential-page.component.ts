import {  Component , ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/Core/services/Candidates/candidate.service';
import { VotingService } from 'src/app/Core/services/Voting/voting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-presidential-page',
  templateUrl: './presidential-page.component.html',
  styleUrls: ['./presidential-page.component.css']
})
export class PresidentialPageComponent implements OnInit {

    // data : [] = [];
  data: any;
  voteNow : boolean = false;
  btnOpenCamera : boolean = false;
  openModalCamera : boolean = false

  selectId! : Number;

  constructor(private candidate : CandidateService , private _voting : VotingService) {
    // setInterval(() => {
    //   this.openCamera = false
    // }, 10000);
  }

  ngOnInit(): void {
    this.getAllCandidates();
  }

  getAllCandidates() {
        this.candidate.getCandidates().subscribe({
    next : (res) => {
      console.log(res);
      this.data = res.$values;
      console.log(this.data);
    },
    error : (err) => {
        console.log(err);
      }
    })
  }

  returnImage(image : any) {
    return 'data:image/jpeg;base64,' + image;
  }

  openPopup(id : any) {
    this.selectId = id
    // this.openCamera = true
    this.openModalCamera = true
  }


  closePopup() {
    // this.openCamera = event
    this.openModalCamera = false;
    this.capturedImage = '';
    this.isCameraOpen = false;
    this.btnOpenCamera = false
    this.voteNow = false;
  }

  selfiePhoto : any ;
  vote() {
    const body = {
      candidateId: this.selectId || 0,
      selfiePhoto: this.selfiePhoto || ''
    };

    if (!this.selectId || !this.capturedImage) {
    Swal.fire({
      icon: 'warning',
      title: 'يرجى اختيار مرشح والتقاط صورة قبل التصويت',
      confirmButtonColor: '#007bff',
      confirmButtonText: 'تمام'
    });
    return;
  }

    console.log('🚀 إرسال البيانات:', body);

    this._voting.createVoter(body).subscribe({
      next: (res) => {
        console.log(res);

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: res || 'تم التصويت بنجاح',
          confirmButtonColor: '#28a745',
          confirmButtonText: 'OK',
          // timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          this.voteNow = false;
          this.isCameraOpen = false;
          this.btnOpenCamera = false;
          this.capturedImage = '';
          this.closePopup();
        });
      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: err.error || 'حدث خطأ أثناء التصويت',
          confirmButtonColor: '#d33',
          confirmButtonText: 'Close',
          // timer: 2000,
          timerProgressBar: true,
        });
      }
    });
  }



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
              this.btnOpenCamera = true;
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
            this.selfiePhoto = canvas.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');


            // إيقاف الكاميرا
            if (this.stream) {
              this.stream.getTracks().forEach((track) => track.stop());
            }
            this.voteNow = true;
            this.isCameraOpen = false;
            console.log('تم التقاط الصورة');
          }
        }
      }

      // @Output() close = new EventEmitter<boolean>();
      // closeModal() {
      //   this.close.emit(false);
      // }


}
