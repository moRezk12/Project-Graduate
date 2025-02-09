import { Component , OnInit , HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Graduate';

  ngOnInit(): void {
    AOS.init({
      once: false,
      duration: 1000,
      easing: 'ease-in-out',
      offset: 0,
      startEvent: 'DOMContentLoaded',
    });
  }
  // Animation
  // استخدام event listener للـ scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    AOS.refresh();
  }

  showScrollButton = false;

  // وظيفة التمرير لأعلى الصفحة
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

    // مراقبة التمرير على النافذة
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.showScrollButton = window.pageYOffset > 250;
    }



  images = [
    "./assets/images/Home/Logo (1).svg",
    "./assets/images/Home/Logo (2).svg",
    "./assets/images/Home/Logo Image.svg",
    "./assets/images/Home/Logo.svg",
    "./assets/images/Home/Logo (3).svg",
    "./assets/images/Home/Logo (4).svg",
    "./assets/images/Home/Logo (5).svg",

  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    navSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false ,
    rtl: false
  }



}
