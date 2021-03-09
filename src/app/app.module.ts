import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { WelkomComponent } from './welkom/welkom.component';
import { ErrorComponent } from './error/error.component';
import { BoekenzoekenComponent } from './boekenzoeken/boekenzoeken.component';
import { WinkelwagenComponent } from './winkelwagen/winkelwagen.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { BoekaanvraagComponent } from './boekaanvraag/boekaanvraag.component';
import { MedewerkerzoekenComponent } from './medewerkerzoeken/medewerkerzoeken.component';
import { BoektoevoegenComponent } from './boektoevoegen/boektoevoegen.component';
import { RapportagesComponent } from './rapportages/rapportages.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    WelkomComponent,
    ErrorComponent,
    BoekenzoekenComponent,
    WinkelwagenComponent,
    ContactComponent,
    LogoutComponent,
    BoekaanvraagComponent,
    MedewerkerzoekenComponent,
    BoektoevoegenComponent,
    RapportagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
