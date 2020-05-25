import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-menu-tema',
  templateUrl: './menu-tema.page.html',
  styleUrls: ['./menu-tema.page.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }, ))
      ])
    ])
  ]
})
export class MenuTemaPage implements OnInit {

  idiomaSeleccionado: string;
  
  constructor(public navCtrl: NavController, private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.ruta.queryParams.subscribe( parametrosGET => {
      this.idiomaSeleccionado = parametrosGET["idiomaSeleccionado"];
    })
  }

  mostrarTema(temaSeleccionado: string)
  {
    let parametrosGET: NavigationExtras = 
    {
      queryParams: 
      {
        idiomaSeleccionado: this.idiomaSeleccionado,
        temaSeleccionado: temaSeleccionado
      }
    }

    this.navCtrl.navigateForward(temaSeleccionado, parametrosGET);

  }


}
