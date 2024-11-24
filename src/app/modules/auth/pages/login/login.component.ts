import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { NgForm } from '@angular/forms';
import { Credentials } from '../../models/creds';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  creds: Credentials = {
    email : '',
    password : ''
  };

  constructor(private authService: AuthServiceService) { }


  ngOnInit(): void {
  }

  login(form: NgForm){
    console.log('form values', form.value)
    this.authService.login(this.creds)
    .subscribe( response => {
      console.log(response);
    })
  }

}
