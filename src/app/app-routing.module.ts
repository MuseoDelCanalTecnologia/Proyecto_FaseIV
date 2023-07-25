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
import { CuencaHidroComponent } from './cuenca-hidro/cuenca-hidro.component';
import { FtShermanComponent } from './areas-revertidas/ft-sherman/ft-sherman.component';
import { FtDavisComponent } from './areas-revertidas/ft-davis/ft-davis.component';
import { FtGulickComponent } from './areas-revertidas/ft-gulick/ft-gulick.component';
import { FtClaytonComponent } from './areas-revertidas/ft-clayton/ft-clayton.component';
import { FtAmadorComponent } from './areas-revertidas/ft-amador/ft-amador.component';
import { FtGrantComponent } from './areas-revertidas/ft-grant/ft-grant.component';
import { FtKobbeComponent } from './areas-revertidas/ft-kobbe/ft-kobbe.component';
import { QuarryHeightsComponent } from './areas-revertidas/quarry-heights/quarry-heights.component';
import { PuestoCorozalComponent } from './areas-revertidas/puesto-corozal/puesto-corozal.component';
import { NavalRodmanComponent } from './areas-revertidas/naval-rodman/naval-rodman.component';
import { CocoSubmarinaComponent } from './areas-revertidas/coco-submarina/coco-submarina.component';
import { SummitComponent } from './areas-revertidas/summit/summit.component';
import { FarfamComponent } from './areas-revertidas/farfam/farfam.component';
import { BaseAlbrookComponent } from './areas-revertidas/base-albrook/base-albrook.component';
import { BaseHowardComponent } from './areas-revertidas/base-howard/base-howard.component';
import { ShermanComponent } from './areas-revertidas/poligonos/sherman/sherman.component';
import { PinaComponent } from './areas-revertidas/poligonos/pina/pina.component';
import { BalboaOesteComponent } from './areas-revertidas/poligonos/balboa-oeste/balboa-oeste.component';
import { EmperadorComponent } from './areas-revertidas/poligonos/emperador/emperador.component';
import { RioHatoComponent } from './areas-revertidas/poligonos/rio-hato/rio-hato.component';
import { SanJoseComponent } from './areas-revertidas/poligonos/san-jose/san-jose.component';
import { AccesoPacificoComponent } from './ampliacion/acceso-pacifico/acceso-pacifico.component';
import { CorteCulebraComponent } from './ampliacion/corte-culebra/corte-culebra.component';
import { NevasEsclusasComponent } from './ampliacion/nevas-esclusas/nevas-esclusas.component';
import { OperacionLgatunComponent } from './ampliacion/operacion-lgatun/operacion-lgatun.component';
import { PacificoAtlanticoComponent } from './ampliacion/pacifico-atlantico/pacifico-atlantico.component';


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
  {path:'portal',component:PortalSocketComponent},
  {path:'cuenca',component:CuencaHidroComponent},
  {path:'ft-sherma',component:FtShermanComponent},
  {path:'ft-davis',component:FtDavisComponent},
  {path:'ft-gulick',component:FtGulickComponent},
  {path:'ft-clayton',component:FtClaytonComponent},
  {path:'ft-amador',component:FtAmadorComponent},
  {path:'ft-grant',component:FtGrantComponent},
  {path:'ft-kobbe',component:FtKobbeComponent},
  {path:'quarry-heights',component:QuarryHeightsComponent},
  {path:'puesto-corozal',component:PuestoCorozalComponent},
  {path:'naval',component:NavalRodmanComponent},
  {path:'coco',component:CocoSubmarinaComponent},
  {path:'estacion-summit',component:SummitComponent},
  {path:'estacion-farfam',component:FarfamComponent},
  {path:'base-albrook',component:BaseAlbrookComponent},
  {path:'base-howard',component:BaseHowardComponent},
  {path:'p-sherman',component:ShermanComponent},
  {path:'pina', component:PinaComponent},
  {path:'balboa-oeste',component:BalboaOesteComponent},
  {path:'emperador',component:EmperadorComponent},
  {path:'rio-hato', component:RioHatoComponent},
  {path:'san-jose', component:SanJoseComponent},
  {path:'acceso-pacifico',component:AccesoPacificoComponent},
  {path:'corte-culebra',component:CorteCulebraComponent},
  {path:'nuevas-esclusas',component:NevasEsclusasComponent},
  {path:'operacion-gatun',component:OperacionLgatunComponent},
  {path:'pacifico-atlantico',component:PacificoAtlanticoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
