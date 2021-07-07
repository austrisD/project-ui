import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegisterComponent } from './components/register/register.component';
import { PersonInfoComponent } from './components/person-info/person-info.component';

const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'PersonalInfo',
    component: PersonInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
