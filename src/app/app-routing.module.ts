import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SpecialisteComponent} from "./specialiste/specialiste.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'specialites', component: SpecialisteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
