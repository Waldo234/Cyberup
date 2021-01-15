import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url='http://localhost/Conexion/php/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  recuperarTodosC() {
    return this.http.get(`${this.url}recuperartodosC.php`);
  }

  alta(articulo) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));    
  }
  
  altaUs(usuario){
    return this.http.post(`${this.url}altaU.php`, JSON.stringify(usuario));  

  }

  baja(clave_c:number) {
    return this.http.get(`${this.url}baja.php?clave_c=${clave_c}`);
  }
  
  seleccionar(clave_p:number) {
    return this.http.get(`${this.url}seleccionar.php?clave_p=${clave_p}`);
  }

  modificacion(articulo) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  } 

  altaCa(articulo){
    return this.http.post(`${this.url}altaC.php`, JSON.stringify(articulo));  

  }

}