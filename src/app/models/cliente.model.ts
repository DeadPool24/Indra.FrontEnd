export class ClienteModel{
    id!: any;
    nombre!: string;
    dni!: string;
    fechaRegistro!: string;
    estado: boolean;

    constructor(){
        this.estado = true;
    }
}