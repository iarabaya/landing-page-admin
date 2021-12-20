import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../auth/login.service';
import { UserData } from '../../../auth/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 userFullName: string = JSON.parse(localStorage.getItem('userFullName') || '');
  // user!: UserData;

  // get user(): UserData{
  //   return this.loginService.user
  // }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
