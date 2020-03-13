import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginServiceService } from './login-service.service';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  listUrl = 'http://api.template.megaleios.com/api/v1/Profile/List?limit=30';
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' +  this.user.res
    })
  }
  constructor(
    private http: HttpClient,
    private user: LoginServiceService
  ) { }

  getToken() {
    return localStorage.getItem('token');
  }
  
  listar () {
    return this.http.get<any[]>(`${this.listUrl}`, this.httpOptions);
  }
}
