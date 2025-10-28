import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SavedCitiesComponent } from './saved-cities/saved-cities.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'saved', component: SavedCitiesComponent }
];
