import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user/user-detail.component';
import { UserNewComponent } from './components/user/user-new.component';
import { UserEditComponent } from './components/user/user-edit.component';
import { USER_ROUTES } from './components/user/user.routes';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'user/:id', component: UserComponent,
        children:  USER_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true });
