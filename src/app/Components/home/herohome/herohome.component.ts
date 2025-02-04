import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-herohome',
  templateUrl: './herohome.component.html',
  styleUrls: ['./herohome.component.css']
})
export class HerohomeComponent {

  images = [
    "./assets/images/Home/hero/vote_1622814.png   ",
    "./assets/images/Home/hero/ballot-box_7553513.png   ",
    "./assets/images/Home/hero/vote-yes_7444474.png   ",
    "./assets/images/Home/hero/voting_8597212.png   ",
    "./assets/images/Home/hero/bowl_3261225.png   ",
    "./assets/images/Home/hero/vote_3553531.png   ",
    "./assets/images/Home/hero/team_10618159.png   ",
    "./assets/images/Home/hero/undraw_team_spirit_re_yl1v.png   ",

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
        items: 8
      },
      400: {
        items: 8
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: false ,
    rtl: false
  }

}
