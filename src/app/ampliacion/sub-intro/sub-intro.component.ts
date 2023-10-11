import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-sub-intro',
  templateUrl: './sub-intro.component.html',
  styleUrls: ['./sub-intro.component.css'],
})
export class SubIntroComponent implements OnInit {
  data: any;

  constructor(private wsSocket: SocketService, private router: Router) {}

  videoES:boolean=false;
  videoEN:boolean=false;
  
  ngOnInit(): void {

    this.recibiendoPortal();
    this.wsSocket.homeEscuchar().subscribe((data: any) => {
      this.router.navigateByUrl(data);
      console.log(data);
    });
    this.idioma();

  }

  recibiendoPortal() {
    this.wsSocket.escuchandoPortal().subscribe((data) => {
      this.data=data;
      this.router.navigateByUrl(this.data);
    });
  }
  
  idioma(){

    this.wsSocket.idiomaGet().subscribe((data)=>{
      console.log('panel - Ampliacion content: ',data);
      if(data==='es'){
      
        this.videoES=true;
        this.videoEN=false;

      }else{

        this.videoEN=true;
        this.videoES=false;

      }

    });

  }



}
