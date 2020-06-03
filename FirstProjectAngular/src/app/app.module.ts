import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/Principal/app.component';

import { UserComponent } from './components/user/user.component';
import { ApiserviceComponent } from './services/apiservice/apiservice.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ApiserviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
