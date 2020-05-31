import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  contador = 0;
  arr = [1,2,3,4,5,6,7,8,9];

  constructor() {
    console.log("Componente creandoce")
  }

  ngOnInit(){
    console.log("Componente creado")
  }

  aumentar() {
    this.contador++;
  }

  add(){
    this.arr.push((Math.random()*10));
  }

}
