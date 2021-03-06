import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// import { GaugeModule } from 'angular-gauge';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PersonInfoComponent } from './components/person-info/person-info.component';
import { BannerComponent } from './components/banner/banner.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HomeComponent } from './components/home/home.component';
import { FavoriteGamesComponent } from './components/favorite-games/favorite-games.component';
import { CardComponent } from './components/_SharedElements/card/card.component';
import { PopUpComponent } from './components/_SharedElements/card/pop-up/pop-up.component';
import { AddFavoriteComponent } from './components/_SharedElements/add-favorite/add-favorite.component';
import { DeleteFavoriteComponent } from './components/_SharedElements/delete-favorite/delete-favorite.component';
import { PageControlComponent } from './components/_SharedElements/page-control/page-control.component';
import { LoadingComponent } from './components/_SharedElements/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    GalleryComponent,
    PersonInfoComponent,
    BannerComponent,
    RegisterComponent,
    SearchBarComponent,
    SearchResultsComponent,
    HomeComponent,
    FavoriteGamesComponent,
    CardComponent,
    PopUpComponent,
    AddFavoriteComponent,
    DeleteFavoriteComponent,
    PageControlComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    // GaugeModule.forRoot(),
    // MatFormFieldModule,
    // MatSelectModule,
    // MatTabsModule,
    // MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
