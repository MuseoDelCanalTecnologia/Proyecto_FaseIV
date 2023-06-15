import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapaComponent } from './pages/mapa/mapa.component';

import { ProyeccionComponent } from './pages/proyeccion/proyeccion.component';
import { InteraccionComponent } from './pages/interaccion/interaccion.component';


const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'mapa', component:MapaComponent},
  {path:'proyeccion', component:ProyeccionComponent},
  {path:'interaccion', component:InteraccionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
