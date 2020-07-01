import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FirstProjectAngular';

  usuarios = []

  constructor(
    private _http: HttpClient
  ) {}

  ngOnInit(){
    this._http.get('http://jsonplaceholder.typicode.com/users')
    .subscribe((datos: any[]) => this.usuarios = datos)
  }

}
