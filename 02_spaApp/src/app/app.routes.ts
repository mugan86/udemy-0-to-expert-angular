import { RouterModule,  Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: 'search/:text', component: SearchResultsComponent },
    { path: '**', pathMatch: 'full' , redirectTo: 'home' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule { }
