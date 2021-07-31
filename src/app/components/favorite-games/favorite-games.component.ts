import { Component, OnInit } from '@angular/core';
import { ManageFavoriteService } from '../../services/manage-favorite.service';

@Component({
  selector: 'app-favorite-games',
  templateUrl: './favorite-games.component.html',
})
export class FavoriteGamesComponent implements OnInit {
  favorites: any = this.manageFavoriteService
    .getFavorites()
    .subscribe((favorites) => (this.favorites = favorites));
  activePage = this.manageFavoriteService.activePage;
  itemCount: Number =  this.favorites.length;//still same

  constructor(private manageFavoriteService: ManageFavoriteService) {}

  ngOnInit(): void {}

  test(pageCount) {
    // this.pageCount = Object.keys(this.favorites).length;
  }

  deleteFavorite() {
    console.log('this record is deleted');
  }

  // reloadData() {
  //   this.favorites = this.favorites;
  //   console.log(this.activePage);
  // }
}
