import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showPassword: boolean = false;

  showIcon() {
    this.showPassword = !this.showPassword;
  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }



}
