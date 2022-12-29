import { Directive,ElementRef,OnInit,OnDestroy,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSpanElement]'
})
export class SpanElementDirective implements OnInit,OnDestroy{

  @Input() textColor:string= undefined|| 'red';
  @Input() backgroundColor!:string;
  constructor(private element:ElementRef) {
    //debugger;
    //this.textColor=;
   }
  ngOnDestroy(): void {
    console.log("Deractives detory");
  }
  ngOnInit(): void {
   // debugger;
    console.log("Element Directives Object created");
    this.element.nativeElement.style.color=this.textColor;
    console.log("textColor :"+this.textColor)
  }
  @HostListener("mouseenter")
  mouseEnter(){
    this.element.nativeElement.style.color="yellow";
  }
  @HostListener('mouseleave')
  mouseLeave(){
    this.element.nativeElement.style.color="green";
  }

}
