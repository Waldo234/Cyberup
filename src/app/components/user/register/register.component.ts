import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticulosService } from 'src/app/articulos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private articulosServicio: ArticulosService) {}
  usuario = null; usr = {nom_cl: null, correo: null};
  ngOnInit(){
  }
  altaUs() { this.articulosServicio.altaUs(this.usr).subscribe(datos => { if (datos['resultado'] == 'OK') { alert(datos['mensaje']); } }); }
 
  }
