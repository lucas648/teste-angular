import { LoginServiceService } from './../services/login-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup

  constructor(
    private fb: FormBuilder,
    private login: LoginServiceService,
    private route: Router
  ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      login: [null,Validators.required],
      password: [null,Validators.required]
    });
  }

  onSubmit() {
    this.login.Criar(this.loginForm.value)
    .subscribe(
      (res) => {
      if (res && !res.erro) {
        this.route.navigate(['/lista'])
      } else {
        alert('entre com um usuário válido')
      }
    });
    console.log(this.loginForm.value);
  }
}
