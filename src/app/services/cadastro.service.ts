import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  userUrl = 'http://api.template.megaleios.com/api/v1/Profile/Register';
  constructor(private http: HttpClient) { }

  Criar (user) {
    this.http
    .post(this.userUrl, JSON.stringify(user))
    .subscribe()
  }
}
