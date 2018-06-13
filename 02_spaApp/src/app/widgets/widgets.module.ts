import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { LanguageConfigModule } from '../language-config.module';

const COMPONENTS = [
    HeroCardComponent
];
@NgModule({
    imports: [
      CommonModule,
      LanguageConfigModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class WidgetsModule { }
