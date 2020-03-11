import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  loginUrl = 'http://api.template.megaleios.com/api/v1/Profile/Token'
  constructor(private http: HttpClient) { }

  Criar(user) {
    this.http
    .post(this.loginUrl, JSON.stringify(user))
    .subscribe()
  }
}
