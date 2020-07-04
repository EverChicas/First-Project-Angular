import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/Principal/app.component';

import { UserComponent } from './components/user/user.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './components/lista/lista.component';
import { User2Component } from './components/user2/user2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ConsultaComponent,
    ListaComponent,
    User2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
