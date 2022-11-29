import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TmdbService } from 'src/app/tmdb.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  data: any;
  haha: string = this.service.img_url;
  @ViewChild('widgetsContent')
  widgetsContent!: ElementRef;

  constructor(private service: TmdbService) { }

  ngOnInit(): void {
    this.service.getTrending()
    .subscribe(res => {
      this.data = res;
    })
  }

  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 800;
  }

  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 800;
  }

  setMovieDetails = (id: any) => {
    sessionStorage.setItem('movieId', this.service.baseUrl + this.service.detailUrl + id + '?' + this.service.apiKeyEs);
  }

}
