import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelkomComponent } from './welkom/welkom.component';
import { BoekenzoekenComponent } from './boekenzoeken/boekenzoeken.component';
import { BoektoevoegenComponent } from './boektoevoegen/boektoevoegen.component';
import { ErrorComponent } from './error/error.component';
import { WinkelwagenComponent } from './winkelwagen/winkelwagen.component';
import { ContactComponent } from './contact/contact.component';
import { BoekaanvraagComponent } from './boekaanvraag/boekaanvraag.component';
import { MedewerkerzoekenComponent } from './medewerkerzoeken/medewerkerzoeken.component';
import { MedewerkertoevoegenComponent } from './medewerkertoevoegen/medewerkertoevoegen.component';
import { RapportagesComponent } from './rapportages/rapportages.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'login', component: LoginComponent },
  { path: 'welkom', component: WelkomComponent },
  { path: 'boekenzoeken', component: BoekenzoekenComponent },
  { path: 'boekaanvraag', component: BoekaanvraagComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'winkelwagen', component: WinkelwagenComponent },
  { path: 'rapportages', component: RapportagesComponent },
  { path: 'boektoevoegen', component: BoektoevoegenComponent },
  { path: 'medewerkerzoeken', component: MedewerkerzoekenComponent },
  { path: 'medewerkertoevoegen', component: MedewerkertoevoegenComponent },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
