import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
    ) { }

  

  ngOnInit() {

    this.form = this.fb.group({
      passwod: [null, [Validators.required, Validators.minLength(5),Validators.maxLength(15)]],
      fullname: [null, [Validators.required]],
      login: [null, [Validators.required, Validators.minLength(5),Validators.maxLength(15)]],
      email: [null, [Validators.required,Validators.email]],
      cpf: [null,Validators.required,Validators.minLength(11),Validators.maxLength(11)],
      phone:[null, Validators.required,Validators.minLength(10),Validators.maxLength(11)]
    });
  }

  onSubmit() {
    this.http
    .post('http://api.template.megaleios.com/api/v1/Profile/Register', JSON.stringify(this.form.value))
    .subscribe()
  }

}
