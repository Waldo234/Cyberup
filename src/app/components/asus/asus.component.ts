import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticulosService } from 'src/app/articulos.service';


@Component({
  selector: 'app-asus',
  templateUrl: './asus.component.html',
  styleUrls: ['./asus.component.css']
})
export class AsusComponent implements OnInit {
  articulos = null; art = { clave_p: null, nom_p: null, cat: null, stock: null, descr:null, foto: null, precio:null, base64textString: null };
  constructor(private articulosServicio: ArticulosService) {

  } ngOnInit() { this.recuperarTodos(); }
  recuperarTodos() { this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result); }
  alta() { this.articulosServicio.alta(this.art).subscribe(datos => { if (datos['resultado'] == 'OK') { alert(datos['mensaje']); this.recuperarTodos(); } }); }
  baja(codigo) { this.articulosServicio.baja(codigo).subscribe(datos => { if (datos['resultado'] == 'OK') { alert(datos['mensaje']); this.recuperarTodos(); } }); }
  modificacion() { this.articulosServicio.modificacion(this.art).subscribe(datos => { if (datos['resultado'] == 'OK') { alert(datos['mensaje']); this.recuperarTodos(); } }); }

  seleccionar(clave_p) { this.articulosServicio.seleccionar(clave_p).subscribe(result => this.art = result[0]); console.log(this.articulos); } hayRegistros() { return true; }

  altaCa() { this.articulosServicio.altaCa(this.art).subscribe(datos => { if (datos['resultado'] == 'OK') { alert(datos['mensaje']); } }); }
} 
