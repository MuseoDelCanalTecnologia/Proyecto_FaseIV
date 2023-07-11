import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapaComponent } from './pages/mapa/mapa.component';

import { ProyeccionComponent } from './pages/proyeccion/proyeccion.component';
import { InteraccionComponent } from './pages/interaccion/interaccion.component';
import { Pro1Component } from './pages/pro1/pro1.component';
import { Pro2Component } from './pages/pro2/pro2.component';
import { MapazoomComponent } from './pages/mapazoom/mapazoom.component';
import { CanalmapaComponent } from './pages/canalmapa/canalmapa.component';
import { AmpliacionComponent } from './pages/ampliacion/ampliacion.component';
import { PortalSocketComponent } from './pages/portal-socket/portal-socket.component';


const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'mapa', component:MapaComponent},
  {path:'proyeccion', component:ProyeccionComponent},
  {path:'interaccion', component:InteraccionComponent},
  {path:'pro1',component:Pro1Component},
  {path:'pro2',component:Pro2Component},
  {path:'mapazoom',component:MapazoomComponent},
  {path:'canalmapa',component:CanalmapaComponent},
  {path:'ampliacion',component:AmpliacionComponent},
  {path:'portal',component:PortalSocketComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
