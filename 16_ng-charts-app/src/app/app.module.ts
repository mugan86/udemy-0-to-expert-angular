import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { GraphicLinesComponent } from './components/graphic-lines/graphic-lines.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphicLinesComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
