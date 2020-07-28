import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from '@components/Principal/app.component';

import { UserComponent } from '@components/user/user.component';
import { ConsultaComponent } from '@components/consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from '@components/lista/lista.component';
import { User2Component } from '@components/user2/user2.component';
import { ExampleDirective } from './directives/example.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SortbyPipe } from './pipes/sortby.pipe';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ConsultaComponent,
    ListaComponent,
    User2Component,
    ExampleDirective,
    UppercasePipe,
    SortPipe,
    SortbyPipe,
    PaginatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
