import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-page-control',
  templateUrl: './page-control.component.html',
})
export class PageControlComponent implements OnInit {
  @Input() pageCount!: any;

  @Input() activePage!: number;
  @Output() newActivePage = new EventEmitter<number>();

  nr!: number;
  constructor() {}

  previousPage() {
    const isPageFalse = this.activePage <= 1; //check if page is not less then 0/
    if (!isPageFalse) this.activePage = this.activePage - 1;
    this.newActivePage.emit(this.activePage);
    console.log(this.activePage);
  }

  nextPage() {
    const isPageFalse = this.activePage >= this.pageCount.length; //check if active page is no more then awaitable.
    if (!isPageFalse) this.activePage = this.activePage + 1;
    this.newActivePage.emit(this.activePage);
    console.log(this.activePage);
  }

  setPage(nr: number) {
    this.activePage = nr + 1;
    this.newActivePage.emit(this.activePage);
    console.log(this.activePage);
  }

  ngOnInit(): void {
    if (typeof this.pageCount == 'number') {
      this.pageCount = Array(this.pageCount)
        .fill(0)
        .map((x, i) => i);
    } else if (typeof this.pageCount == 'object') {
      this.pageCount = Object.keys(this.pageCount).length;
    }
    // generate a array for loop
  }
}
