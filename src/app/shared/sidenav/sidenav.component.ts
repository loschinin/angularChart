import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  @Input() sidenavOpen: boolean
  

  ngOnInit(): void {
    console.log(this.sidenavOpen)

  }

}
