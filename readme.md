//Parte de proyeccion

ngOnInit() {
    
    this.wsSocket.homeEscuchar().subscribe((data:any)=>{
      this.router.navigateByUrl(data);
      console.log(data);
      
     });


     this.recibiendoPortal()


  }


  recibiendoPortal(){

    this.wsSocket.escuchandoPortal().subscribe((data)=>{
    this.data=data;
    this.router.navigateByUrl(this.data);
    // document.getElementById('video')?.setAttribute("src",this.data)
    });

  }

  // lado del menu de panel
    enviarVideo() {
    this.wsSocket.enviarVideo(this.video);
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  <video id="" [autoplay]="true" [muted]="false" [loop]="true" src="/assets/  proyeccion/" width=100%  height=100% ></video>

    enviarProyeccion() {
    this.wsSocket.envioPortal('balboa-oeste');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('rio-chagres');
  }
  