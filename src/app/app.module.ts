import { NgModule } from '@angular/core';
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

//Entorno
const config: SocketIoConfig = { url: 'https://experience-staging.cuentanostuhistoria.org/', options: {} };
//Local
// const config: SocketIoConfig = { url: 'http://localhost:2000', options: {} };



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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
