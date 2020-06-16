import { Injectable } from '@angular/core';
import { ConsultaResponse } from '../Interfaces/ConsulaResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  consulta: ConsultaResponse

  constructor() { }
}
