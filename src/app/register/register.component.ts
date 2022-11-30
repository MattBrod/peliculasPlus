import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  formReg: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private elementRef: ElementRef
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.background =
      'linear-gradient(to left, #221359, #54116e, #ab2a70, #ef011f)';
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .register(this.formReg.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
