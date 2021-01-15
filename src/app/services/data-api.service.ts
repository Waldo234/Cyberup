import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/users';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  redirectUrl: string;
  baseUrl:string = "http://localhost/Pag/php/";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }
  public userlogin(username, password) {
  alert(username)
  return this.httpClient.post<any>(this.baseUrl + 'login.php', { username, password })
  .pipe(map(User => {
  this.setToken(Users[0].name);
  this.getLoggedInName.emit(true);
  return Users;
  }));
  }
  
  public userregistration(name,email,password) {
  return this.httpClient.post<any>(this.baseUrl + 'register.php', { name,email, password })
  .pipe(map(Users => {
  return Users;
  }));
  }
  
  //token
  setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  }
  }