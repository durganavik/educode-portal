import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    // Folder 'pages/home' ke andar file 'home.ts' hai
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses').then(m => m.Courses)
  },
 {
  path: 'mentors',
  loadComponent: () => import('./pages/mentors/mentors').then(m => m.Mentors)
},
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  }
];