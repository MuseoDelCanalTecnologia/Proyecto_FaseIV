import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { Router } from '@angular/router';
import { Titulo } from 'src/app/interface/titulo';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mapazoom',
  templateUrl: './mapazoom.component.html',
  styleUrls: ['./mapazoom.component.css'],
})
export class MapazoomComponent implements OnInit {
  data: any;
  constructor(
    public wsSocket: SocketService,
    private router: Router,
    private http: HttpClient
  ) {}

  videoES: boolean = false;
  videoEN: boolean = false;

  ngOnInit() {
    this.wsSocket.homeEscuchar().subscribe((data: any) => {
      this.router.navigateByUrl(data);
      console.log(data);
    });
    this.idioma();
    this.recibiendoPortal();
  }

  recibiendoPortal() {
    this.wsSocket.escuchandoPortal().subscribe((data) => {
      this.data = data;
      this.router.navigateByUrl(this.data);
      // document.getElementById('video')?.setAttribute("src",this.data)
    });
  }


  idioma(){

    this.wsSocket.idiomaGet().subscribe((data)=>{
      
      if(data==='es'){
        console.log('panel bases militares',data);
        this.videoES=true;
        this.videoEN=false;

      }else{

        this.videoEN=true;
        this.videoES=false;

      }

    });

  }

}
