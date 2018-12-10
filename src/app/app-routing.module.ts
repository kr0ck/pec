import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { FuncionarioCadComponent } from './views/funcionario-cad/funcionario-cad.component';
import { FuncionarioListComponent } from './views/funcionario-list/funcionario-list.component';
import { CursoCadComponent } from './views/curso-cad/curso-cad.component';
import { CursoListComponent } from './views/curso-list/curso-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'Cadastro_de_Funcionário',
    component: FuncionarioCadComponent
  },
  {
    path: 'Lista_de_Funcionário',
    component: FuncionarioListComponent
  },
  {
    path: 'Cadastro_de_Curso',
    component: CursoCadComponent
  },
  {
    path: 'Lista_dos_Curso',
    component: CursoListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
