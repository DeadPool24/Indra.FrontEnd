import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ClienteComponent} from '../app/componentes/cliente/cliente.component';
import { ClientesComponent } from '../app/componentes/clientes/clientes.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: '**', pathMatch:'full', redirectTo:'clientes' }

];

@NgModule({
imports:[
  RouterModule.forRoot(routes)
],
exports:[
  RouterModule
]
})

export class AppRoutingModule { }
