import { Component } from '@angular/core';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent {


  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }


}
