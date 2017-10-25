import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LocalApiService } from '../local-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {

  constructor(
    private _localService: LocalApiService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  user = new User();
  currentUser;
  loggedIn;

  regAttempt() {
    return this._localService.registerUser(this.user)
      .then (data => {
        if (data.loggedIn === true) {
          this.user = new User();
          this.currentUser = data.user;
          this._router.navigateByUrl('home');
        } else {
          this.user = new User();
          console.log("registration failed");
        }
      })
  }

  logAttempt() {
    return this._localService.loginUser(this.user)
    .then(data => {
      if (data.loggedIn === true) {
        this.user = new User();
        this.currentUser = data.user;
        this._router.navigateByUrl('home');
      } else {
        this.user = new User();
        console.log("login failed");
      }
    })
  }

  logout() {
    this._localService.logoutUser()
    .then(data => {
      this._router.navigateByUrl('/');
    })
  }

}
