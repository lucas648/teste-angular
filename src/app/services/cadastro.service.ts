import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  userUrl = 'http://api.template.megaleios.com/api/v1/Profile/Register';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }
  constructor(private http: HttpClient) { }

  Criar (user) {
    this.http
    .post(this.userUrl, JSON.stringify(user), this.httpOptions)
    .subscribe()
  }
}
