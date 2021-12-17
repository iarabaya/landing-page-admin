import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide = true;

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(  private router: Router){}
  // private registerService : any
  
  user: UserData = {
    email: '',
    clientId: 0,
    fullName: '',
    address: '',
    cellPhone: ''
  }

  logIn( formDirective: FormGroupDirective ){
    this.user = this.registerForm.value;

    // this.loginService.login(this.user.email, this.user.password).subscribe( res => {
    //   console.log(res)
    //   if(res.id){
    //     localStorage.setItem('email', this.user.email);
    //     localStorage.setItem('roleId', JSON.stringify(res.rol.id));
    //     localStorage.setItem('userId', JSON.stringify(res.id));
    //     this.router.navigateByUrl('dashboard/triplist');
    //   }
    // },
    // error => {
    //   let msj = `${error.error}, status: ${error.status}`
    //   // Swal.fire('Error', msj ,'error');
    // })

    formDirective.resetForm();
    this.registerForm.reset();
  }

}
