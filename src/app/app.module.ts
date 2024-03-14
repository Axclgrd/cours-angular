import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { SpecialisteComponent } from './specialiste/specialiste.component';
import { EtudiantParisComponent } from './etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './etudiant-hors-paris/etudiant-hors-paris.component';
import { FormNewsletteComponent } from './form-newslette/form-newslette.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EtudiantComponent,
    SpecialisteComponent,
    EtudiantParisComponent,
    EtudiantHorsParisComponent,
    FormNewsletteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
