import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-funcionario-cad',
  templateUrl: './funcionario-cad.component.html',
  styleUrls: ['./funcionario-cad.component.css']
})
export class FuncionarioCadComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  enviarForm(value) {
    console.table(value);

    this._router.navigate(['home']);
  }

}
