import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  userUrl = 'http://api.template.megaleios.com/api/v1/Profile/List?limit=30';
  constructor(private http: HttpClient) { }

  Criar (user) {
    this.http
    .post('http://api.template.megaleios.com/api/v1/Profile/Register', JSON.stringify(user))
    .subscribe()
  }
}
