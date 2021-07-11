import { Component, OnInit } from '@angular/core';
import { ManageFavoriteService } from '../../services/manage-favorite.service';

@Component({
  selector: 'app-favorite-games',
  templateUrl: './favorite-games.component.html',
})
export class FavoriteGamesComponent implements OnInit {
  favorites: any[] = [];
  constructor(private manageFavoriteService: ManageFavoriteService) {}

  ngOnInit(): void {
    this.manageFavoriteService
      .getFavorites()
      .subscribe((favorites) => (this.favorites = favorites));
  }

  deleteFavorite() {
    console.log('this record is deleted');
  }
}
