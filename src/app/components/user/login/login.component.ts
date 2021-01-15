import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: DataApiService,private router:Router, private authService: SocialAuthService) {
  this.angForm = this.fb.group({
  email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
  password: ['', Validators.required]
  });
  }
  
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.authService.signOut();
  }

  postdata(angForm1)
  {
  this.dataService.userlogin(angForm1.value.email,angForm1.value.password)
  .pipe(first())
  .subscribe(
  data => {
  const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
  this.router.navigate([redirect]);
  },
  error => {
  alert("User name or password is incorrect")
  });
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  }