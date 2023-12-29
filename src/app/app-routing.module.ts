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
import { AltosCampanaComponent } from './cuenca/altos-campana/altos-campana.component';
import { BarroColoradoComponent } from './cuenca/barro-colorado/barro-colorado.component';
import { CaminoCrucesComponent } from './cuenca/camino-cruces/camino-cruces.component';
import { LagoGatunComponent } from './cuenca/lago-gatun/lago-gatun.component';
import { ParqueChagresComponent } from './cuenca/parque-chagres/parque-chagres.component';
import { ParqueSoberaniaComponent } from './cuenca/parque-soberania/parque-soberania.component';
import { RioChagresComponent } from './cuenca/rio-chagres/rio-chagres.component';
import { RioGatunComponent } from './cuenca/rio-gatun/rio-gatun.component';
import { RioGrandeComponent } from './cuenca/rio-grande/rio-grande.component';
import { RioPequeniComponent } from './cuenca/rio-pequeni/rio-pequeni.component';
import { RioQuebradoComponent } from './cuenca/rio-quebrado/rio-quebrado.component';
import { RioTrinidadComponent } from './cuenca/rio-trinidad/rio-trinidad.component';
import { RevertidasComponent } from './pages/revertidas/revertidas.component';
import { CuencaComponent } from './pages/cuenca/cuenca.component';
import { AmpliacionacontentComponent } from './pages/ampliacionacontent/ampliacionacontent.component';
import { BasesComponent } from './pages/bases/bases.component';
import { PoligonostiroComponent } from './pages/poligonostiro/poligonostiro.component';
import { PanelShermanComponent } from './panel/revertidas/sherman/sherman.component';
import { LessepsComponent } from './panel/revertidas/lesseps/lesseps.component';
import { CocosoloComponent } from './panel/revertidas/cocosolo/cocosolo.component';
import { RandolphComponent } from './panel/revertidas/randolph/randolph.component';
import { DaviesComponent } from './panel/revertidas/davies/davies.component';
import { GulikComponent } from './panel/revertidas/gulik/gulik.component';
import { ClaytonComponent } from './panel/revertidas/clayton/clayton.component';
import { AlbrookComponent } from './panel/revertidas/albrook/albrook.component';
import { AmadorComponent } from './panel/revertidas/amador/amador.component';
import { GrantComponent } from './panel/revertidas/grant/grant.component';
import { KobbeComponent } from './panel/revertidas/kobbe/kobbe.component';
import { RodmanComponent } from './panel/revertidas/rodman/rodman.component';
import { HowardComponent } from './panel/revertidas/howard/howard.component';
import { SubcuencaComponent } from './pages/subcuenca/subcuenca.component';
import { AreasprotegidasComponent } from './pages/areasprotegidas/areasprotegidas.component';
import { PanelBarrocoloradoComponent } from './panel/cuenca/barrocolorado/barrocolorado.component';
import { PanelCaminocrucesComponent } from './panel/cuenca/caminocruces/caminocruces.component';
import { PaltocampanaComponent } from './panel/cuenca/paltocampana/paltocampana.component';
import { PlagatunComponent } from './panel/cuenca/plagatun/plagatun.component';
import { PchagresComponent } from './panel/cuenca/pchagres/pchagres.component';
import { PsoberaniaComponent } from './panel/cuenca/psoberania/psoberania.component';

