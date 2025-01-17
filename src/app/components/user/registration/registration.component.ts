import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  private routerService = inject(Router);

  datiRegistrazione = {};

  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,16}$/)]),
    confirmPassword: new FormControl('', [Validators.required]),
    sex: new FormControl('', [Validators.required]),
    termsOfService: new FormControl(false, [Validators.requiredTrue])
  });

  onLoginClick() {
    this.routerService.navigateByUrl('login');
  }

  onSubmit() {
    this.datiRegistrazione = {nome: this.registrationForm.controls.name.value,
                              surname: this.registrationForm.controls.surname.value,
                              email: this.registrationForm.controls.email.value,
                              password: this.registrationForm.controls.password.value,
                              confirmPassword: this.registrationForm.controls.confirmPassword.value,
                              termsOfService: this.registrationForm.controls.termsOfService.value}

    this.routerService.navigateByUrl('login');
  }
}
