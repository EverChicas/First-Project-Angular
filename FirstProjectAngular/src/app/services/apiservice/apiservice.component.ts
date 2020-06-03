import { Component } from '@angular/core';

@Component({
  selector: 'app-apiservice',
  templateUrl: './apiservice.component.html',
  styleUrls: ['./apiservice.component.css']
})
export class ApiserviceComponent {

  desactivado = true;
  titulo: String = 'Vacio';
  seleccion: String = "";

  constructor() { }

  log(titulo){
    console.log(titulo);
  }

}
