import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { ProyeccionComponent } from './pages/proyeccion/proyeccion.component';
import { InteraccionComponent } from './pages/interaccion/interaccion.component';

// socket Service
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:2000', options: {} };




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapaComponent,
    ProyeccionComponent,
    InteraccionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
