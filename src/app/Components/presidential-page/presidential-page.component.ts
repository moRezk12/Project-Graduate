import { Component } from '@angular/core';

@Component({
  selector: 'app-presidential-page',
  templateUrl: './presidential-page.component.html',
  styleUrls: ['./presidential-page.component.css']
})
export class PresidentialPageComponent {

  openCamera : boolean = false
  constructor() {
    // setInterval(() => {
    //   this.openCamera = false
    // }, 10000);
  }


  openPopup() {
    this.openCamera = true
  }

  closePopup(event: boolean) {
    this.openCamera = event
  }


}
