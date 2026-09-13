import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GisComponent } from './gis/gis.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gis',
    component: GisComponent
  }
];