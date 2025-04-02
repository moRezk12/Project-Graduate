import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/services/Auth/auth.service';
import { LanguageService } from 'src/app/Core/services/Languages/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  showPassword = false;

  currentLang: string = 'en';

  constructor (private languageService: LanguageService ,
    private authService: AuthService,
    private router : Router ,
    private formBuilder: FormBuilder){
    this.languageService.getLanguage().subscribe(lang => {
      this.currentLang = lang;
    });

    this.loginForm = this.formBuilder.group({
      nameOrEmail: ['', [Validators.required, this.emailOrUsernameValidator]], // التحقق من البريد الإلكتروني
      password: ['', [Validators.required, Validators.minLength(6)]], // يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل
      rememberMe: [false]
    });

  }

  emailOrUsernameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null; // لا يوجد خطأ إذا كان الحقل فارغًا، لأنه مطلوب بالفعل

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // تحقق من البريد الإلكتروني
    const usernameRegex = /^[a-zA-Z0-9_.-]+$/; // تحقق من اسم المستخدم (حروف وأرقام و _ . -)

    if (emailRegex.test(value) || usernameRegex.test(value)) {
      return null; // القيمة صالحة
    }

    return { invalidNameOrEmail: true }; // إذا لم تكن صالحة، يتم إرجاع خطأ
  }

  submitLoginForm() {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          // this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      })
    } else {
      console.log('Form is invalid');
      this.loginForm.markAllAsTouched(); 
    }
  }


  showIcon() {
    this.showPassword = !this.showPassword;
  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }



}
