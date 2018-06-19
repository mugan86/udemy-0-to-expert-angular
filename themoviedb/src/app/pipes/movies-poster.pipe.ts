import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviesPoster'
})
export class MoviesPosterPipe implements PipeTransform {

  transform(movie: any): string {
    const movieDbImagePathUrl = 'https://image.tmdb.org/t/p/w300';
    if (movie.backdrop_path) {
      return `${movieDbImagePathUrl}${movie.backdrop_path}`;
    } else if (movie.poster_path) {
      return `${movieDbImagePathUrl}${movie.poster_path}`;
    }
    return 'assets/img/no_available.jpg';
  }

}
