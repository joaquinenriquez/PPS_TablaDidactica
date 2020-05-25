import { Component, OnInit, ViewChild, ElementRef, ViewChildren, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {


  @ViewChild("boton") botonesTabla: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  boton_click()
  {
    this.renderer.addClass(this.botonesTabla.nativeElement, 'animate__animated');
    this.renderer.addClass(this.botonesTabla.nativeElement, 'animate__bounce');
    
    setTimeout(() => {
      this.renderer.removeClass(this.botonesTabla.nativeElement, 'animate__animated');
      this.renderer.removeClass(this.botonesTabla.nativeElement, 'animate__bounce');
    }, 2000)

  }

}
