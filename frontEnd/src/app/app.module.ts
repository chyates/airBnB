// Module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Component imports
import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InnerSearchComponent } from './inner-search/inner-search.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { LandingSearchComponent } from './landing-page/landing-search/landing-search.component';
import { LandingQuickLinksComponent } from './landing-page/landing-quick-links/landing-quick-links.component';
import { LandingListingsComponent } from './landing-page/landing-listings/landing-listings.component';
import { InnerSearchSearchComponent } from './inner-search/inner-search-search/inner-search-search.component';
import { InnerSearchMapComponent } from './inner-search/inner-search-map/inner-search-map.component';
import { InnerSearchListingsComponent } from './inner-search/inner-search-listings/inner-search-listings.component';
import { GuestDashComponent } from './user-dash/guest-dash/guest-dash.component';
import { HostDashComponent } from './user-dash/host-dash/host-dash.component';
import { MessagesComponent } from './user-dash/messages/messages.component';
import { GuestDashInnerNavComponent } from './user-dash/guest-dash/guest-dash-inner-nav/guest-dash-inner-nav.component';
import { GuestDashEditProfileComponent } from './user-dash/guest-dash/guest-dash-edit-profile/guest-dash-edit-profile.component';
import { HostDashEditProfileComponent } from './user-dash/host-dash/host-dash-edit-profile/host-dash-edit-profile.component';
import { HostDashInnerNavComponent } from './user-dash/host-dash/host-dash-inner-nav/host-dash-inner-nav.component';
import { MessageFilterComponent } from './user-dash/messages/message-filter/message-filter.component';
import { MessageInboxComponent } from './user-dash/messages/message-inbox/message-inbox.component';
import { ProfileInfoRightComponent } from './public-profile/profile-info-right/profile-info-right.component';
import { ProfileInfoMainComponent } from './public-profile/profile-info-main/profile-info-main.component';
import { ListingComponent } from './listing/listing.component';
import { ListingPhotoComponent } from './listing/listing-photo/listing-photo.component';
import { ListingInstantBookComponent } from './listing/listing-instant-book/listing-instant-book.component';
import { ListingInfoNavComponent } from './listing/listing-info-nav/listing-info-nav.component';
import { ListingInfoComponent } from './listing/listing-info/listing-info.component';

// Service Imports
import { GoogleApiService } from './google-api.service';
import { LocalApiService } from './local-api.service';
// Google Maps Stuff
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    LandingPageComponent,
    InnerSearchComponent,
    UserDashComponent,
    PublicProfileComponent,
    LandingSearchComponent,
    LandingQuickLinksComponent,
    LandingListingsComponent,
    InnerSearchSearchComponent,
    InnerSearchMapComponent,
    InnerSearchListingsComponent,
    GuestDashComponent,
    HostDashComponent,
    MessagesComponent,
    GuestDashInnerNavComponent,
    GuestDashEditProfileComponent,
    HostDashEditProfileComponent,
    HostDashInnerNavComponent,
    MessageFilterComponent,
    MessageInboxComponent,
    ProfileInfoRightComponent,
    ProfileInfoMainComponent,
    ListingComponent,
    ListingPhotoComponent,
    ListingInstantBookComponent,
    ListingInfoNavComponent,
    ListingInfoComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCVcnQjMNJVY5DI_nQXsRsYJMGYs0VqYA',
      libraries: ["places"]
    }),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GoogleApiService, LocalApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
