import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { ProyeccionComponent } from './pages/proyeccion/proyeccion.component';
import { InteraccionComponent } from './pages/interaccion/interaccion.component';
import {HttpClientJsonpModule}from '@angular/common/http';
// socket Service
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Pro1Component } from './pages/pro1/pro1.component';
import { Pro2Component } from './pages/pro2/pro2.component';
import { MapazoomComponent } from './pages/mapazoom/mapazoom.component';
import { CanalmapaComponent } from './pages/canalmapa/canalmapa.component';
import { AmpliacionComponent } from './pages/ampliacion/ampliacion.component';
import { HttpClientModule } from '@angular/common/http';
import { PortalSocketComponent } from './pages/portal-socket/portal-socket.component';
import { CuencaHidroComponent } from './cuenca-hidro/cuenca-hidro.component';
import { FtShermanComponent } from './areas-revertidas/ft-sherman/ft-sherman.component';
import { FtDavisComponent } from './areas-revertidas/ft-davis/ft-davis.component';
import { FtGulickComponent } from './areas-revertidas/ft-gulick/ft-gulick.component';
import { FtClaytonComponent } from './areas-revertidas/ft-clayton/ft-clayton.component';
import { FtAmadorComponent } from './areas-revertidas/ft-amador/ft-amador.component';
import { FtKobbeComponent } from './areas-revertidas/ft-kobbe/ft-kobbe.component';
import { QuarryHeightsComponent } from './areas-revertidas/quarry-heights/quarry-heights.component';
import { PuestoCorozalComponent } from './areas-revertidas/puesto-corozal/puesto-corozal.component';
import { NavalRodmanComponent } from './areas-revertidas/naval-rodman/naval-rodman.component';
import { CocoSubmarinaComponent } from './areas-revertidas/coco-submarina/coco-submarina.component';
import { SummitComponent } from './areas-revertidas/summit/summit.component';
import { FarfamComponent } from './areas-revertidas/farfam/farfam.component';
import { BaseAlbrookComponent } from './areas-revertidas/base-albrook/base-albrook.component';
import { BaseHowardComponent } from './areas-revertidas/base-howard/base-howard.component';
import { FtGrantComponent } from './areas-revertidas/ft-grant/ft-grant.component';
import { ShermanComponent } from './areas-revertidas/poligonos/sherman/sherman.component';
import { PinaComponent } from './areas-revertidas/poligonos/pina/pina.component';
import { BalboaOesteComponent } from './areas-revertidas/poligonos/balboa-oeste/balboa-oeste.component';
import { EmperadorComponent } from './areas-revertidas/poligonos/emperador/emperador.component';
import { RioHatoComponent } from './areas-revertidas/poligonos/rio-hato/rio-hato.component';
import { SanJoseComponent } from './areas-revertidas/poligonos/san-jose/san-jose.component';
import { BarroColoradoComponent } from './cuenca/barro-colorado/barro-colorado.component';
import { AltosCampanaComponent } from './cuenca/altos-campana/altos-campana.component';
import { ParqueSoberaniaComponent } from './cuenca/parque-soberania/parque-soberania.component';
import { CaminoCrucesComponent } from './cuenca/camino-cruces/camino-cruces.component';
import { ParqueChagresComponent } from './cuenca/parque-chagres/parque-chagres.component';
import { LagoGatunComponent } from './cuenca/lago-gatun/lago-gatun.component';
import { RioGrandeComponent } from './cuenca/rio-grande/rio-grande.component';
import { RioTrinidadComponent } from './cuenca/rio-trinidad/rio-trinidad.component';
import { RioQuebradoComponent } from './cuenca/rio-quebrado/rio-quebrado.component';
import { RioGatunComponent } from './cuenca/rio-gatun/rio-gatun.component';
import { RioPequeniComponent } from './cuenca/rio-pequeni/rio-pequeni.component';
import { RioChagresComponent } from './cuenca/rio-chagres/rio-chagres.component';
import { PacificoAtlanticoComponent } from './ampliacion/pacifico-atlantico/pacifico-atlantico.component';
import { CorteCulebraComponent } from './ampliacion/corte-culebra/corte-culebra.component';
import { NevasEsclusasComponent } from './ampliacion/nevas-esclusas/nevas-esclusas.component';
import { OperacionLgatunComponent } from './ampliacion/operacion-lgatun/operacion-lgatun.component';
import { AccesoPacificoComponent } from './ampliacion/acceso-pacifico/acceso-pacifico.component';
import { RevertidasComponent } from './pages/revertidas/revertidas.component';
import { CuencaComponent } from './pages/cuenca/cuenca.component';
import { AmpliacionacontentComponent } from './pages/ampliacionacontent/ampliacionacontent.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BasesComponent } from './pages/bases/bases.component';
import { PoligonostiroComponent } from './pages/poligonostiro/poligonostiro.component';
import { LessepsComponent } from './panel/revertidas/lesseps/lesseps.component';
import { PanelShermanComponent } from './panel/revertidas/sherman/sherman.component';
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
//import {BarrocoloradoComponent } from './panel/cuenca/barrocolorado/barrocolorado.component';
//import { CaminocrucesComponent } from './panel/cuenca/caminocruces/caminocruces.component';
import { PanelBarrocoloradoComponent } from './panel/cuenca/barrocolorado/barrocolorado.component';
import { PanelCaminocrucesComponent } from './panel/cuenca/caminocruces/caminocruces.component';
import { PaltocampanaComponent } from './panel/cuenca/paltocampana/paltocampana.component';
import { PlagatunComponent } from './panel/cuenca/plagatun/plagatun.component';
import { PchagresComponent } from './panel/cuenca/pchagres/pchagres.component';
import { PsoberaniaComponent } from './panel/cuenca/psoberania/psoberania.component';
import { Cuenca3Component } from './pages/cuenca3/cuenca3.component';
import { IntroareasComponent } from './pages/introareas/introareas.component';
import { SubcuencasComponent } from './pages/subcuencas/subcuencas.component';
import { CoberturaComponent } from './pages/cobertura/cobertura.component';
import { CauceComponent } from './pages/cauce/cauce.component';
import { ProfundizacionComponent } from './pages/profundizacion/profundizacion.component';
import { NavegacionComponent } from './pages/navegacion/navegacion.component';
import { ConstruccionComponent } from './pages/construccion/construccion.component';
import { SuministroComponent } from './pages/suministro/suministro.component';
import { BalboaComponent } from './areas-revertidas/poligonos/balboa/balboa.component';
import { SubIntroComponent } from './ampliacion/sub-intro/sub-intro.component';
import { SliderComponent } from './pages/slider/slider.component';
import { ShermanVisorComponent } from './visor/sherman-visor/sherman-visor.component';
import { CocosoloVisorComponent } from './visor/cocosolo-visor/cocosolo-visor.component';
import { DaviesVisorComponent } from './visor/davies-visor/davies-visor.component';
import { GulickVisorComponent } from './visor/gulick-visor/gulick-visor.component';
import { ClaytonVisorComponent } from './visor/clayton-visor/clayton-visor.component';
import { AlbrookVisorComponent } from './visor/albrook-visor/albrook-visor.component';
import { AmadorVisorComponent } from './visor/amador-visor/amador-visor.component';
import { GrantVisorComponent } from './visor/grant-visor/grant-visor.component';
import { KobbeVisorComponent } from './visor/kobbe-visor/kobbe-visor.component';
import { RodmanVisorComponent } from './visor/rodman-visor/rodman-visor.component';
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

