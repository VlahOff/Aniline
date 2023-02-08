import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective {
  @HostBinding('class.open') showMenu = false;

  @HostListener('document:click', ['$event']) toggleMenu(event: Event) {
    this.showMenu = this.elRef.nativeElement.contains(event.target) ? !this.showMenu : false;
  }

  constructor(private elRef: ElementRef) { }
}
