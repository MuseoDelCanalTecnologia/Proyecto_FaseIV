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

const config: SocketIoConfig = { url: 'https://experience-staging.cuentanostuhistoria.org/', options: {} };




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapaComponent,
    ProyeccionComponent,
    InteraccionComponent,
    Pro1Component,
    Pro2Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
