import { Component, OnInit } from '@angular/core';
import { LocalApiService } from '../../local-api.service';
import { Router, ActivatedRoute} from '@angular/router';
import { Listing } from '../../listing'
import { User } from '../../user'
import { Reservation } from '../../reservation'



@Component({
  selector: 'app-listing-info',
  templateUrl: './listing-info.component.html',
  styleUrls: ['./listing-info.component.css']
})
export class ListingInfoComponent implements OnInit {

  constructor(
    private _localService: LocalApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this._route.params.subscribe(params => this.currentListing(params['id']));
  }

  thisListing = new Listing();
  currentUser;
  hostId;
  listingId;
  reservation = new Reservation();

  currentListing(id){
    this._localService.findOneListing(id)
    .then(data => {
      this.hostId = data.listing._host;
      this.thisListing = data.listing
      this.listingId = data.listing._id });
      console.log("current listing:", this.thisListing);
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

  bookTrip(){
    this._localService.createReserve(this.listingId, this.reservation)
    .then(data => this._router.navigateByUrl('/account'));
  }
}
