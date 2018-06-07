import { UserNewComponent } from './user-new.component';
import { UserEditComponent } from './user-edit.component';
import { UserDetailComponent } from './user-detail.component';
import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
    { path: 'new', component: UserNewComponent },
    { path: 'edit', component: UserEditComponent },
    { path: 'details', component: UserDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'new' },
];

