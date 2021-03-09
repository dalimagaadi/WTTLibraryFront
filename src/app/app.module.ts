import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { WelkomComponent } from './welkom/welkom.component';
import { BoektoevoegenComponent } from './boektoevoegen/boektoevoegen.component';
import { MedewerkerzoekenComponent } from './medewerkerzoeken/medewerkerzoeken.component';
import { MedewerkertoevoegenComponent } from './medewerkertoevoegen/medewerkertoevoegen.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    WelkomComponent,
    BoektoevoegenComponent,
    MedewerkerzoekenComponent,
    MedewerkertoevoegenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
