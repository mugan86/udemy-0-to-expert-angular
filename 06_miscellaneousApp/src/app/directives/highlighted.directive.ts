import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor( private el: ElementRef) {
    console.log('highligh directive start!!');
  }
  @Input('appHighlighted') appHighlighted: string;

  @HostListener('mouseenter') mouseEnter() {
    console.log(this.appHighlighted);
    this.highLight(this.appHighlighted || 'yellow');
  }
  @HostListener('mouseleave') mouseOut() {
    this.highLight(null);
  }

  private highLight (color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
