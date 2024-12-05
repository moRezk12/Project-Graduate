import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuOpen = false;

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
