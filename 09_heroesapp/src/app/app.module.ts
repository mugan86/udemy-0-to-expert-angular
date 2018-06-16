import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { LoadingComponent } from './widgets/loading/loading.component';

import { HeroesService } from './services/heroes.service';
import { KeysPipe } from './pipes/keys.pipe';
import { ModalComponent } from './widgets/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe,
    LoadingComponent,
    ModalComponent,
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  entryComponents: [ModalComponent],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
