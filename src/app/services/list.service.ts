import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  listUrl = 'http://api.template.megaleios.com/api/v1/Profile/List?limit=30';
  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any[]>(`${this.listUrl}`);
  }
}
