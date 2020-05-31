import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  contador = 0;

  constructor() {
    console.log("Componente creandoce")
  }

  ngOnInit(){
    console.log("Componente creado")
  }

  aumentar() {
    this.contador++;
  }

}
