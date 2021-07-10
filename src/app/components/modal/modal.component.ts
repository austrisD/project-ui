import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Input() modal!: boolean; //create type
  @Output() modalChange = new EventEmitter<boolean>();
  @Input() data!: any; //create type
  constructor() {}

  modalOff() {
    this.modal = false;
    this.modalChange.emit(this.modal);
  }

  ngOnInit(): void {}
}
