import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent{

  isLogged:boolean = false;
  nivel:number = 5;

  constructor() { }

}
