import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'

import { ConsultaResponse } from '../Interfaces/ConsulaResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url: string = 'https://pokeapi.co/api/v2/pokemon-form'

  constructor(
    private _http: HttpClient
  ) { }

  consultar():Observable<ConsultaResponse>{
      return this._http.get<ConsultaResponse>(`${this.api_url}/`)
  }

  consultarCustomer(url:string):Observable<ConsultaResponse>{
    return this._http.get<ConsultaResponse>(`${url}`)
  }


}
