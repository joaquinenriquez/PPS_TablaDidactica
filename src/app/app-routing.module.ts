import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu-idiomas',
    pathMatch: 'full'
  },
  {
    path: 'animales',
    loadChildren: () => import('./pages/animales/animales.module').then( m => m.AnimalesPageModule)
  },
  {
    path: 'menu-tema',
    loadChildren: () => import('./pages/menu-tema/menu-tema.module').then( m => m.MenuTemaPageModule)
  },
  {
    path: 'menu-idiomas',
    loadChildren: () => import('./pages/menu-idiomas/menu-idiomas.module').then( m => m.MenuIdiomasPageModule)
  },
  {
    path: 'numeros',
    loadChildren: () => import('./pages/numeros/numeros.module').then( m => m.NumerosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
