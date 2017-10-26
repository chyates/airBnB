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

  luser: User = new User();
  ruser: User = new User();
  loginError: String;
  regError: String;
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
    // this._localService.loginUser(this.luser)
    //   .then((user) => { this._router.navigate(['/test']); })
    //   .catch((err) => {
    //     if (err.status == '401') {
    //       this.loginError = "No user registered with that email.";
    //     }
    //     else if (err.status == '402') {
    //       this.loginError = "Password is incorrect.";
    //     }
    //   })
    return this._localService.loginUser(this.user)
    .then(data => {
      if (data.loggedIn === true) {
        this.currentUser = data.user;
        this.loggedIn = true;
        this.logButton = false;
        this._router.navigateByUrl('dashboard');
      } else {
        console.log("Login failed");
      }
    })
  }

  showLogReg(){
    this.logForm = true;
  }

  validateReg() {
    this._localService.registerUser(this.user)
      .then(() => { this._router.navigate(['/homes']); })
      .catch((err) => { this.regError = "A user with that email already exists." });
  }

}
