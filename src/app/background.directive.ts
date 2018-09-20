import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

@Input() homeColor:string;
  constructor(element : ElementRef) {

    element.nativeElement.style.backgroundColor = "pink";
    element.nativeElement.style.border = "1px solid black";

    console.log(element);

  }


}
