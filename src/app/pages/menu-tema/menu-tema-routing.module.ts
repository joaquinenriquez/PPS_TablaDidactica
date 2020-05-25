import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTemaPage } from './menu-tema.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTemaPageRoutingModule {}
