import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { LoadComponent } from './components/load/load.component';

const ROUTES: Routes = [
    { path: 'photos', component: PhotosComponent},
    { path: 'load', component: LoadComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'photos' }
];


export const APP_ROUTES = RouterModule.forRoot( ROUTES );
