import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListComponent } from './list/list.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';

const APP_route: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'lista', component: ListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_route);