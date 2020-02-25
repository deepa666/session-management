import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocalComponent} from './local/local.component';
import { SessionComponent} from './session/session.component';

const routes: Routes = [
  {path:"", redirectTo: "local",pathMatch:"full"},
  {path:"local", component:LocalComponent},
  {path:"session", component:SessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
