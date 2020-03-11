import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ListService } from './services/list.service';
import { LoginServiceService } from './services/login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
      ListService,
      LoginServiceService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
