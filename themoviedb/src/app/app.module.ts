import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { APP_ROUTING } from './app.routes';


// Services
import { TheMovieDbApiService } from './providers/the-movie-db-api.service';
import { MoviesPosterPipe } from './pipes/movies-poster.pipe';
import { GalleryComponent } from './widgets/gallery/gallery.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    SearchComponent,
    NavbarComponent,
    MoviesPosterPipe,
    GalleryComponent,
    PaginationComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [ TheMovieDbApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
