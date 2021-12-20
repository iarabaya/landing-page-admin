import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse, UserData } from './user.interface';
import { tap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user: UserData | undefined;

  get user(): UserData{
    return {...this._user!}
  }

  constructor(private http: HttpClient) { }

  verificarAutenticacion(): Observable<boolean>{
    if( !localStorage.getItem('email') ){
      return of(false);
    }
    return of(true);
  }

  login(email: string, password: string){
    const url = `api/Login?email=${email}&password=${password}`;

    return this.http.get<LoginResponse>(url)
    .pipe(
      tap( res => this._user = {
        clientId: res.id,
        email: res.email,
        fullName: res.fullName,
        address: res.address,
        cellPhone: res.cellPhone
      }),
      tap( res => localStorage.setItem('email', res.email))
    );
  }


  logout(){
    this._user = undefined;
  }

}
