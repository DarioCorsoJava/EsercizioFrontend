import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/user/registration/registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full', component: HomeComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'home', redirectTo: 'home', component: HomeComponent},
  {path: 'login', redirectTo: 'login', component: LoginComponent},
  {path: 'registration', redirectTo: 'registration', component: RegistrationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
