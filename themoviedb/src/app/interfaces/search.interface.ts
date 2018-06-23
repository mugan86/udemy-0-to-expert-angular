import { MovieShow } from './movie-show.interface';

export interface Search {
    page: number;
    results: MovieShow;
    total_results: number;
    total_pages: number;
}
