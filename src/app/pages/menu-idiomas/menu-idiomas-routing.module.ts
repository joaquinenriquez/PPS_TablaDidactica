import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuIdiomasPage } from './menu-idiomas.page';

const routes: Routes = [
  {
    path: '',
    component: MenuIdiomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuIdiomasPageRoutingModule {}
