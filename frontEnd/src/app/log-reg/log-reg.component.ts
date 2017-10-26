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
  luser: User = new User();
  ruser: User = new User();
  loginError: String;
  regError: String;

  constructor(
    private _localService: LocalApiService,
    private _router: Router, 
  ) { }

  validateLogin() {
    this._localService.loginUser(this.luser)
      .then((user) => { this._router.navigate(['/homes']); })
      .catch((err) => {
        if (err.status == '401') {
          this.loginError = "No user registered with that email.";
        }
        else if (err.status == '402') {
          this.loginError = "Password is incorrect.";
        }
      })
  }

  validateReg() {
    this._localService.registerUser(this.ruser)
      .then(() => { this._router.navigate(['/homes']); })
      .catch((err) => { this.regError = "A user with that email already exists." });
  }


}
