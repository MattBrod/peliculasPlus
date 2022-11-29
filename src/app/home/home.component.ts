import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  data: any;
  haha: string = this.service.img_url;

  constructor(private service: TmdbService) { }

  ngOnInit(): void {
    this.service.getTrending()
    .subscribe(res => {
      this.data = res;
    })
  }

  setMovieDetails = (id: any) => {
    sessionStorage.setItem('movieId', this.service.baseUrl + this.service.detailUrl + id + '?' + this.service.apiKeyEs);
  }

}
