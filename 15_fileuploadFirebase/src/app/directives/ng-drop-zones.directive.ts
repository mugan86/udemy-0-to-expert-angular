import { Directive , EventEmitter, ElementRef, HostListener, Input, Output, Host} from '@angular/core';
import { FileItem } from '../models/file-item';

// EventEmitter, para notificar sobre sucesos.
// HostListener, para escuchar eventos del ratón
@Directive({
  selector: '[appNgDropZones]'
})
export class NgDropZonesDirective {

  @Input() files: FileItem[] = [];
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
    this._preventAndPause( event );
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseOver.emit(false);
    this._preventAndPause(event);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    const trasnference = this._getTransference(event);
    if (!trasnference) {
      return;
    }
    this._preventAndPause( event );
    this._extractFiles(trasnference.files);
    this.mouseOver.emit(false);
  }

  private _getTransference ( event: any ) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extractFiles( filesList: FileList ) {
    // tslint:disable-next-line:forin
    for ( const property in Object.getOwnPropertyNames ( filesList)) {
      const temporaly = filesList[property];
      if ( this._fileCanLoad( temporaly )) {
        this.files.push( new FileItem( temporaly ));
      }
    }
    console.log(this.files);

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
