import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  itens : Array<any>;
  constructor(
    private listservice: ListService,
    ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    
    let token = window.sessionStorage.getItem('token')
    this.listservice.listar(token)
    .subscribe(
      (res:any) => {
      if (res && !res.erro) {
        this.itens = res.data;
        console.log(this.itens);
      } else {
        alert('Usuário não autorizado')
      }
    });
  }
}
