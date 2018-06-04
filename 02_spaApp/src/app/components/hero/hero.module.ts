import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HeroComponent } from './hero.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    exports: [
        HeroComponent
    ],
    declarations: [
        HeroComponent
    ],
    imports: [
        BrowserModule,
        CommonModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroModule { }
