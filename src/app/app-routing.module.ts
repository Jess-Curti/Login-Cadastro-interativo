import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCadastroInterativoComponent } from './login-cadastro-interativo/login-cadastro-interativo.component';

const routes: Routes = [
  {path:'login-cadastro-interativo', component: LoginCadastroInterativoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
