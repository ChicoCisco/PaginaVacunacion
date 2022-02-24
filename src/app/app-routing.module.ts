import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { InsertarVacunanteComponent } from './insertar-vacunante/insertar-vacunante.component';
import { VerVacunantesComponent } from './ver-vacunantes/ver-vacunantes.component';

const routes: Routes = [
  {path: 'insertar', component: InsertarVacunanteComponent},
  {path: 'ver', component: VerVacunantesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
