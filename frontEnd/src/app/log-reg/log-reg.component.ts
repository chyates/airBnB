import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user'
import { LocalApiService } from '../local-api.service';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent {
  logUser: User = new User();
  regUser: User = new User();
  loginError: String;
  regError: String;

  constructor(
    private _localService: LocalApiService,
    private _router: Router, 
  ) { }

  // validateLogin() {
  //   this._localService.loginUser(this.luser)
  //     .then((user) => { this._router.navigate(['/homes']); })
  //     .catch((err) => {
  //       if (err.status == '401') {
  //         this.loginError = "No user registered with that email.";
  //       }
  //       else if (err.status == '402') {
  //         this.loginError = "Password is incorrect.";
  //       }
  //     })
  // }

  validateLogin() {
    this._localService.loginUser(this.logUser)
    .then(data => {
      if(data.loggedIn === true) {
        this._router.navigateByUrl('/homes');
      } else {
        this.loginError = data.error;
      }
    });
  }

  validateReg() {
    this._localService.loginUser(this.regUser)
    .then(data => {
      if(data.loggedIn === true) {
        this._router.navigateByUrl('/homes');
      } else {
        this.regError = data.error;
      }
    });
  }


}
