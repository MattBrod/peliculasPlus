import { Component, OnInit} from '@angular/core';
import { TmdbService } from 'src/app/tmdb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  data: any;


  constructor(private service: TmdbService) { }

  ngOnInit(): void {
    this.service.getGenres()
    .subscribe(res => {
      this.data = res;
    })
  }

  setGenre = (id: any) => {
    sessionStorage.setItem('genreId', this.service.baseUrl + this.service.moviesUrl + this.service.apiKeyEs +'&with_genres='+ id);
    sessionStorage.setItem('page=', '0');
  }

  searchTerm = (query: any) => {
    sessionStorage.setItem('genreId', this.service.baseUrl + this.service.searchURL + this.service.apiKeyEs + '&query=' + query)
    sessionStorage.setItem('page=', '0');
  }

}
