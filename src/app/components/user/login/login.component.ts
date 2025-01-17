import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SecurityUtility } from '../../../utility/security-utility.model';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private routerService = inject(Router);

  securityUtility: SecurityUtility;
  user: User | null = new User;

  onSubmit(registrationForm: NgForm) {
    if(registrationForm['email'] !== null && registrationForm['password'] !== null) {
      this.user.setEmail(registrationForm['email']);
      this.user.setLogged(true);
      localStorage.setItem(this.securityUtility?.DATI_UTENTE, JSON.stringify(this.user));
      this.routerService.navigateByUrl('home');
    }
    else {
      console.log("Login fallito.")
    }
  }

  onSignupClick() {
    this.routerService.navigateByUrl('registration');
  }
}
