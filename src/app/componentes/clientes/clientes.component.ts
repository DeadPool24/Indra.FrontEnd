import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientesService } from '../../services/clientes.service';
import { ClienteModel } from '../../models/cliente.model';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent {

  constructor(private clientesService: ClientesService, private route: ActivatedRoute) { }

  cargando:boolean = false;
  clientes!: ClienteModel[];

  ngOnInit(): void {
   this.cargarCliente();
  }

  cargarCliente(){
    this.cargando=true;
    this.clientesService.getClientes()
    .subscribe(resp => {
      console.log(resp);
      this.clientes = resp;
      this.cargando = false;
     });
  }

  borrarCliente(cliente:ClienteModel, index:number){
    Swal.fire({
      title:`¿Está seguro que desea borrar a ${cliente.nombre}`,
      text:'El registro no se volverá a recuperar',
      icon:"question",
      showConfirmButton:true,
      showCancelButton:true
    }).then(resp=>{
      if(resp.value){
        console.log(cliente);
        this.clientesService.borrarCliente(cliente.id).subscribe();
        this.cargarCliente();
      }
    })
       
  }

}
