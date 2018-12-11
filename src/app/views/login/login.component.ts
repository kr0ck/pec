import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  enviarForm(value) {
    console.table(value);

    this._router.navigate(['home']);
  }

}