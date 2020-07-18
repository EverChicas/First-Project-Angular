import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[Example]'
})
export class ExampleDirective {

  constructor(
    public el:ElementRef,
    public renderer:Renderer2
  )
  {}

    @Input() color: string
    @Input() underline: boolean

    ngOnInit(){
      this.renderer.setStyle(this.el.nativeElement,'color',this.color)
      this.renderer.setStyle(this.el.nativeElement,'text-decoration',this.underline?'underline':'')
    }

  // EJEMPLO USANDO EVENTOS DE MOUSE
  // @HostListener('mouseenter') onMouseEnter(){
  //   this.hover(true)
  // }

  // @HostListener('mouseleave') onMouseLeave(){
  //   this.hover(false)
  // }

  // hover(color: boolean):void{
  //   if(color){
  //     this.renderer.setStyle(this.el.nativeElement,'color',"red")
  //   }else{
  //     this.renderer.setStyle(this.el.nativeElement,'color',"blue")
  //   }
  // }

  // CODIGO PARA DAR UN ESTILO ESPECIFICO A UN ELEMENTO HTML
  // @Input() Example:Boolean

  // ngOnInit(){
  //   if(this.Example) this.renderer.setStyle(this.el.nativeElement,'color',"red")
  // }

}
