import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'autoevaluacion',
    loadComponent: () =>
      import('./pages/autoevaluacion/autoevaluacion.page').then(
        (m) => m.AutoevaluacionPage
      ),
  },
  {
    path: 'agenda',
    loadComponent: () =>
      import('./pages/agenda/agenda.page').then((m) => m.AgendaPage),
  },
  {
    path: 'directorio',
    loadComponent: () =>
      import('./pages/directorio/directorio.page').then(
        (m) => m.DirectorioPage
      ),
  },
  {
    path: 'respiracion',
    loadComponent: () => import('./pages/respiracion/respiracion.page').then( m => m.RespiracionPage)
  },
];
