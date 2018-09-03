import { Directive , EventEmitter, ElementRef, HostListener, Input, Output} from '@angular/core';

// EventEmitter, para notificar sobre sucesos.
// HostListener, para escuchar eventos del ratón
@Directive({
  selector: '[appNgDropZones]'
})
export class NgDropZonesDirective {
  @Output()
  mouseOver: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  /**
   * Cuando arrastramos algo sobre la zona de subir ficheros, se activa el callback donde
   * notificamos que se está trayendo un fichero
   * @param event
   *
   */
  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseOver.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseOver.emit(false);
  }
}
