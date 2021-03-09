import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { WelkomComponent } from './welkom/welkom.component';
import { BoekenzoekenComponent } from './boekenzoeken/boekenzoeken.component';
import { WinkelwagenComponent } from './winkelwagen/winkelwagen.component';
import { BoekaanvraagComponent } from './boekaanvraag/boekaanvraag.component';
import { ContactComponent } from './contact/contact.component';
import { RapportagesComponent } from './rapportages/rapportages.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'welkom', component: WelkomComponent },
  { path: 'boekenzoeken', component: BoekenzoekenComponent },
  { path: 'winkelwagen', component: WinkelwagenComponent },
  { path: 'boekaanvraag', component: BoekaanvraagComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'rapportages', component: RapportagesComponent },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
