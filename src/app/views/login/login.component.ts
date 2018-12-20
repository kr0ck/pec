import { Component, OnInit } from "@angular/core";
import { Router, Route } from "@angular/router";

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private _router: Router,
    private socialAuthService: AuthService
  ) {}

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      console.log(socialPlatform + ' sign in data : ', userData);
      // Now sign-in with userData
      // ...
    });
  }

  ngOnInit() {}
  enviarForm(value) {
    console.table(value);

    this._router.navigate(['home']);
  }
}
