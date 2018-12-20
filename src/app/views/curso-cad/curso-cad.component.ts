import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';


@Component({
  selector: 'app-curso-cad',
  templateUrl: './curso-cad.component.html',
  styleUrls: ['./curso-cad.component.css']
})
export class CursoCadComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  enviarForm(value) {
    console.table(value);

    this._router.navigate(['home']);
  }

}
