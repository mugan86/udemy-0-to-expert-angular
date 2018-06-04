import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    exports: [
      HeroesComponent
    ],
    declarations: [
      HeroesComponent
    ],
    imports: [
      BrowserModule,
      CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroesModule { }
