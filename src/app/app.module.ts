import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InsertarVacunanteComponent } from './insertar-vacunante/insertar-vacunante.component';
import { VerVacunantesComponent } from './ver-vacunantes/ver-vacunantes.component';
import { AppRoutingModule } from './app-routing.module';

import {DataService} from './data.service'

const routes: Route[] = [
  {path: 'insertar', component: InsertarVacunanteComponent},
  {path: 'ver', component: VerVacunantesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    InsertarVacunanteComponent,
    VerVacunantesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
