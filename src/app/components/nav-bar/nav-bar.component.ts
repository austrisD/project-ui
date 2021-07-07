import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {
  home: boolean = true;
  PersonalInfo: boolean = false;
  register: boolean = false;
  gallery: boolean = false;

  constructor() {}

  checkRoute(route) {
    this.home = false;
    this.PersonalInfo = false;
    this.register = false;
    this.gallery = false;

    this[route.view.location.pathname.slice(1)] = true;
    //must run onload
  }

  ngOnInit(): void {}
}
