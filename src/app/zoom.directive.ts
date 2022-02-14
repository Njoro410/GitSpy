import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private elem:ElementRef) { }
  @HostListener("mouseenter")onMouseEnter() {
    this.zoom("transform: scale(1.5);")
  }
  @HostListener("mouseleave")noMouseLeave() {

  }
    private zoom(action:string){
      this.elem.nativeElement.style.zoom=action;
    }
}
