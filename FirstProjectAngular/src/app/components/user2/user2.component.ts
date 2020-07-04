import { Component, Input, Output, EventEmitter, Host } from '@angular/core';
import { AppComponent } from '../Principal/app.component';


@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component {

  constructor(
    @Host() private _app: AppComponent
  ) { }

  @Input('data') user2: any

  // @Output() borrar = new EventEmitter<number>()

  BorrarUsuario(id: number){
    // this.borrar.emit(id)
    this._app.usuarios = this._app.usuarios.filter(usuario => usuario.id != id)
  }

}
