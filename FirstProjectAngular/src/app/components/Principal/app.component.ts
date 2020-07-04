import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  signupForm: FormGroup

  constructor(
    private _builder: FormBuilder
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
