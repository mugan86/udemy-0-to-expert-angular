import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';

const MODULES = [
    AboutModule,
    HomeModule
];

@NgModule({
    imports: MODULES,
    exports: [ CommonModule ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
