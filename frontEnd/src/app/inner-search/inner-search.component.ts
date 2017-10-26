import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { User } from '../user'
import { LocalApiService } from '../local-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inner-search',
  templateUrl: './inner-search.component.html',
  styleUrls: ['./inner-search.component.css']
})
export class InnerSearchComponent implements OnInit {

  @ViewChild('search') public searchElement: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader, 
    private ngZone: NgZone,
    private _localService: LocalApiService,
    private _router: Router) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ["(cities)"] });

        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          });
        });
      }
    );
    this.getCurrentUser();
  }

  currentUser = new User();
  loggedIn;
  
  getCurrentUser(){
    this._localService.currentUser()
    .then(data => {
      if (data === {}) {
        console.log("No current user");
      } else {
        console.log("Raw data:", data);
        this.currentUser = data.user;
        console.log("Current user information:", this.currentUser);
        this.loggedIn = true;
      }
    })
  }

}
