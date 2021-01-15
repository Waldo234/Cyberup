import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginbtn:boolean;
  logoutbtn:boolean;
  constructor(private dataService: DataApiService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
    console.log("loggedin");
    this.loginbtn=false;
    this.logoutbtn=true
    }
    else{
    this.loginbtn=true;
    this.logoutbtn=false
    }
    
    }
    
    private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
    }
    logout()
    {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
    }
    
  title = 'front';
  showModal(){
  Swal.fire({
    title: 'Aviso de Cookies',
    text: 'Este  Aviso  de  uso  de  Cookies  es  parte  de  nuestro  Aviso  de  Privacidad.  Para  obtener  más  información  acerca  de  nosotros  y  de  cómo  protegemos  su  información,  por  favor  consulte  nuestras politicas de  privacidad',
    width: 600,
    padding: '3em',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/assets/coo.jpg")
      left top
      no-repeat
    `
  });
}
}
