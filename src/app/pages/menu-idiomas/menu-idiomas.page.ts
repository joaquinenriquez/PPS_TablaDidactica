import { EIdiomas } from './../../model/e-idiomas.enum';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-menu-idiomas',
  templateUrl: './menu-idiomas.page.html',
  styleUrls: ['./menu-idiomas.page.scss'],
})
export class MenuIdiomasPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    
  }

  mostrarMenuTemas(idiomaSeleccionado: string) {

    let parametrosGET: NavigationExtras = {
      queryParams: {
        idiomaSeleccionado: idiomaSeleccionado //JSON.stringify(idioma),
      }
    };

    this.navCtrl.navigateForward('menu-tema', parametrosGET);
  }

}
