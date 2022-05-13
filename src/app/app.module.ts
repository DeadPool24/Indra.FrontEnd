import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
