import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gameApi } from '../../secret/apiKeys.js';

@Injectable({
  providedIn: 'root',
})
export class GameSearchService {
  pageSize: number = 40;
  pageSizeString: string = `&page_size=${this.pageSize}`;
  activePage: number = 1;
  activePageString: string = `&page=${this.activePage}`;
  constructor(private _obj: HttpClient) {}

  getGameDate() {
    const path = window.location.pathname;
    return this._obj.get(
      `${gameApi.url}key=${gameApi.key}&search=${path.slice(
        path.search('/search/') + 8,
        path.length
      )}${this.pageSizeString}`
    );
  }
  
  changePage(nr) {
    this.activePage = nr;
  }
}
