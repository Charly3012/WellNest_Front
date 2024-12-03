import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { Credentials } from '../../models/Credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  creds: Credentials = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  login(form: NgForm) {
    console.log('form values', form.value)
    this.authService.login(this.creds)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/social/home'])
      })
  }
  navigateToRegister() {
    this.router.navigate(['/auth/register']);
  }


}

