import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse, UserData } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user!: UserData;

  constructor(private http: HttpClient) { }

  get user(){
    return {...this._user}
  }


  login(email: string, password: string){
    const url = `api/Login?email=${email}&password=${password}`;

    return this.http.get<LoginResponse>(url)

  }

}
