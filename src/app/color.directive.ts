import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.background = "grey";

  }


  private setColor(color:string){

    this.el.nativeElement.style.background = color;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setColor("#D3D3D3");
  }

  @HostListener('mouseleave') onMouseleave(){
    this.setColor("grey");
  }

}
