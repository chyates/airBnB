import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocalApiService {

  constructor(private _http: Http) { }

  // User functions: register, login/out, update, current, toHost
  registerUser(user) {
    return this._http.post('/api/register', user)
    .map(response => response.json())
    .toPromise();
  }

  loginUser(user) {
    return this._http.post('api/login', user)
    .map(response => response.json())
    .toPromise();
  }

  currentUser(){
    return this._http.get('/api/showUser')
    .map(response => response.json())
    .toPromise();
  }

  logoutUser(){
    return this._http.get('/api/logout')
    .map(response => response.json())
    .toPromise();
  }

  updateUser(id, user) {
    return this._http.post(`/api/updateUser/${id}`, user)
    .map(response => response.json())
    .toPromise();
  }

  toHost(id, user) {
    return this._http.post(`/api/userHost/${id}`, user)
    .map(response => response.json())
    .toPromise();
  }

  // Listing functions: filter, findAll, findOne, create, update, delete
  createListing(listing){
    return this._http.post('/api/createListing', listing)
    .map(response => response.json())
    .toPromise();
  }

  findAllListings(){
    return this._http.get('/api/currentUser/listings')
    .map(response => response.json())
    .toPromise();
  }

  findOneListing(id){
    return this._http.get(`/api/currentUser/listing/${id}`)
    .map(response => response.json())
    .toPromise();
  }

  updateListing(id, listing){
    return this._http.post(`/api/currentUser/listings/${id}/update`, listing)
    .map(response => response.json())
    .toPromise();
  }
  
  // Reservation functions: create, update (guest), approve (host), viewAll, viewOne, cancel (delete)
  createReserve(id, reservation) {
    return this._http.post(`/api/currentUser/listings/${id}/createReserve`, reservation)
    .map(response => response.json())
    .toPromise();
  }

  approveBooking(id, bookChange) {
    return this._http.post(`/api/currentUser/listings/{$id}/confirmBook`, bookChange)
    .map (response => response.json())
    .toPromise();
  }

  updateReservation(id, reservation) {
    return this._http.post(`/api/currentUser/reservations/{$id}/update`, reservation)
    .map(response => response.json())
    .toPromise();
  }

  viewAll() {
    return this._http.get('/api/currentUser/reservations/all')
    .map(response => response.json())
    .toPromise();
  }

  viewOne(id){
    return this._http.get(`/api/currentUser/reservations/${id}`)
    .map(response => response.json())
    .toPromise();
  }

  // Review functions: add, delete
  addReview(id, review) {
    return this._http.post(`/api/currentUser/listings/${id}/newReview`, review)
    .map(response => response.json())
    .toPromise();
  }
  
  // Conversation functions: create (send), viewAll, viewOne, delete
  sendMessage(id, message) {
    return this._http.post(`/api/currentUser/listings/${id}/newMessage`, message)
    .map(response => response.json())
    .toPromise();
  }

}
