import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HomeComponent } from './home.component';
@NgModule({
    entryComponents: [
        HomeComponent
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomeModule { }
