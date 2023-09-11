import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class IdiomaService {
  constructor(private socket: Socket,private router:Router) {}
  Lang: any = localStorage.setItem('key', 'es');
/*
Variables ID


*/
info:any
  envioLang(dato: string) {
    return this.socket.emit('lang', dato);
  }



  escuchandoLang() {    
   return this.socket.fromEvent('dataLang');
  }



 lang(Lang:any){
  // this.platino_desc=document.getElementById('platino-desc');
    // this.platino = document.getElementById('platino');
    // this.texto_card=document.getElementById('card-texto');
    // this.ultima_conexion=document.getElementById('ultima-conexion');
    // this.buque=document.getElementById('buque');
    // this.gold=document.getElementById('gold');
    // this.gold_desc=document.getElementById('gold-desc');
    // this.empresarial=document.getElementById('empresarial');
    // this.empresarial_desc=document.getElementById('empresarial-desc');
    // this.info=document.getElementById('info');
    // this.contact=document.getElementById('contacto');
    if(this.router.routerState.snapshot.url==""){
      switch (Lang) {
       
         case 'es':
           this.info.createElement('')
           break;
         case 'en':
         // this.info.innerHTML="Information English"
           break;
       }
    }
 }
}
