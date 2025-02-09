import { ChangeDetectorRef, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/Core/services/Languages/language.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent {

    currentLang: string = 'en';
    constructor( private languageService: LanguageService , private cdr: ChangeDetectorRef) {
      // اشترك في تغيير اللغة باستخدام LanguageService
      this.languageService.getLanguage().subscribe(lang => {
        this.currentLang = lang;
        this.updateCarouselOptions(lang);
      });
    }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
    rtl: false
  }

      // Safely update carousel options
      private updateCarouselOptions(lang: string): void {
        this.customOptions = { ...this.customOptions, rtl: lang === 'ar' };

        // Use setTimeout to defer the change detection
        setTimeout(() => {
          this.cdr.detectChanges();
        }, 0);
      }

}
