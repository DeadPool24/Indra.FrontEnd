import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteModel } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent  {
  
  cliente: ClienteModel =  new ClienteModel();


  constructor(private clientServ: ClientesService, private route: ActivatedRoute) { }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== 'nuevo'){
      this.clientServ.getCliente(id)
      .subscribe((resp : any)=>{
        this.cliente = resp;
      })
    }
  }




  guardar(f:NgForm)
  {
    if(f.invalid)
    {
      console.log('Formulario no valido'); 
      return;
    }


    Swal.fire({
      title: 'espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    
    let peticion: Observable<any>;



    if(this.cliente.id)
    {
    peticion = this.clientServ.actualizarCliente(this.cliente);
    }
    else
    {
      peticion = this.clientServ.crearCliente(this.cliente);
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.cliente.nombre,
        text: 'Informacion actualizada correctamente',
        icon:  "success",
        allowOutsideClick: false
      }).then(resp=>{
        if(resp.isConfirmed){
        }
      });
    });

  }



}
