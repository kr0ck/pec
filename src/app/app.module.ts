import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular-6-social-login';

// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('2326166300987783')
        },
      ]
  );
  return config;
}


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { UiModule } from './ui/ui.module';
import { LoginComponent } from './views/login/login.component';
import { FuncionarioCadComponent } from './views/funcionario-cad/funcionario-cad.component';
import { FuncionarioListComponent } from './views/funcionario-list/funcionario-list.component';
import { CursoListComponent } from './views/curso-list/curso-list.component';
import { CursoCadComponent } from './views/curso-cad/curso-cad.component';
import { CargoCadComponent } from './views/cargo-cad/cargo-cad.component';
import { FuncaoCadComponent } from './views/funcao-cad/funcao-cad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FuncionarioCadComponent,
    FuncionarioListComponent,
    CursoListComponent,
    CursoCadComponent,
    CargoCadComponent,
    FuncaoCadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UiModule,
    NgbModule,
    SocialLoginModule

  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
