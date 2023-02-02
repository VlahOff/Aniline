import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appToolTip]'
})
export class RollOutDirective {
  @Input() className = '';

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.classList.add(this.className)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove(this.className)
  }
}