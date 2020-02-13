import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenavClick: EventEmitter<boolean> = new EventEmitter()
  constructor() { }

  menu = 'menu'

  toggleSideNav() {
    this.toggleSidenavClick.emit()
    this.menu === 'menu' ?
      this.menu = 'close' :
      this.menu = 'menu'
    //console.log(this.menu)
  }



  ngOnInit(): void {

  }



}
