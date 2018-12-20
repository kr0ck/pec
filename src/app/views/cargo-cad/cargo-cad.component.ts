import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';


@Component({
  selector: 'app-cargo-cad',
  templateUrl: './cargo-cad.component.html',
  styleUrls: ['./cargo-cad.component.css']
})
export class CargoCadComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  enviarForm(value) {
    console.table(value);

    this._router.navigate(['home']);
  }

}
