import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  data: any;
  urlImg: string = this.service.img_url;

  constructor(private service: TmdbService, private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'black';
  }

  ngOnInit(): void {
    this.service.getTrending().subscribe((res) => {
      this.data = res;
    });
  }

  setMovieDetails = (id: any) => {
    sessionStorage.setItem(
      'movieId',
      this.service.baseUrl +
        this.service.detailUrl +
        id +
        '?' +
        this.service.apiKeyEs
    );
  };
}
