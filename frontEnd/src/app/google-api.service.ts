import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GoogleApiService {

  constructor(private _http : Http) { }
  getLocationids(latitude,longitude,radius,activity){
    
    return this._http.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${activity}&key=AIzaSyB5kaJuiKaBBVGKZGm3pEpHJOrjrZt4EiE`)
    
    .map(data => data.json())

  }

  getLocationdetails(placeid){
    
    return this._http.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=AIzaSyB5kaJuiKaBBVGKZGm3pEpHJOrjrZt4EiE`)
    .map(data => data.json())
  }
}