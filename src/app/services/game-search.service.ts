import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameApi } from '../../secret/apiKeys.js';

@Injectable({
  providedIn: 'root',
})
export class GameSearchService {
  constructor(private _obj: HttpClient) {}

  // getGameDate() {
  //   return this._obj.get(GameApi.url);
  // }
  getGameDate() {
    return this._obj.get(
      'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm'
    );
  }
}
