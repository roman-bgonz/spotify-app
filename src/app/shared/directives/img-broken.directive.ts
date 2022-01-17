import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @Input() customImg: string = '';
  constructor(private elHost: ElementRef) {}

  /**
   * Se ejecuta cuando una imagen no pudo ser cargada y en su lugar pone una predefinida
   * Ya sea porque el server falló o porque la imagen fue eliminada
   */
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;

    if (this.customImg) {
      elNative.src = this.customImg;
    } else {
      elNative.src = '../../../assets/images/angular.png';
    }
  }
}
