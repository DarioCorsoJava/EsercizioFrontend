import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityUtility } from './../../utility/security-utility.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private routerService = inject(Router);
  private securityUtility: SecurityUtility;
  datiUtente: User = new User;

  ngOnInit(): void {
    this.datiUtente = JSON.parse(localStorage.getItem(this.securityUtility?.DATI_UTENTE));

    if(this.datiUtente === null || !this.datiUtente.isLogged) {
      this.routerService.navigateByUrl('login');
    }
  }

  clearStorage() {
    localStorage.clear();
    this.routerService.navigateByUrl('login');
  }
}
