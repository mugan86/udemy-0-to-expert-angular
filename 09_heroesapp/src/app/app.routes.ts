import { RouterModule,  Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

export const APP_ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', pathMatch: 'full' , redirectTo: 'heroes' },
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true});
