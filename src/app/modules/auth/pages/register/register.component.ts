import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { RegisterData } from '../../models/RegisterData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerData: RegisterData = {};
  public rePassword: string = '';

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(form: NgForm){
    console.log('form values', form.value)

    if(!this.checkPassword()){
      alert('Las contraseñas no coinciden');
      return;
    }


    this.authService.register(this.registerData)
    .subscribe( response => {
      console.log(response);
      alert('Usuario creado exitosamente');
      this.router.navigate(['/auth/login']);
  
    })
  }

  checkPassword() : boolean{
    if(this.rePassword == this.registerData.password){
      return true;
    }
    return false;
  }
  
  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

}
