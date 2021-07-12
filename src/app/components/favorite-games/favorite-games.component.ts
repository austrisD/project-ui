import { Component, OnInit } from '@angular/core';
import { ManageFavoriteService } from '../../services/manage-favorite.service';

@Component({
  selector: 'app-favorite-games',
  templateUrl: './favorite-games.component.html',
})
export class FavoriteGamesComponent implements OnInit {
  favorites: any[] = [];
  activePage = this.manageFavoriteService.activePage;
  pageCount: number = 10;

  constructor(private manageFavoriteService: ManageFavoriteService) {}

  ngOnInit(): void {
    this.manageFavoriteService
      .getFavorites()
      .subscribe((favorites) => (this.favorites = favorites));
    // this.pageCount = Object.keys(this.favorites).length;
  }

  test(pageCount) {
    // console.log(this.favorites.length);
    console.log(this.activePage);
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
