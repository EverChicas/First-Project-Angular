import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  desactivado = true;
  titulo: String = 'Vacio';
  seleccion: String = "";

  constructor() { }

  log(titulo){
    console.log(titulo);
  }

}
