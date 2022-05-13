import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteModel } from '../models/cliente.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url:string = "https://localhost:44309/api";
  constructor( private http : HttpClient) { }


  getCliente(id: any){
    return this.http.get(`${this.url}/clientes/${id}`)
  }

  getClientes(){
    return this.http.get(`${this.url}/clientes`)
          .pipe(
            map(this.crearArreglo)
          );
  }

  private crearArreglo(clienteObj:any){

    const clientes: ClienteModel[] = [];
    if(clienteObj === null){return  [];}
    Object.keys(clienteObj).forEach(key =>{
      
      const cliente: ClienteModel = clienteObj[key];
      clientes.push(cliente);

    })
    return clientes;
  }


  crearCliente(cliente:ClienteModel){
    return this.http.post(`${this.url}/clientes`,cliente)
          .pipe(
            map((resp:any)=>{
              cliente.id = resp.name;
            })
          ); 

  }

  actualizarCliente(cliente:ClienteModel){

    const clienteTemp = {
      ...cliente
    };
    return this.http.put(`${this.url}/clientes`,clienteTemp)
          .pipe(
            map((resp:any)=>{
              clienteTemp.id = resp.name;
            })
          ); 

  }


  borrarCliente(id: string){
    return this.http.delete(`${this.url}/clientes/${id}`)
  }


}
