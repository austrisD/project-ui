import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegisterComponent } from './components/register/register.component';
import { PersonInfoComponent } from './components/person-info/person-info.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HomeComponent } from './components/home/home.component';
import { FavoriteGamesComponent } from './components/favorite-games/favorite-games.component';
import { Roots } from './roots';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: Roots[0].url,
    component: PersonInfoComponent,
  },
  {
    path: Roots[1].url,
    component: RegisterComponent,
  },
  {
    path: Roots[2].url,
    component: GalleryComponent,
  },
  {
    path: Roots[3].url,
    component: FavoriteGamesComponent,
  },
  {
    path: 'search/:game-search',
    component: SearchResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
