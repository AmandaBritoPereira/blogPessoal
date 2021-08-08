import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

// >>> Rotas do site
const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

{path: 'entrar', component: EntrarComponent},
{path: 'cadastrar', component:CadastrarComponent},
{path: 'inicio', component: InicioComponent}

]; 
// <<< Rotas do site

// >>> Bibliotecas das rotas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// <<< Bibliotecas das rotas

export class AppRoutingModule { }
