import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Routing
import { APP_ROUTING } from './app.routes';

// Pipes
import { DomSecurePipe } from './pipes/dom-secure.pipe';
import { YoutubePipe } from './pipes/youtube.pipe';
import { MoviesPosterPipe } from './pipes/movies-poster.pipe';

// Services
import { TheMovieDbApiService } from './providers/the-movie-db-api.service';
import { YoutubeApiService } from './providers/youtube-api.service';

// Conponents
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GalleryComponent } from './widgets/gallery/gallery.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { YoutubeVideoComponent } from './components/youtube-video/youtube-video.component';
import { LoadingComponent } from './widgets/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    DomSecurePipe,
    GalleryComponent,
    HomeComponent,
    LoadingComponent,
    MovieDetailsComponent,
    NavbarComponent,
    MoviesPosterPipe,
    PaginationComponent,
    SearchComponent,
    YoutubePipe,
    YoutubeVideoComponent,
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [ TheMovieDbApiService, YoutubeApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
