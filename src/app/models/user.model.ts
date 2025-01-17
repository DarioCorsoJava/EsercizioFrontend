export class User {
  _id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  sex: boolean;
  isLogged: boolean;

  constructor() {}

  setEmail(email: string) {
    this.email = email;
  }

  setLogged(isLogged: boolean) {
    this.isLogged = isLogged;
  }
}
