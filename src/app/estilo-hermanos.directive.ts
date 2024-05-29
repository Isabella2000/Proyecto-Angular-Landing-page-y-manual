import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

  constructor(
    private element: ElementRef
  ) { 
    //? Directiva personalizada y creada desde consola con los comandos de Angular CLI
    this.element.nativeElement.style.backgroundColor = "green"
  }

}
