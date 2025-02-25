import { Component } from '@angular/core';

@Component({
  selector: 'app-peopleassembly-page',
  templateUrl: './peopleassembly-page.component.html',
  styleUrls: ['./peopleassembly-page.component.css']
})
export class PeopleassemblyPageComponent {

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
