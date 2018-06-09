import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectComponent } from './components/protect/protect.component';
import { APP_ROUTING } from './app.routes';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PricesComponent,
    ProtectComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [ 
    AuthService, AuthGuardService 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
