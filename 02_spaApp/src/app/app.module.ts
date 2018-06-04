import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Routes
import { AppRoutingModule } from './app.routes';

// Services
import { HeroesService } from './services/heroes.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Modules
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    HeroCardComponent,
    SearchResultsComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
