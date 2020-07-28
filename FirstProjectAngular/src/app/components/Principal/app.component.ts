import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaginacionService } from '@services/paginacion.service';
import { UserPaginacion } from '@interface/ListaPagina';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title: String = "Hola mundo";
  signupForm: FormGroup

  lista = [
    {id:1, nombre:'Pacific Rim: Insurrecion', precio:6.89},
    {id:2, nombre:'Black Panther', precio:5.90},
    {id:3, nombre:'El corredor del laberinto: La cura mortal', precio:6.90},
    {id:4, nombre:'Ready Player One', precio:8.60},
    {id:5, nombre:'Vengadores: Infity war', precio:7.40},
    {id:6, nombre:'Deadpool 2', precio:5.30},
    {id:7, nombre:'Los Increibles 2', precio:5.70},
    {id:8, nombre:'Hotel Transilvania 3: Unas vacaciones monstruosas', precio:5.00},
  ]

  constructor(
    private _builder: FormBuilder,
    private _apiPaginacion: PaginacionService
  ) {
    this.signupForm = this._builder.group(
      {
        nombre: [''],
        usuario: ['', Validators.required],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        password: ['', Validators.required]
      }

      )
  }

  datos: UserPaginacion[] = []
  page_size: number = 5
  page_number: number = 1
  pageSizeOptions = [5, 10, 30, 60, 100]

  ngOnInit(): void {
    this._apiPaginacion.getLista().subscribe(datos => this.datos = datos)
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }


  enviar(values){
    console.log(values)
  }

}


// CODIGO PARA @INPUT AND @OUTPUT DE DATA
// export class AppComponent implements OnInit{
//   title = 'FirstProjectAngular';

//   usuarios = []

//   signupForm

//   constructor(
//     private _http: HttpClient
//   ) {}

//   ngOnInit(){
//     this._http.get('http://jsonplaceholder.typicode.com/users')
//     .subscribe((datos: any[]) => this.usuarios = datos)
//   }

  // borrarUsuario(id: number){
  //  this.usuarios = this.usuarios.filter(usuario => usuario.id != id)
  // }

//}
