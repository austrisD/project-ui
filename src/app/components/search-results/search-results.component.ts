import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  constructor() {}

  ShowSearchInput() {
    const path = window.location.pathname;
    return path.slice(path.search('/search/') + 8, path.length);
  }

  ngOnInit(): void {}

  test() {}

  ngOnDestroy(): void {}
}
