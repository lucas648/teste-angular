import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginServiceService } from './login-service.service';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  listUrl = 'http://api.template.megaleios.com/api/v1/Profile/List?limit=30';

  constructor(
    private http: HttpClient,
    private user: LoginServiceService
  ) { }

  listar (token) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.get<any[]>(`${this.listUrl}`,{headers: httpOptions.headers});
  }
}
