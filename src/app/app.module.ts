import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCadastroInterativoComponent } from './login-cadastro-interativo/login-cadastro-interativo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCadastroInterativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
