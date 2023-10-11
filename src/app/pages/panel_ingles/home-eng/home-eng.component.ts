import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-home-eng',
  templateUrl: './home-eng.component.html',
  styleUrls: ['./home-eng.component.css']
})
export class HomeEngComponent implements OnInit {

  constructor(private router: Router, private socket:SocketService) { }

  ngOnInit(): void {

    this.idioma();
  }revertida(){
    this.router.navigateByUrl('/revertidas');
  }

  cuenca(){
    this.router.navigateByUrl('/introcuenca');
  }

  ampliacion(){
    this.router.navigateByUrl('/ampliacion');
  }


  idioma(){
    this.socket.idiomaPost('en');
  }

}
  


