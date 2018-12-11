import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  elements: any = [
    {id: 1, name: 'Fulano 1', cargo: 'Cargo 1', funcao: 'Função 1'},
    {id: 2, name: 'Fulano 2', cargo: 'Cargo 2', funcao: 'Função 2'},
    {id: 3, name: 'Fulano 3', cargo: 'Cargo 3', funcao: 'Função 3'},  ];

  headElements = ['Matricula', 'Nome', 'Cargo', 'Função', ''];


  constructor() { }

  ngOnInit() {
  }

}
