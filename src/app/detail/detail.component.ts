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

  constructor(private service: TmdbService) { }

  ngOnInit(): void {
    this.service.getMovies(this.movie)
    .subscribe(res => {
      this.data = res;
      console.log(this.data)
    })
  }

}
