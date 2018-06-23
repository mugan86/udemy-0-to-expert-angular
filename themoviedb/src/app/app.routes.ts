import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:text', component: SearchComponent },
    { path: 'movie/:id/:page', component: MovieDetailsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true });