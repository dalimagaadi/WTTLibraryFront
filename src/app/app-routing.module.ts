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
import { MedewerkerzoekenComponent } from './medewerkerzoeken/medewerkerzoeken.component';
import { MedewerkertoevoegenComponent } from './medewerkertoevoegen/medewerkertoevoegen.component';
import { RapportagesComponent } from './rapportages/rapportages.component';
import { RouteGuardService } from './service/route-guard.service';
import { AdminRouteGuardService } from './service/route-guard.service';
import { BoekbewerkenComponent } from './boekbewerken/boekbewerken.component';
import { BoekpaginaComponent } from './boekpagina/boekpagina.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welkom', component: WelkomComponent, canActivate: [RouteGuardService] },
  { path: 'boekenzoeken', component: BoekenzoekenComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'contact', component: ContactComponent, canActivate: [RouteGuardService] },
  { path: 'winkelwagen', component: WinkelwagenComponent, canActivate: [RouteGuardService] },
  { path: 'rapportages', component: RapportagesComponent, canActivate: [RouteGuardService, AdminRouteGuardService] },
  { path: 'boektoevoegen', component: BoektoevoegenComponent, canActivate: [RouteGuardService, AdminRouteGuardService] },
  { path: 'medewerkerzoeken', component: MedewerkerzoekenComponent, canActivate: [RouteGuardService, AdminRouteGuardService] },
  { path: 'medewerkertoevoegen', component: MedewerkertoevoegenComponent, canActivate: [RouteGuardService, AdminRouteGuardService] },
  { path: 'boekbewerken/:isbn', component: BoekbewerkenComponent, canActivate: [RouteGuardService, AdminRouteGuardService] },
  { path: 'boekpagina/:isbn', component: BoekpaginaComponent, canActivate: [RouteGuardService, AdminRouteGuardService] },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AdminRouteGuardService]
})

export class AppRoutingModule { }
