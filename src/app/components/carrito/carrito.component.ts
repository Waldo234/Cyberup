import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticulosService } from 'src/app/articulos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito = null; cart ={ clave_c: null, clave_p: null, nom_p: null, descr: null, precio:null, foto:null, base64textString: null }

  constructor(private articulosServicio: ArticulosService) { }

  ngOnInit(){this.recuperarTodosC();}
  recuperarTodosC() { this.articulosServicio.recuperarTodosC().subscribe(result => this.carrito = result); } 
  seleccionar(codigo) { this.articulosServicio.seleccionar(codigo).subscribe(result => this.cart = result[0]); } hayRegistros() { return true; }
  baja(clave_c) { this.articulosServicio.baja(clave_c).subscribe(datos => { if (datos['resultado'] == 'OK') { alert(datos['mensaje']); this.recuperarTodosC(); } }); }
}
