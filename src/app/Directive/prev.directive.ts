import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {
  constructor(private el :ElementRef){}

  @HostListener('click')
  nextFunc(){
    var elem = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elem.getElementsByClassName("card");
    elem.prepend(item[item.length -1]);
    console.log(elem);
  }

  @HostListener('mouseenter')
hoverfun(){
  console.log('hover');
  
  var element = this.el.nativeElement;
  element.style.opacity = 1
}

@HostListener('mouseout')
hoveroutfun(){
  console.log('hover');
  
  var element = this.el.nativeElement;
  element.style.background = 'grey'
}

}
