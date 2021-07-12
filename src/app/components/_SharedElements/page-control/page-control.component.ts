import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-page-control',
  templateUrl: './page-control.component.html',
})
export class PageControlComponent implements OnInit {
  @Input() pageCount: any = 10;
  @Output() newActivePage = new EventEmitter();

  @Input() activePage!: number;
  // pageNR: number = 1;
  constructor() {}

  previousPage() {
    const isPageFalse = this.activePage <= 0; //check if page is not less then 0/
    if (!isPageFalse) this.activePage = this.activePage - 1;
    // this.newActivePage.emit(this.activePage);
    console.log(this.activePage);
  }

  nextPage() {
    const isPageFalse = this.activePage >= this.pageCount; //check if active page is no more then awaitable.
    if (!isPageFalse) this.activePage = this.activePage + 1;
    // this.newActivePage.emit(this.activePage);
    console.log(this.activePage);
  }

  setPage(pageNR) {
    this.newActivePage.emit(pageNR + 1);
  }

  ngOnInit(): void {
    if (this.pageCount === Number) {
      this.pageCount = Array(this.pageCount)
        .fill(0)
        .map((x, i) => i);
    } else if (this.pageCount == Object) {
      this.pageCount = Object.keys(this.pageCount).length;
    }

    console.log(this.pageCount);

    //generate a array for loop
  }
}
