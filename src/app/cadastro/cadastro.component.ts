import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from '../services/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private cadastro : CadastroService
    ) { }

  

  ngOnInit() {

    this.form = this.fb.group({
      password: [null, [Validators.required, Validators.minLength(5),Validators.maxLength(15)]],
      fullname: [null, [Validators.required]],
      login: [null, [Validators.required, Validators.minLength(5),Validators.maxLength(15)]],
      email: [null, [Validators.required,Validators.email]],
      cpf: [null,Validators.required,Validators.minLength(11),Validators.maxLength(11)],
      phone:[null, Validators.required,Validators.minLength(10),Validators.maxLength(11)]
    });
  }

  onSubmit() {
    this.cadastro.Criar(this.form.value);
  }

}
