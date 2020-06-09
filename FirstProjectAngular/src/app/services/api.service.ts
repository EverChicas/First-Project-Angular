import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'

import { ConsultaResponse } from '../Interfaces/ConsulaResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url: string = 'https://api.covid19api.com'

  constructor(
    private _http: HttpClient
  ) { }

  consultar():Observable<ConsultaResponse>{
      return this._http.get<ConsultaResponse>(`${this.api_url}/summary`)
  }

}
