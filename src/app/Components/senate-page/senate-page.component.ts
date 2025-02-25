import { Component } from '@angular/core';

@Component({
  selector: 'app-senate-page',
  templateUrl: './senate-page.component.html',
  styleUrls: ['./senate-page.component.css']
})
export class SenatePageComponent {

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
