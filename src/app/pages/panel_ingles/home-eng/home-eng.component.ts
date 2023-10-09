import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-eng',
  templateUrl: './home-eng.component.html',
  styleUrls: ['./home-eng.component.css']
})
export class HomeEngComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }revertida(){
    this.router.navigateByUrl('/revertidas');
  }

  cuenca(){
    this.router.navigateByUrl('/introcuenca');
  }

  ampliacion(){
    this.router.navigateByUrl('/ampliacion');
  }


}
  


