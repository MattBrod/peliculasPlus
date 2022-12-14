import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from 'src/app/tmdb.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  data: any;
  // user: any = this.userService.user

  constructor(
    private service: TmdbService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getGenres().subscribe((res) => {
      this.data = res;
    });
  }

  setGenre = (id: any) => {
    sessionStorage.setItem(
      'genreId',
      this.service.baseUrl +
        this.service.moviesUrl +
        this.service.apiKeyEs +
        '&with_genres=' +
        id
    );
    sessionStorage.setItem('page=', '0');
  };

  searchTerm = (query: any) => {
    sessionStorage.setItem(
      'genreId',
      this.service.baseUrl +
        this.service.searchURL +
        this.service.apiKeyEs +
        '&query=' +
        query
    );
    sessionStorage.setItem('page=', '0');
  };

  onClick() {
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => console.log(error));
  }
}
