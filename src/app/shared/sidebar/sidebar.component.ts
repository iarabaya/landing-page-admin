import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  email: string | null = localStorage.getItem('email');
  constructor(private router: Router) { }

  logout(){
    localStorage.clear()
    this.router.navigate(['./auth']);
  }


}
