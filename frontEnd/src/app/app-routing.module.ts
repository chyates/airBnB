import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerSearchMapComponent } from './inner-search/inner-search-map/inner-search-map.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'test', component: InnerSearchMapComponent},
  // { path: 'surveys/:id', component: SurveysOneComponent },
  // { path: 'new', component: SurveysCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
