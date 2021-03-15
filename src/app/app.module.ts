import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { WelkomComponent } from './welkom/welkom.component';
import { BoektoevoegenComponent } from './boektoevoegen/boektoevoegen.component';
import { BoekenzoekenComponent} from './boekenzoeken/boekenzoeken.component';
import { MedewerkerzoekenComponent } from './medewerkerzoeken/medewerkerzoeken.component';
import { MedewerkertoevoegenComponent } from './medewerkertoevoegen/medewerkertoevoegen.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    WelkomComponent,
    BoektoevoegenComponent,
    MedewerkerzoekenComponent,
    MedewerkertoevoegenComponent,
    BoekenzoekenComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
