import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent{
  luser: User = new User();
  ruser: User = new User();
  loginError: String;
  regError: String;


  constructor( private _router: Router, private _api: ApiService) { 
   
  }

  validateLogin() {
    this._api.loginUser(this.luser)
    .then((user) => { this._router.navigate(['/dashboard']); })
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
    this._api.registerUser(this.ruser)
    .then(() => {this._router.navigate(['/dashboard']); })
    .catch((err) => { this.regError = "A user with that email already exists." });
  }


}
