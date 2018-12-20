import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';


@Component({
  selector: 'app-funcao-cad',
  templateUrl: './funcao-cad.component.html',
  styleUrls: ['./funcao-cad.component.css']
})
export class FuncaoCadComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  enviarForm(value) {
    console.table(value);

    this._router.navigate(['home']);
  }

}
