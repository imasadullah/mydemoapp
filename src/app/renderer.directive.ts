import { HostListener } from '@angular/core';
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }
  @HostListener("mouseover") mouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "yellow");
    this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "default");

  }
  @HostListener("mouseleave") mouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");

  }

}
