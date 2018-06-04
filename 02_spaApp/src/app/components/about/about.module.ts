import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AboutComponent } from './about.component';

@NgModule({
  entryComponents: [
      AboutComponent
  ],
  declarations: [
      AboutComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutModule { }
