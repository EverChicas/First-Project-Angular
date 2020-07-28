import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPaginacion } from '@interface/ListaPagina'

@Injectable({
  providedIn: 'root'
})
export class PaginacionService {

  constructor(
    private http: HttpClient
  ) { }

  getLista(): Observable<UserPaginacion[]>{
    return this.http.get<UserPaginacion[]>('http://jsonplaceholder.typicode.com/todos')
  }
}

