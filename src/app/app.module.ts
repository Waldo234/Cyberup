import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsPcComponent } from './components/details-pc/details-pc.component';
import { ListPcComponent } from './components/admin/list-pc/list-pc.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';


//services
import { DataApiService } from './services/data-api.service';
import { AsusComponent } from './components/asus/asus.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { MetodosComponent } from './components/metodos/metodos.component';
import { CarritoComponent } from './components/carrito/carrito.component';

import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {  GoogleLoginProvider,  FacebookLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OffersComponent,
    HeroComponent,
    DetailsPcComponent,
    ListPcComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    AsusComponent,
    ConocenosComponent,
    TerminosComponent,
    PoliticaComponent,
    ContactanosComponent,
    MetodosComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [    DataApiService, {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1067081943096-bomfief0ogks9nu9fjc1tcttec5llc6l.apps.googleusercontent.com")
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("824352041729345")
        }
      ]
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
