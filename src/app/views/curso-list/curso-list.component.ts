import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  elements: any = [
    {id: 1, name: 'Curso 1', modalidade: 'Modalidade 1', cargHora: '1'},
    {id: 2, name: 'Curso 2', modalidade: 'Modalidade 2', cargHora: '2'},
    {id: 3, name: 'Curso 3', modalidade: 'Modalidade 3', cargHora: '3'},  ];

  headElements = ['ID', 'Nome', 'Modalidade', 'Carga Horária', ''];



  constructor() { }

  ngOnInit() {
  }

}
