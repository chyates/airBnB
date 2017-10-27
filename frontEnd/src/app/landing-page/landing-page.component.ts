import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user'
import { LocalApiService } from '../local-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css',
              '../app.component.css'],
})
export class LandingPageComponent implements OnInit {


  loggedIn;
  currentUser;
  logForm;
  user = new User();
  logButton;

  constructor(
    private _localService: LocalApiService,
    private _router: Router
  ) { }

  ngOnInit(
  ) {
  }

  validateLogin() {
    return this._localService.loginUser(this.user)
    .then(data => {
      if (data.loggedIn === true) {
        this.currentUser = data.user;
        this.loggedIn = true;
        this.logButton = false;
        this._router.navigateByUrl('listings');
      } 
      if (data.error){
        console.log(data.error);
        console.log("Login failed");
      }
    }).catch(err => console.log(err));
  }

  showLogReg(){
    this.logForm = true;
  }

  validateReg() {
    this._localService.registerUser(this.user)
    .then(data => {
      if (data.loggedIn === true) {
        this.currentUser = data.user;
        this.loggedIn = true;
        this._router.navigateByUrl('listings');
      }
    }).catch(err => console.log(err));
  }

}
