import { LoginServiceService } from './../services/login-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup
  constructor(
    private fb: FormBuilder,
    private login: LoginServiceService
  ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      name: [null,Validators.required],
      password: [null,Validators.required]
    });
  }

  onSubmit() {
    this.login.Criar(this.loginForm.value);
  }

  cadastar() {
    
  }
}
