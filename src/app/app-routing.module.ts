import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { profile } from 'console';
import { ListPcComponent } from './components/admin/list-pc/list-pc.component';
import { AsusComponent } from './components/asus/asus.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { DetailsPcComponent } from './components/details-pc/details-pc.component';
import { HomeComponent } from './components/home/home.component';
import { MetodosComponent } from './components/metodos/metodos.component';
import { OffersComponent } from './components/offers/offers.component';
import { Page404Component } from './components/page404/page404.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'offers', component: OffersComponent}, //solo usuarios 
  {path: 'asus', component: AsusComponent},
  {path: 'conocenos', component: ConocenosComponent}, 
  {path: 'politica', component: PoliticaComponent}, 
  {path: 'metodos', component: MetodosComponent}, 
  {path: 'terminos', component: TerminosComponent},
  {path: 'contactanos', component: ContactanosComponent}, 
  {path: 'carrito', component: CarritoComponent}, 
  {path: 'pc', component: DetailsPcComponent},
  {path: 'admin/list-pc', component: ListPcComponent}, //solo usuarios
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent}, //solo usuarios
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
