import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameSearchService } from '../../services/game-search.service';
import { ManageFavoriteService } from '../../services/manage-favorite.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  data: any;
  game: any = [];
  selectGame: any;

  SearchResults: any = {};

  constructor(
    private _obj: GameSearchService,
    private manageFavoriteService: ManageFavoriteService
  ) {
    if (window.location.pathname.slice(1).indexOf('search') == 0) {
      _obj.getGameDate().subscribe((date) => {
        console.log(date);
        this.SearchResults = date;
      });
    }
  }

  ShowSearchInput() {
    const path = window.location.pathname;

    return path.slice(path.search('/search/') + 8, path.length);
  }

  ngOnInit(): void {}

  AddFavorite(game) {
    this.manageFavoriteService
      .addFavorites(game)
      .subscribe((game) => this.game.push(game));
  }

  ngOnDestroy(): void {}
}
