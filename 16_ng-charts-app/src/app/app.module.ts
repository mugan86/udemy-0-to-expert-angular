import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GraphicLinesComponent } from './components/graphic-lines/graphic-lines.component';
import { BarChartsComponent } from './components/bar-charts/bar-charts.component';
import { DonaChartsComponent } from './components/dona-charts/dona-charts.component';
import { RadarChartsComponent } from './components/radar-charts/radar-charts.component';

// Services
import { FilesLoadService } from './services/files-load.service';
import { DrawChartService } from './services/draw-chart.service';

@NgModule({
  declarations: [
    AppComponent,
    GraphicLinesComponent,
    BarChartsComponent,
    DonaChartsComponent,
    RadarChartsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [ DrawChartService, FilesLoadService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
