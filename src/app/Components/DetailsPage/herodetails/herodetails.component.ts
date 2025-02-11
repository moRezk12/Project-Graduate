import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent {

  constructor(private locatinRoute:Location){}

  GoBack() {
    this.locatinRoute.back()

  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }



}
