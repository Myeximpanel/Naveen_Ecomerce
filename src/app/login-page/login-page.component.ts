import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor() { }

  isValid = true;
  formRegistration() {
    this.isValid = !this.isValid;
  }
}
