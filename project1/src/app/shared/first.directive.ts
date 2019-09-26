import { Directive, ElementRef } from '@angular/core';
@Directive({
   selector: '[first]'
})

export class FirstDirective {
    //Element: any;
    // title:'rama';
    // Element: any;
   constructor(private Element: ElementRef) {
    console.log(Element);
   
 }
 ngOnInit() {
     this.Element.nativeElement.style.backgroundColor='yellow';
     this.Element.nativeElement.style.color='red';
     this.Element.nativeElement.style.width="20%";
     this.Element.nativeElement.style.height="50%";
     this.Element.nativeElement.style.textTransform= "capitalize";
     this.Element.nativeElement.style.firstletter.textTransform="capitalize";

    
 }
}