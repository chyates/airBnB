import { Component, OnInit } from '@angular/core';
import { LocalApiService } from '../local-api.service';
import { Listing } from '../listing';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(
    private _localService: LocalApiService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => params['id']);
    this._route.params.subscribe(params => this.currentListing(params['id']));
  }


  hostId;

  currentListing(id){
    this._localService.findOneListing(id)
    .then(data => {this.hostId = data.listing._host});
  }
}

// Functionalities to work on in components:
// ALL OF THEM
