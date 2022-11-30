import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  public apiKeyEs = 'api_key=9e50c5a0f175a40039150639aa6dfa43&language=es-ES';
  public baseUrl = 'https://api.themoviedb.org/3';

  public trendingUrl = '/trending/movie/week?';
  public genresUrl = '/genre/movie/list?';

  public moviesUrl = '/discover/movie?sort_by=popularity.desc&';
  public img_url = 'https://image.tmdb.org/t/p/original';

  public searchURL = '/search/movie?';
  public detailUrl = '/movie/';

  public providersUrl = '/watch/providers?';
  public videosUrl = '/videos?';

  // POR HACER, CREAR ESTAS VARIABLES EN LOS COMPONENTES
  private url1 = this.baseUrl + this.genresUrl + this.apiKeyEs;
  private url3 = this.baseUrl + this.trendingUrl + this.apiKeyEs;

  constructor(private httpClient: HttpClient) {}

  getMovies = (url: any) => {
    return this.httpClient.get(url);
  };

  // CONVERTIR ESTOS 2 MÉTODOS EN GETMOVIES

  getGenres = () => {
    return this.httpClient.get(this.url1);
  };

  getTrending = () => {
    return this.httpClient.get(this.url3);
  };
}