//Entorno
// const config: SocketIoConfig = { url: 'https://experience-staging.cuentanostuhistoria.org/', options: {} };
//Local
 const config: SocketIoConfig = { url: 'http://localhost:7000', options: {} };
@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    MapaComponent,
    ProyeccionComponent,
    InteraccionComponent,
    Pro1Component,
    Pro2Component,
    MapazoomComponent,
    CanalmapaComponent,
    AmpliacionComponent,
    PortalSocketComponent,
    CuencaHidroComponent,
    FtShermanComponent,
    FtDavisComponent,
    FtGulickComponent,
    FtClaytonComponent,
    FtAmadorComponent,
    FtKobbeComponent,
    QuarryHeightsComponent,
    PuestoCorozalComponent,
    NavalRodmanComponent,
    CocoSubmarinaComponent,
    SummitComponent,
    FarfamComponent,
    BaseAlbrookComponent,
    BaseHowardComponent,
    FtGrantComponent,
    ShermanComponent,
    PinaComponent,
    BalboaOesteComponent,
    EmperadorComponent,
    RioHatoComponent,
    SanJoseComponent,
    BarroColoradoComponent,
    AltosCampanaComponent,
    ParqueSoberaniaComponent,
    CaminoCrucesComponent,
    ParqueChagresComponent,
    LagoGatunComponent,
    RioGrandeComponent,
    RioTrinidadComponent,
    RioQuebradoComponent,
    RioGatunComponent,
    RioPequeniComponent,
    RioChagresComponent,
    PacificoAtlanticoComponent,
    CorteCulebraComponent,
    NevasEsclusasComponent,
    OperacionLgatunComponent,
    AccesoPacificoComponent,
    RevertidasComponent,
    CuencaComponent,
    AmpliacionacontentComponent,
    FooterComponent,
    BasesComponent,
    PoligonostiroComponent,
    LessepsComponent,
    PanelShermanComponent,
    CocosoloComponent,
    RandolphComponent,
    DaviesComponent,
    GulikComponent,
    ClaytonComponent,
    AlbrookComponent,
    AmadorComponent,
    GrantComponent,
    KobbeComponent,
    RodmanComponent,
    HowardComponent,
    SubcuencaComponent,
    AreasprotegidasComponent,
   
    PanelBarrocoloradoComponent,
    PanelCaminocrucesComponent,
    PaltocampanaComponent,
    PlagatunComponent,
    PchagresComponent,
    PsoberaniaComponent,
    Cuenca3Component,
    IntroareasComponent,
    SubcuencasComponent,
    CoberturaComponent,
    CauceComponent,
    ProfundizacionComponent,
    NavegacionComponent,
    ConstruccionComponent,
    SuministroComponent,
    BalboaComponent,
    SubIntroComponent,
    SliderComponent,
    ShermanVisorComponent,
    CocosoloVisorComponent,
    DaviesVisorComponent,
    GulickVisorComponent,
    ClaytonVisorComponent,
    AlbrookVisorComponent,
    AmadorVisorComponent,
    GrantVisorComponent,
    KobbeVisorComponent,
    RodmanVisorComponent,
    HomeEngComponent,
    RevertidasEngComponent,
    BasesEngComponent,
    PoligonosEngComponent,
    ShermanEngComponent,
    LessepsEngComponent,
    RandolphEngComponent,
    CocosoloEngComponent,
    DavisEngComponent,
    GulickEngComponent,
    ClaytonEngComponent,
    AlbrookEngComponent,
    AmadorEngComponent,
    GrantEngComponent,
    KobbeEngComponent,
    HowardEngComponent,
    RodmanEngComponent,
    IntrocuencaEngComponent,
    IntroareasEngComponent,
    BarrocoloradoEngComponent,
    AltocampanaEngComponent,
    SoberaniaEngComponent,
    CaminocrucesEngComponent,
    ChagresEngComponent,
    GatunEngComponent,
    SubcuencaEngComponent,
    CoberturaEngComponent
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpClientJsonpModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AppModule { }
