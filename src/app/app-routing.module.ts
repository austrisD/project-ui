import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegisterComponent } from './components/register/register.component';
import { PersonInfoComponent } from './components/person-info/person-info.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HomeComponent } from './components/home/home.component';
import { Roots } from './roots';

const routes: Routes = [
  {
    path: Roots.url,
    component: HomeComponent,
  },
  {
    path: Roots.children.gallery.url,
    component: GalleryComponent,
  },
  {
    path: Roots.children.register.url,
    component: RegisterComponent,
  },
  {
    path: Roots.children.personalInfo.url,
    component: PersonInfoComponent,
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
