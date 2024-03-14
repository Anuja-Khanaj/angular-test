import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private elem:ElementRef) { }
@HostListener('click')
  nextFunc(){
    var element = this.elem.nativeElement.parentElement.parentElement.children[0];
    let item = element.getElementsByClassName("card");
    element.append(item[0]);
  }

@HostListener('mouseenter')
hoverfun(){
  console.log('hover');
  
  var element = this.elem.nativeElement;
  element.style.opacity = 1
}

@HostListener('mouseout')
hoveroutfun(){
  console.log('hover');
  
  var element = this.elem.nativeElement;
  element.style.background = 'grey'
}

}
