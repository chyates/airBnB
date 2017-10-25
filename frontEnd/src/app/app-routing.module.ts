import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogRegComponent } from './log-reg/log-reg.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogRegComponent },
  { path: 'dashboard', redirectTo: '/homes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
