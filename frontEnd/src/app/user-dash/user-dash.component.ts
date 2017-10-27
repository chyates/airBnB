import { Component, OnInit } from '@angular/core';
import { LocalApiService } from '../local-api.service';
import { Router } from '@angular/router';
import { Listing } from '../listing'
import { User } from '../user'
import { Reservation } from '../reservation'

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  constructor(
    private _localService: LocalApiService,
    private _router: Router
  ) { }

  profile = true;
  listingDiv;
  trips;
  addListing;

  listing = new Listing();
  listings = [];

  reservation = new Reservation();
  reservations = [];

  currentUser = new User();

  ngOnInit() {
    this.getCurrentUser();
    this.getUserListings();
    this.getUserReserves();
  }
  
  switchListingDiv(){
    this.listingDiv = true;
    this.profile = false;
    this.trips = false;
    this.addListing = false;
  }

  switchTrips(){
    this.trips = true;
    this.profile = false;
    this.listingDiv = false;
    this.addListing = false;
  }

  switchProfile(){
    if (this.profile === false){
      this.profile = true;
      this.listingDiv = false;
      this.trips = false;
      this.addListing = false;
    }
  }

  switchAddListingDiv(){
    this.addListing = true;
    this.profile = false;
    this.listingDiv = false;
    this.trips = false;
  }

  createListing(){
    return this._localService.createListing(this.listing)
    .then(data => {
      this.listings = data.listings;
      this.switchListingDiv();
    })
  }

  getCurrentUser(){
    this._localService.currentUser()
    .then(data => {
      if (data === {}) {
        console.log("No current user");
      } else {
        console.log("Current user:", data.user);
        this.currentUser = data.user;
      }
    })
  }

  getUserListings(){
    this._localService.findAllUserListings()
    .then(data => this.listings = data.listings);
  }

  getUserReserves(){
    this._localService.viewAllReserves()
    .then(data => this.reservations = data.reservations);
  }
}
