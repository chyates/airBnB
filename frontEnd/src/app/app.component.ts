import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { LocalApiService } from './local-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (
    private _localService: LocalApiService,
    private _router: Router
  ) { }

  loggedIn;

  ngOnInit() {
    this._localService.currentUser()
    .then(user => {
      if (user.firstName) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
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
