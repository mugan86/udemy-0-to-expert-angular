import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GridlistComponent } from './components/gridlist/gridlist.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MapComponent } from './components/map/map.component';
import { MapEditComponent } from './components/map/map-edit.component';

@NgModule({
  entryComponents: [
    MapEditComponent
  ],
  declarations: [
    AppComponent,
    AutocompleteComponent,
    GridlistComponent,
    ButtonsComponent,
    MapComponent,
    MapEditComponent
  ],
  imports: [
    AgmJsMarkerClustererModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjfTdahA-F-EvUS0zdxvEfeyHtYqttDjw'
    }),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
