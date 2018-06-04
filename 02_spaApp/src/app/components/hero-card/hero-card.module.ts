import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HeroCardComponent } from './hero-card.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    entryComponents: [
        HeroCardComponent
    ],
    declarations: [
        HeroCardComponent
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroCardModule { }
