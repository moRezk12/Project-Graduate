import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(    private _router: Router){}

    token : string = ''
    logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
    this.token = '';
  }

}
