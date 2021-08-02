import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private element: ElementRef) {
    console.log("element:",element);
    element.nativeElement.style.backgroundColor = "purple";
    element.nativeElement.style.color = "white";
  
    element.nativeElement.style.cursor = "default";
   }
   
  //  @HostListener("mouseover") mouseOver() {
  //   this.element.nativeElement.style.backgroundColor = "blue";
    
  // }
  //  @HostListener("mouseleave") mouseLeave() {
  //    this.element.nativeElement.style.backgroundColor = "purple";
    
  // }

}
