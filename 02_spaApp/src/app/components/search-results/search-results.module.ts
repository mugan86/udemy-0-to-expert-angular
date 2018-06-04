import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SearchResultsComponent } from './search-results.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    entryComponents: [
        SearchResultsComponent
    ],
    declarations: [
        SearchResultsComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchResultsModule { }
