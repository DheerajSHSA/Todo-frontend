import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'in28minutes'
  password = ''
  errorMessage = 'invalid credentials'
  invalidLogin = false
  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.username === 'in28minutes' && this.password === 'dummy')
      this.invalidLogin = false;
    else
      this.invalidLogin = true;
  }
}
