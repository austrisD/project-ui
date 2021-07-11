import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  modal: boolean = false;
  passData: any = [];
  @Input() data!: any;
  @Input() btnFunc: any;
  @Input() btnTag!: string;

  constructor() {}

  activateModal() {
    this.modal = !this.modal;
    // console.log(this.modal);
  }

  ngOnInit(): void {}
}
