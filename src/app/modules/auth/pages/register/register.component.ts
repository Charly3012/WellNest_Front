import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { RegisterData } from '../../models/RegisterData';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerData: RegisterData = {};
  public rePassword: string = '';
  private debounceRegister = false; //Control to avoid multiple sends at register post

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(form: NgForm){
    console.log('form values', form.value)

    if(this.checkPassword() == 1){
      alert('Las contraseñas no coinciden');
      return;
    }

    if(this.checkPassword() == 2){
      alert('La contraseña debe ser de almenos 8 caracteres');
      return;
    }

    if(!this.checkEmail(this.registerData.email!)){
      alert('El email introducido no es valido');
      return
    }

    this.authService.register(this.registerData)
    .subscribe( response => {
      console.log(response);
      alert('Usuario creado exitosamente');
      this.router.navigate(['/auth/login']);
    },
    (errorResponse) => {
      //Catch errors provided by backend
      const errorList : any[] = errorResponse.error.Errors;
      errorList.forEach(element => {
        alert('Error en el campo ' + element.Field + ', ' + element.Error);
      });

    },
    () => {
      //Allow clicks after 1 second
      setTimeout(() => this.debounceRegister = false, 1000);
    }
  )
  }

  //Validations in register form
  checkPassword() : number {
    if(this.registerData.password!.length < 8){
      //Password is not al least 8 characters length
      return 2;
    }

    if(this.rePassword != this.registerData.password){
      //password and re-password are differents
      return 1;
    }
    return 0;
  }

  checkEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  }

  //End validations section


  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

}
