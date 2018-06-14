import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DomSecurePipe } from './pipes/dom-secure.pipe';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { PasswordPipe } from './pipes/password.pipe';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEs from '@angular/common/locales/es';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    DomSecurePipe,
    ExponentialStrengthPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
