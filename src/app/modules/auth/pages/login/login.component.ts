import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { NgForm } from '@angular/forms';
import { Credentials } from '../../models/Credentials';
import { Router } from '@angular/router';

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

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  login(form: NgForm){
    console.log('form values', form.value)
    this.authService.login(this.creds)
    .subscribe( response => {
      console.log(response);
      this.router.navigate(['/'])
    })
  }

}
