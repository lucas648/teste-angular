import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  loginUrl = 'http://api.template.megaleios.com/api/v1/Profile/Token'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  Criar(user) {
    this.http
    .post(this.loginUrl, JSON.stringify(user), this.httpOptions)
    .subscribe()
  }
}
