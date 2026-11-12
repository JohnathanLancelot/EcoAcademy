import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SubjectPageComponent } from './pages/subject-page/subject-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'subjects/:slug',
    component: SubjectPageComponent
  }
];