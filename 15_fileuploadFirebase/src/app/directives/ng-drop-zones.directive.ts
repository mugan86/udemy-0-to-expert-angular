import { Directive , EventEmitter, ElementRef, HostListener, Input, Output} from '@angular/core';
import { FileItem } from '../models/file-item';
import { ngDevModeResetPerfCounters } from '@angular/core/src/render3/ng_dev_mode';

// EventEmitter, para notificar sobre sucesos.
// HostListener, para escuchar eventos del ratón
@Directive({
  selector: '[appNgDropZones]'
})
export class NgDropZonesDirective {

  @Input() files: FileItem[];
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

  // Validations

  private _preventAndPause ( event ) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _fileCanLoad( file: File ): boolean {
    if ( !this._fileAlreadyAdd (file.name) &&
          this._isImage ( file.type )) {
            return true;
    }
    return false;
  }

  private _fileAlreadyAdd( fileName: string ): boolean {
    for (const file of this.files ) {
      if (file.archiveName === fileName) {
        console.log(`The file ${fileName} already add`);
        return true;
      }
    }
    return false;
  }

  // Check if drop file is image

  private _isImage( fileType: string ): boolean {
    return ( fileType === '' || fileType === undefined ) ? false : fileType.startsWith('image');
  }
}
