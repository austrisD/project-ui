import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameSearchService } from '../../services/game-search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  SearchResults: any;

  constructor(private _obj: GameSearchService) {
    // if (window.location.pathname.slice(1).indexOf('search') == 0) {
    _obj.getGameDate().subscribe((date) => {
      console.log(date);
      this.SearchResults = date;
    });
    // }
  }

  ShowSearchInput() {
    const path = window.location.pathname;

    return path.slice(path.search('/search/') + 8, path.length);
  }

  returnContainerHight() {
    console.log(`${this.SearchResults.results.length * 65}px`);
    if (this.SearchResults.results.length * 65 < 500) {
      return `fit-content`;
    } else {
      return `${this.SearchResults.results.length * 65}px`;
    }
  }

  ngOnInit(): void {}

  test() {}

  ngOnDestroy(): void {}
}
