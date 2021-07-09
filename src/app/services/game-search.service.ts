import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gameApi } from '../../secret/apiKeys.js';

@Injectable({
  providedIn: 'root',
})
export class GameSearchService {
  constructor(private _obj: HttpClient) {}

  getGameDate() {
    if (window.location.pathname.slice(1).indexOf('search') == 0) {
      // make a reload
      console.log(window.location.pathname.slice(1));
      const path = window.location.pathname;
      return this._obj.get(
        `${gameApi.url}key=${gameApi.key}&search=${path.slice(
          path.search('/search/') + 8,
          path.length
        )}&page_size=1`
      );
    } else {
      return this._obj.get('');
    }
  }
}
