import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/Core/services/Languages/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuOpen = false;
  currentLang: string = 'en';

  constructor(private translate: TranslateService,
    private renderer: Renderer2,
    private languageService: LanguageService) {
    this.languageService.getLanguage().subscribe((lang) => {
      this.currentLang = lang;
      this.setLangAttribute(lang);
      // this.flag = lang === 'ar';
    });
  }

  setLangAttribute(lang: string) {
    this.renderer.setAttribute(document.body, 'lang', lang);
  }
  // تغيير اللغة
  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.languageService.changeLanguage(lang);

    // تعيين الاتجاه بناءً على اللغة المختارة
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', lang);
  }


  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle the menu visibility
  }

  hide(){
    this.menuOpen = false;
  }

  scrollTop(){
    this.hide();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
