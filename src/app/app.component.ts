import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sidenavOpen = false;

  sidenavToggler() {
    this.sidenavOpen = !this.sidenavOpen
    //console.log(this.sidenavOpen)
  }

  title = 'AppComponent';
}
