import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {

  temaSeleccionado: string;
  idiomaSeleccionado: string;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.ruta.queryParams.subscribe(parametrosGET => {
      
      this.idiomaSeleccionado = parametrosGET["idiomaSeleccionado"];
      this.temaSeleccionado = parametrosGET["temaSeleccionado"];

    });

  }

  cambiarIdioma(idioma: string)
  {
   alert(idioma);
  }
  


}
