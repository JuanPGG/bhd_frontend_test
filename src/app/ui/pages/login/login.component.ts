import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { LoginUseCase } from "../../../domain/login/usecases/login.usecase";
import { Token } from "../../../domain/login/models/login.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private _loginUseCase: LoginUseCase, private router: Router) {
    this.formulario = this.fb.group({
      document: ["", [Validators.required, Validators.minLength(6)]],
      password: ["", [Validators.required, Validators.minLength(4)]],
      rememberUsername: [false],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (!this.formulario.valid) return false;
    this._loginUseCase
      .login({
        userId: this.formulario.value.document,
        password: this.formulario.value.password,
      })
      .subscribe((token) => {
        this.setSessionStorage(token)
        this.router.navigate(["products"]);
      });
  }

  setSessionStorage(token: Token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }
}
