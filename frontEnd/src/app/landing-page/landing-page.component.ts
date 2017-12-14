import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { Listing } from '../listing';
import { LocalApiService } from '../local-api.service';

// Google maps
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { GoogleApiService } from './../google-api.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css',
    '../app.component.css'],
})
export class LandingPageComponent implements OnInit {

  // // Google maps
  // private googlePlaceId: any;
  // public latitude: number;
  // public longitude: number;
  // public searchControl: FormControl;
  // public zoom: number;
  // // public bounds = new google.maps.LatLngBounds();
  // public restaurants = [];
  // // public todo = [];
  // public activity;
  // public dangerousUrl;
  // public trustedUrl;
  // public radius;
  // public promise;
  // public apikey;
  // public photolink;
  // public experiences = [];
  // public listings = [];

  // @ViewChild("search")
  // public searchElementRef: ElementRef;

  constructor(
    private _localService: LocalApiService,
    private _router: Router,
  //   // Google maps
  //   private mapsAPILoader: MapsAPILoader,
  //   private ngZone: NgZone,
  //   private sanitizer: DomSanitizer,
  //   private _googleapiService: GoogleApiService
  ) {
  // this.zoom = 4;
  //   this.latitude = 39.8282;
  //   this.longitude = -98.5795;

  //   //create search FormControl
  //   this.searchControl = new FormControl();

  //   //set current position
  //   this.setCurrentPosition();

  //   //load Places Autocomplete
  //   this.mapsAPILoader.load().then(() => {
  //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //       types: ["(cities)"]
  //     });
  //     autocomplete.addListener("place_changed", () => {
  //       this.ngZone.run(() => {
  //         //get the place result
  //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();


  //         //verify result
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }

  //         console.log(place);

  //         //set latitude, longitude and zoom         

  //         this.latitude = place.geometry.location.lat();
  //         this.longitude = place.geometry.location.lng();
  //         this.zoom = 12;
  //         this.radius = 1000;
  //         this.googlePlaceId = place.place_id;
  //         this.activity = 'restaurant';
  //         this.apikey = 'AIzaSyB5kaJuiKaBBVGKZGm3pEpHJOrjrZt4EiE';
  //         this.restaurants = [];
  //         this.experiences = [];
  //         this.listings = [];
  //         this._googleapiService.getLocationids(this.latitude, this.longitude, this.radius, 'restaurant')
  //           .subscribe((location) => {
  //             for (let alocation in location.results) {
  //               this._googleapiService.getLocationdetails(location.results[alocation].place_id)
  //                 .subscribe((place) => {
  //                   if (place.result.photos) {
  //                     if (place.result.photos[0].photo_reference != null && this.restaurants.length < 3 && place.result.rating >= 4.4 && place.result.types != 'lodging') {
  //                       this.restaurants.push(place.result);
  //                       console.log(place.result);
  //                       this.photolink = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + place.result.photos[0].photo_reference + '&key=' + this.apikey;
  //                       this.restaurants[this.restaurants.length - 1].photos[0].photo_reference = this.photolink;
  //                     }
  //                   }
  //                 })
  //             }
  //           })
  //         this._googleapiService.getLocationids(this.latitude, this.longitude, this.radius, 'lodging')
  //           .subscribe((location) => {
  //             for (let alocation in location.results) {
  //               this._googleapiService.getLocationdetails(location.results[alocation].place_id)
  //                 .subscribe((place) => {
  //                   if (place.result.photos) {
  //                     if (place.result.photos[0].photo_reference != undefined && this.listings.length < 3 && place.result.rating >= 4.4) {
  //                       this.listings.push(place.result);
  //                       console.log(place.result);
  //                       this.photolink = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + place.result.photos[0].photo_reference + '&key=' + this.apikey;
  //                       this.listings[this.listings.length - 1].photos[0].photo_reference = this.photolink;
  //                     }
  //                   }

  //                 })
  //             }
  //           })
  //         this._googleapiService.getLocationids(this.latitude, this.longitude, this.radius, 'night_club')
  //           .subscribe((location) => {
  //             for (let alocation in location.results) {
  //               this._googleapiService.getLocationdetails(location.results[alocation].place_id)
  //                 .subscribe((place) => {
  //                   if (place.result.photos) {
  //                     if (place.result.photos[0].photo_reference != null && this.experiences.length < 3 && place.result.rating >= 4.4) {
  //                       this.experiences.push(place.result);
  //                       console.log(place.result);
  //                       this.photolink = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + place.result.photos[0].photo_reference + '&key=' + this.apikey;
  //                       this.experiences[this.experiences.length - 1].photos[0].photo_reference = this.photolink;
  //                     }
  //                   }
  //                 })
  //             }
  //           })
  //       });
  //     });
  //   });
  // }

  // private setCurrentPosition() {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 15;
  //     });
  //   }
  }

  ngOnInit(
  ) {
    this.getRecentListings();
  }

  // not Google API stuff

  loggedIn;
  currentUser;
  user = new User();
  logUser = new User();
  recentListings; 

  validateLogin() {
    return this._localService.loginUser(this.user)
      .then(data => {
        if (data.loggedIn === true) {
          this.currentUser = data.user;
          this.loggedIn = true;
          this._router.navigateByUrl('listings');
        }
        if (data.error) {
          console.log(data.error);
          console.log("Login failed");
        }
      }).catch(err => console.log(err));
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

  getRecentListings(){
    this._localService.findRecentLand()
    .then(data => this.recentListings = data.listings);
  }
}
