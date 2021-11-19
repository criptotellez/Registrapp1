import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'recuperate',
    loadChildren: () => import('./page/recuperate/recuperate.module').then( m => m.RecuperatePageModule), canActivate : [NoIngresadoGuard]
  },
  {
    path: 'logueado',
    loadChildren: () => import('./page/logueado/logueado.module').then( m => m.LogueadoPageModule), canActivate : [IngresadoGuard]
  },

  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule),canActivate : [NoIngresadoGuard]
  },

  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule), canActivate : [NoIngresadoGuard]
  },

  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module' ).then( m => m.HomePageModule), canActivate : [NoIngresadoGuard]
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./page/actualizar/actualizar.module').then( m => m.ActualizarPageModule), canActivate : [IngresadoGuard]
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./page/codigo-qr/codigo-qr.module').then( m => m.CodigoQrPageModule), canActivate : [IngresadoGuard]
  },

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule, ]
})
export class AppRoutingModule { }
