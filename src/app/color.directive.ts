import { Directive,ElementRef,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.background = "grey";

  }

  @HostBinding('style.fontStyle') changeFontStyle:string= "Normal";  //here we pass string in caseCase to the hostbinding decorator it uses property


  private setColor(color:string){

    this.el.nativeElement.style.background = color;
  }

  @HostListener('mouseenter') onMouseEnter(eventData:Event){   //it uses event.It listens the events of the Hosted DOM element
    this.setColor("#D3D3D3");
  }

  @HostListener('mouseleave') onMouseleave(){
    this.setColor("grey");
  }

  @HostListener('click') onClick(){
    this.changeFontStyle = "Italic";

  }

}
