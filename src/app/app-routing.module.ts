import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/private/private.module').then(
      m =>
        m.PrivateModule

    ), canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/public/public.module').then(
      m =>
        m.PublicModule

    ), canActivate: [LoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
