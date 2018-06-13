import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../widgets/widgets.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LanguageConfigModule } from '../language-config.module';

const COMPONENTS = [
    HomeComponent,
    HeroesComponent,
    HeroComponent,
    SearchResultsComponent,
    AboutComponent,
    SearchResultsComponent,
    NavbarComponent
];
@NgModule({
    imports: [
      CommonModule,
      LanguageConfigModule,
      RouterModule,
      WidgetsModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
  })
  export class ComponentsModule { }
