import { Component, OnInit,ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  // providers: [LoginService]
})
export class LoginFormComponent implements OnInit {
    message:string = '';
    loginResonse:string;
    loggedIn:string;

@ViewChild('login') signupForm:NgForm;  //Another way to access elements having local reference variable

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
   // this.message = this.login.getLoginCredential();
  }

  loginForm(loginForm:NgForm) {

    console.log(this.signupForm);
    this.loginService.loginUser(loginForm.value.email ,loginForm.value.password)
              .subscribe((res) =>{
                  if (res.status === 200) {
                    this.loggedIn = 'true';
                    window.localStorage.setItem('loggedIn',this.loggedIn);
                    this.router.navigate(['/dashboard']);
                  }
                  else{
                    this.router.navigate(['']);
                  }
                });
  }

  resetForm(){
      this.signupForm.reset();
  }

}
