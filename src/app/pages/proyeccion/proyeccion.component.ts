import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-proyeccion',
  templateUrl: './proyeccion.component.html',
  styleUrls: ['./proyeccion.component.css']
})
export class ProyeccionComponent implements OnInit {
  
  
//assets/proyeccion/PLASTIC - ES.mp4
//assets/proyeccion/output.mp4
  constructor(public wsSocket: SocketService,private router:Router) { }
  
  ngOnInit(){

   
  
    this.wsSocket.escuharVideo().subscribe(data=>{

    console.log(data);
     
    if(data==="1"){
     
      this.router.navigateByUrl('pro1');

    }else if(data==="2"){

      this.router.navigateByUrl('pro2');

    }else if(data=="portal"){

      this.router.navigateByUrl('portal');

    }else if(data=="cuenca"){
      this.router.navigateByUrl('cuenca');
    }else{

    }


    })
     
  
  
  }

 

 

}
