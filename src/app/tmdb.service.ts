import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  public apiKeyEs = "api_key=9e50c5a0f175a40039150639aa6dfa43&language=es-ES";
  public baseUrl = "https://api.themoviedb.org/3";
  private trendingUrl = '/trending/movie/week?';
  private genresUrl = '/genre/movie/list?';
  public moviesUrl = '/discover/movie?sort_by=popularity.desc&'
  public img_url = 'https://image.tmdb.org/t/p/original';
  public searchURL = '/search/movie?'
  public detailUrl = '/movie/'

  private url1 = this.baseUrl + this.genresUrl + this.apiKeyEs;
  private url3 = this.baseUrl + this.trendingUrl + this.apiKeyEs;

  constructor(private httpClient: HttpClient) { }

  getGenres = () => {
    return this.httpClient.get(this.url1);
  }

  getMovies = (url: any) => {
    return this.httpClient.get(url);
  }

  getTrending = () => {
    return this.httpClient.get(this.url3);
  }


}
