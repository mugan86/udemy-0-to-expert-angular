import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectComponent } from './components/protect/protect.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prices', component: PricesComponent },
    { path: 'protect', component: ProtectComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true });
