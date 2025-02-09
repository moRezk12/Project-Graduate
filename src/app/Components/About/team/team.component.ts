import { ChangeDetectorRef, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/Core/services/Languages/language.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

    currentLang: string = 'en';
    constructor( private languageService: LanguageService , private cdr: ChangeDetectorRef) {
      // اشترك في تغيير اللغة باستخدام LanguageService
      this.languageService.getLanguage().subscribe(lang => {
        this.currentLang = lang;
                // Safely update customOptions and apply changes without causing assertion errors
                this.updateCarouselOptions(lang);
      });
    }

  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      navSpeed: 300,
      navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
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
      nav: true,
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
