import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ManageFavoriteService } from '../../../../services/manage-favorite.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
})
export class PopUpComponent implements OnInit {
  @Input() modal!: boolean; //create type
  @Output() modalChange = new EventEmitter<boolean>();
  @Input() game!: any; //create type
  @Input() btnFunc: any;
  @Input() btnTag!: string;
  constructor(private manageFavoriteService: ManageFavoriteService) {}
  //manageFavoriteService   need for   AddFavorite()  function

  modalOff() {
    this.modal = false;
    this.modalChange.emit(this.modal); //return to parent element
  }
  ngOnInit(): void {}
}
