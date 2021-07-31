import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-page-control',
  templateUrl: './page-control.component.html',
})
export class PageControlComponent implements OnInit {
  @Input() itemCount!: any;

  @Input() activePage!: number;
  @Output() newActivePage = new EventEmitter<number>();

  nr!: number;
  constructor() {}

  previousPage() {
    const isPageFalse = this.activePage <= 1; //check if page is not less then 0/
    if (!isPageFalse) this.activePage--;
    this.newActivePage.emit(this.activePage);
  }

  nextPage() {
    const isPageFalse = this.activePage >= this.itemCount.length; //check if active page is no more then awaitable.
    if (!isPageFalse) this.activePage++;
    this.newActivePage.emit(this.activePage);
  }

  setPage(nr: number) {
    this.activePage = nr + 1;
    this.newActivePage.emit(this.activePage);
  }

  ngOnInit(): void {
    console.log(this.itemCount);

    if (typeof this.itemCount == 'number') {
      this.itemCount = Array(this.itemCount)
        .fill(0)
        .map((x, i) => i);
    } else if (typeof this.itemCount == 'object') {
      this.itemCount = Object.keys(this.itemCount).length;
    }
    // generate a array for loop
  }
}
