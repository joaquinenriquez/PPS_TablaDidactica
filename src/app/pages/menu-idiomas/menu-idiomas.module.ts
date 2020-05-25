import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuIdiomasPageRoutingModule } from './menu-idiomas-routing.module';

import { MenuIdiomasPage } from './menu-idiomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuIdiomasPageRoutingModule
  ],
  declarations: [MenuIdiomasPage]
})
export class MenuIdiomasPageModule {}
