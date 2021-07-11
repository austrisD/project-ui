import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-favorite',
  template: '<button class="btn btn-primary">Save to my library</button>',
})
export class AddFavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
