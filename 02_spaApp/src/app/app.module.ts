// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { LanguageConfigModule } from './language-config.module';
import { HttpClientModule } from '@angular/common/http';
import { WidgetsModule } from './widgets/widgets.module';

// Routes
import { AppRoutingModule } from './app.routes';

// Services
import { HeroesService } from './services/heroes.service';

// Components
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    WidgetsModule,
    HttpClientModule,
    LanguageConfigModule.forRoot(['es', 'eu', 'en'], 'es')
  ],
  exports: [ LanguageConfigModule],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
