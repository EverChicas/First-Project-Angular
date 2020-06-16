
import { Component, OnInit } from '@angular/core';
import { Pokemon, ConsultaResponse } from 'src/app/Interfaces/ConsulaResponse';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { report } from 'process';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {



  constructor(
    public _apiService: ApiService,
    public _consulta: UserService
  ) { }

  ngOnInit(): void {
  }

  consulta(){
    this._apiService.consultar().subscribe(response => {
      if(response){
        this._consulta.consulta = response
      }
    })
  }

  irPrevious(){
    this._apiService.consultarCustomer(this._consulta.consulta.previous).subscribe(response =>{
      if(response){
        this._consulta.consulta = response
      }
    })
  }

  irNext(){
    this._apiService.consultarCustomer(this._consulta.consulta.next).subscribe(response =>{
      if(response){
        this._consulta.consulta = response
      }
    })
  }

}
