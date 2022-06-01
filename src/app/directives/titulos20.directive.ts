import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitulos20]'
})
export class Titulos20Directive {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.fontSize= "20px";
  }

}
