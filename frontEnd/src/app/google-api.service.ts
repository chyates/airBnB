import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GoogleApiService {

  constructor(private _http : Http) { }
  getLocationdetails(latitude,longitude,radius,activity){

    return this._http.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${activity}&key=AIzaSyDCVcnQjMNJVY5DI_nQXsRsYJMGYs0VqYA`)
    .map(data => data.json())
    .toPromise();
  }

  // getLocationdetails(placeid){

  //   return this._http.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=AIzaSyDCVcnQjMNJVY5DI_nQXsRsYJMGYs0VqYA`)
  //   .map(data => data.json())
  //   // .toPromise();
  // }
}