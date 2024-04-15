import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username: [null, Validators.required],
      Password: [null, Validators.required],
    });
  }
  checkValidation(input: string) {
    const validation =
      this.loginForm.get(input)?.invalid &&
      (this.loginForm.get(input)?.dirty || this.loginForm.get(input)?.touched);
    return validation;
  }
  login() {
    if (this.loginForm.invalid) return;
  }
}
