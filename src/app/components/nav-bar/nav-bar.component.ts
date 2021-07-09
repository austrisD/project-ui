import { Component, OnInit } from '@angular/core';
import { Roots } from '../../roots';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {
  home: boolean = true;
  PersonalInfo: boolean = false;
  register: boolean = false;
  gallery: boolean = false;
  SearchSectionActive: boolean = true;

  roots = Roots;
  activePath!: string;

  constructor() {}

  testLink() {
    return window.location.pathname.slice(1);
  }

  ngOnInit(): void {
    this.activePath = window.location.pathname.slice(1);
  }
}
