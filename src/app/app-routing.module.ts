import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoekenzoekenComponent } from './boekenzoeken/boekenzoeken.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'boekenzoeken', component: BoekenzoekenComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
