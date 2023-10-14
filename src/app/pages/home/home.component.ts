import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor(private router: Router, private socket:SocketService) {
    
   }

  ngOnInit() {

   
    
   this.idioma();
    
  }

  revertida(){
    this.router.navigateByUrl('/revertidas');
  }

  cuenca(){
    this.router.navigateByUrl('/introcuenca');
  }

  ampliacion(){
    this.router.navigateByUrl('/ampliacion');
  }

  idioma(){
    setTimeout(() => {
      this.socket.idiomaPost('es');
    }, 1000);
  }

  // idiomaIng(){
  //   this.socket.idiomaPost('en');
  // }


}
