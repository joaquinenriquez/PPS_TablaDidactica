import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuTemaPageRoutingModule } from './menu-tema-routing.module';

import { MenuTemaPage } from './menu-tema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTemaPageRoutingModule
  ],
  declarations: [MenuTemaPage]
})
export class MenuTemaPageModule {}
