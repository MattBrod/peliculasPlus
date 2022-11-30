import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  movie: any = sessionStorage.getItem('movieId');
  haha: string = this.service.img_url;
  data: any;
  providers: any;
  providersCall: any;
  apiLoaded = false;
  check: any;
  videos: any;
  videosInfo: any;
  videokey: any;

  constructor(private service: TmdbService) { }

  ngOnInit(): void {

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.service.getMovies(this.movie)
    .subscribe(res => {
      this.data = res;

      this.providersCall = this.service.baseUrl + this.service.detailUrl + this.data.id + this.service.providersUrl + this.service.apiKeyEs;
      this.service.getMovies(this.providersCall)
      .subscribe(res => {
        this.providers = res;
        this.check = Object.keys(this.providers).length === 0;
      })

      this.videosInfo = this.service.baseUrl + this.service.detailUrl + this.data.id + this.service.videosUrl + this.service.apiKeyEs;
      this.service.getMovies(this.videosInfo)
      .subscribe(res => {
        this.videos = res;
        this.videos.results.forEach((element: { type: string }) => {
          console.log(element.type);
        });
        console.log(this.videos.results)
        this.videos.results.forEach((element: { type: string; key: string }) => {
          if (element.type === "Trailer") {
            this.videokey = element.key;
          }
        });
      })
    })
  }

}