import { Cuenca3Component } from './pages/cuenca3/cuenca3.component';
import { IntroareasComponent } from './pages/introareas/introareas.component';
import { CoberturaComponent } from './pages/cobertura/cobertura.component';
import { CauceComponent } from './pages/cauce/cauce.component';
import { ProfundizacionComponent } from './pages/profundizacion/profundizacion.component';
import { NavegacionComponent } from './pages/navegacion/navegacion.component';
import { ConstruccionComponent } from './pages/construccion/construccion.component';
import { SuministroComponent } from './pages/suministro/suministro.component';
import { BalboaComponent } from './areas-revertidas/poligonos/balboa/balboa.component';
import { SubIntroComponent } from './ampliacion/sub-intro/sub-intro.component';
import { SliderComponent } from './pages/slider/slider.component';
import { AlbrookVisorComponent } from './visor/albrook-visor/albrook-visor.component';
import { AmadorVisorComponent } from './visor/amador-visor/amador-visor.component';
import { CocosoloVisorComponent } from './visor/cocosolo-visor/cocosolo-visor.component';
import { DaviesVisorComponent } from './visor/davies-visor/davies-visor.component';
import { GrantVisorComponent } from './visor/grant-visor/grant-visor.component';
import { GulickVisorComponent } from './visor/gulick-visor/gulick-visor.component';
import { KobbeVisorComponent } from './visor/kobbe-visor/kobbe-visor.component';
import { RodmanVisorComponent } from './visor/rodman-visor/rodman-visor.component';
import { ShermanVisorComponent } from './visor/sherman-visor/sherman-visor.component';
import { ClaytonVisorComponent } from './visor/clayton-visor/clayton-visor.component';
import { HomeEngComponent } from './pages/panel_ingles/home-eng/home-eng.component';
import { RevertidasEngComponent } from './pages/panel_ingles/revertidas-eng/revertidas-eng.component';
import { BasesEngComponent } from './pages/panel_ingles/bases-eng/bases-eng.component';
import { PoligonosEngComponent } from './pages/panel_ingles/poligonos-eng/poligonos-eng.component';
import { ShermanEngComponent } from './pages/panel_ingles/basesmilitares_eng/sherman-eng/sherman-eng.component';
import { LessepsEngComponent } from './pages/panel_ingles/basesmilitares_eng/lesseps-eng/lesseps-eng.component';
import { RandolphEngComponent } from './pages/panel_ingles/basesmilitares_eng/randolph-eng/randolph-eng.component';
import { CocosoloEngComponent } from './pages/panel_ingles/basesmilitares_eng/cocosolo-eng/cocosolo-eng.component';
import { DavisEngComponent } from './pages/panel_ingles/basesmilitares_eng/davis-eng/davis-eng.component';
import { GulickEngComponent } from './pages/panel_ingles/basesmilitares_eng/gulick-eng/gulick-eng.component';
import { ClaytonEngComponent } from './pages/panel_ingles/basesmilitares_eng/clayton-eng/clayton-eng.component';
import { AlbrookEngComponent } from './pages/panel_ingles/basesmilitares_eng/albrook-eng/albrook-eng.component';
import { AmadorEngComponent } from './pages/panel_ingles/basesmilitares_eng/amador-eng/amador-eng.component';
import { GrantEngComponent } from './pages/panel_ingles/basesmilitares_eng/grant-eng/grant-eng.component';
import { KobbeEngComponent } from './pages/panel_ingles/basesmilitares_eng/kobbe-eng/kobbe-eng.component';
import { HowardEngComponent } from './pages/panel_ingles/basesmilitares_eng/howard-eng/howard-eng.component';
import { RodmanEngComponent } from './pages/panel_ingles/basesmilitares_eng/rodman-eng/rodman-eng.component';
import { IntrocuencaEngComponent } from './pages/panel_ingles/introcuenca-eng/introcuenca-eng.component';
import { IntroareasEngComponent } from './pages/panel_ingles/introareas-eng/introareas-eng.component';
import { BarrocoloradoEngComponent } from './pages/panel_ingles/protegidas/barrocolorado-eng/barrocolorado-eng.component';
import { AltocampanaEngComponent } from './pages/panel_ingles/protegidas/altocampana-eng/altocampana-eng.component';
import { SoberaniaEngComponent } from './pages/panel_ingles/protegidas/soberania-eng/soberania-eng.component';
import { CaminocrucesEngComponent } from './pages/panel_ingles/protegidas/caminocruces-eng/caminocruces-eng.component';
import { ChagresEngComponent } from './pages/panel_ingles/protegidas/chagres-eng/chagres-eng.component';
import { GatunEngComponent } from './pages/panel_ingles/protegidas/gatun-eng/gatun-eng.component';
import { SubcuencaEngComponent } from './pages/panel_ingles/subcuenca-eng/subcuenca-eng.component';
import { CoberturaEngComponent } from './pages/panel_ingles/cobertura-eng/cobertura-eng.component';
import { AmpliacionEngComponent } from './pages/panel_ingles/ampliacion-eng/ampliacion-eng.component';
import { ContenidoampliacionEngComponent } from './pages/panel_ingles/contenidoampliacion-eng/contenidoampliacion-eng.component';
import { CauceEngComponent } from './pages/panel_ingles/cauce-eng/cauce-eng.component';
import { ProfundizacionEngComponent } from './pages/panel_ingles/profundizacion-eng/profundizacion-eng.component';
import { NavegacionEngComponent } from './pages/panel_ingles/navegacion-eng/navegacion-eng.component';
import { ConstruccionEngComponent } from './pages/panel_ingles/construccion-eng/construccion-eng.component';
import { SuministroEngComponent } from './pages/panel_ingles/suministro-eng/suministro-eng.component';
import { ConexionesComponent } from './pages/conexiones/conexiones.component';
import { ConexionesEngComponent } from './pages/panel_ingles/conexiones-eng/conexiones-eng.component';
import { RutasUsuariosComponent } from './pages/rutas-usuarios/rutas-usuarios.component';
import { BuquesComponent } from './pages/buques/buques.component';
import { BuquesEngComponent } from './pages/panel_ingles/buques-eng/buques-eng.component';
import { RutasEngComponent } from './pages/panel_ingles/rutas-eng/rutas-eng.component';
import { CanalConexionesComponent } from './ampliacion/canal-conexiones/canal-conexiones.component';
import { CanalBuquesComponent } from './ampliacion/canal-buques/canal-buques.component';
import { CanalRutasComponent } from './ampliacion/canal-rutas/canal-rutas.component';
import { NeopanamaxComponent } from './ampliacion/neopanamax/neopanamax.component';


