import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-ft-davis',
  templateUrl: './ft-davis.component.html',
  styleUrls: ['./ft-davis.component.css']
})
export class FtDavisComponent implements OnInit {
  data:any;
  constructor(private wsSocket: SocketService, private router:Router,private id_router:ActivatedRoute) { }

  ngOnInit(): void {

    this.wsSocket.homeEscuchar().subscribe((data:any)=>{
      this.router.navigateByUrl(data);
      console.log(data);
      
     });

  

     this.recibiendoPortal();

  }


  recibiendoPortal(){


    this.wsSocket.escuchandoPortal().subscribe((data)=>{

      this.data=data;
      // document.getElementById('video')?.setAttribute("src",this.data)
      
      if(!this.data){
    
        this.router.navigate(this.data);
    
        }else{
          //corriendo video
        }

    });
 
    
   

  }

}
