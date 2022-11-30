import { AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private elementRef: ElementRef
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.background =
      'linear-gradient(to right, #221359, #54116e, #ab2a70, #ef011f)';
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .login(this.formLogin.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch((error) => console.log(error));
  }
}