const routes: Routes = [
 
  //{path:'', component:HomeComponent,pathMatch:'full'},
  {path:'', component:ProyeccionComponent,pathMatch:'full'},
  {path:'mapa', component:MapaComponent},
  {path:'proyeccion', component:ProyeccionComponent},
  {path:'interaccion', component:InteraccionComponent},
  {path:'pro1',component:Pro1Component},
  {path:'pro2',component:Pro2Component},
  {path:'mapazoom',component:MapazoomComponent},
  {path:'cobertura',component:CoberturaComponent},
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
  {path:'pacifico-atlantico',component:PacificoAtlanticoComponent},
  {path:'altos-campana',component:AltosCampanaComponent},
  {path:'barro-colorado',component:BarroColoradoComponent},
  {path:'camino-cruces', component:CaminoCrucesComponent},
  {path:'lago-gatun',component:LagoGatunComponent},
  {path:'parque-chagres',component:ParqueChagresComponent},
  {path:'parque-soberania',component:ParqueSoberaniaComponent},
  {path:'rio-chagres', component:RioChagresComponent},
  {path:'rio-gatun',component:RioGatunComponent},
  {path:'rio-grande',component:RioGrandeComponent},
  {path:'rio-pequeni',component:RioPequeniComponent},
  {path:'rio-quebrado',component:RioQuebradoComponent},
  {path:'rio-trinidad',component:RioTrinidadComponent},
  {path:'revertidas',component:RevertidasComponent},
  {path:'cuenca2',component:CuencaComponent},
  {path:'introcuenca',component:Cuenca3Component},
  {path:'introareas',component:IntroareasComponent},
  {path:'contenido-amp',component:AmpliacionacontentComponent},
  {path:'bases',component:BasesComponent},
  {path:'poligonostiro',component:PoligonostiroComponent},

  {path:'panel-sherman',component:PanelShermanComponent},
  {path:'panel-lesseps',component:LessepsComponent},
  {path:'panel-cocosolo',component:CocosoloComponent},
  {path:'panel-randolph',component:RandolphComponent},
  {path:'panel-davies',component:DaviesComponent},
  {path:'panel-gulik',component:GulikComponent},
  {path:'panel-clayton',component:ClaytonComponent},
  {path:'panel-albrook',component:AlbrookComponent},
  {path:'panel-amador',component:AmadorComponent},
  {path:'panel-grant',component:GrantComponent},
  {path:'panel-kobbe',component:KobbeComponent},
  {path:'panel-rodman',component:RodmanComponent},
  {path:'panel-howard',component:HowardComponent},

  {path:'subcuenca',component:SubcuencaComponent},
  {path:'areas-prot',component:AreasprotegidasComponent},
  {path:'panel-barrocolorado',component:PanelBarrocoloradoComponent},
  {path:'panel-caminocruces',component:PanelCaminocrucesComponent},
  {path:'panel-campana',component:PaltocampanaComponent},
  {path:'panel-gatun',component:PlagatunComponent},
  {path:'panel-chagres',component:PchagresComponent},
  {path:'panel-soberania',component:PsoberaniaComponent},
  {path:'contenido-ampliacion',component:AmpliacionacontentComponent},
  {path:'cauce',component:CauceComponent},
  {path:'profundizacion',component:ProfundizacionComponent},
  {path:'navegacion',component:NavegacionComponent},
  {path:'construccion',component:ConstruccionComponent},
  {path:'suministro',component:SuministroComponent},
  {path:'balboa',component:BalboaComponent},
  {path:'sub-intro',component:SubIntroComponent},
  {path:'slider',component:SliderComponent},
  {path:'albrook-visor',component:AlbrookVisorComponent},
  {path:'amador-visor',component:AmadorVisorComponent},
  {path:'cocosolo-visor',component:CocosoloVisorComponent},
  {path:'davies-visor',component:DaviesVisorComponent},
  {path:'grant-visor',component:GrantVisorComponent},
  {path:'gulick-visor',component:GulickVisorComponent},
  {path:'kobbe-visor',component:KobbeVisorComponent},
  {path:'rodman-visor',component:RodmanVisorComponent},
  {path:'sherman-visor',component:ShermanVisorComponent},
  {path:'clayton-visor',component:ClaytonVisorComponent},

  //Paneles Ingles

  {path:'home_eng',component:HomeEngComponent},
  {path:'revertidas_eng',component:RevertidasEngComponent},
  {path:'bases_eng',component:BasesEngComponent},
  {path:'poligonos_eng',component:PoligonosEngComponent},

  //revertidas en ingles
  {path:'sherman_eng',component:ShermanEngComponent},
  {path:'lesseps_eng',component:LessepsEngComponent},
  {path:'randolph_eng',component:RandolphEngComponent},
  {path:'cocosolo_eng',component:CocosoloEngComponent},
  {path:'davis_eng',component:DavisEngComponent},
  {path:'gulick_eng',component:GulickEngComponent},
  {path:'clayton_eng',component:ClaytonEngComponent},
  {path:'albrook_eng',component:AlbrookEngComponent},
  {path:'amador_eng',component:AmadorEngComponent},
  {path:'grant_eng',component:GrantEngComponent},
  {path:'kobbe_eng',component:KobbeEngComponent},
  {path:'howard_eng',component:HowardEngComponent},
  {path:'rodman_eng',component:RodmanEngComponent},


  //cuenca del canal
  {path:'introcuenca_eng',component:IntrocuencaEngComponent},
  {path:'introareas_eng',component:IntroareasEngComponent},

  //Areas Protegidas Ingles

  {path:'barrocolorado_eng',component:BarrocoloradoEngComponent},
  {path:'altoscampana_eng',component:AltocampanaEngComponent},
  {path:'soberania_eng',component:SoberaniaEngComponent},
  {path:'caminocruces_eng',component:CaminocrucesEngComponent},
  {path:'chagres_eng',component:ChagresEngComponent},
  {path:'gatun_eng',component:GatunEngComponent},


  {path:'subcuenca_eng',component:SubcuencaEngComponent},
  {path:'cobertura_eng',component:CoberturaEngComponent},
  {path:'ampliacion_eng',component:AmpliacionEngComponent},
  {path:'contenido_ampliacion_eng',component:ContenidoampliacionEngComponent},
  {path:'cauce_eng',component:CauceEngComponent},
  {path:'profundizacion_eng',component:ProfundizacionEngComponent},
  {path:'navegacion_eng',component:NavegacionEngComponent},
  {path:'construccion_eng',component:ConstruccionEngComponent},
  {path:'suministro_eng',component:SuministroEngComponent},
  {path:'conexiones',component:ConexionesComponent},
  {path:'conexiones_eng',component:ConexionesEngComponent},
  {path:'rutas_usuarios',component:RutasUsuariosComponent},
  {path:'buques',component:BuquesComponent},
  {path:'buques_eng',component:BuquesEngComponent},
  {path:'rutas_eng',component:RutasEngComponent},
  {path:'canal-conexiones',component:CanalConexionesComponent},
  {path:'canal-buques',component:CanalBuquesComponent},
  {path:'canal-rutas',component:CanalRutasComponent},
  {path:'neo-panamax',component:NeopanamaxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
