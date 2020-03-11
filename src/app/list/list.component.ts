import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  itens : Array<any>;
  constructor(private listservice: ListService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.listservice.listar().subscribe(dados => this.itens = dados);
  }
}
