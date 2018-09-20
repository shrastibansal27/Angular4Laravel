import { Component, OnInit } from '@angular/core';
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

  constructor(private login:LoginService, private router:Router) { }

  ngOnInit() {
    // console.log("hi");
   // this.message = this.login.getLoginCredential();
    // console.log(this.message);
  }

  loginForm(loginForm:NgForm) {

    this.login.loginUser(loginForm.value.email ,loginForm.value.password)
              .map( res => res.json())
            //   .do(res => {
            //   if(res.status === 200)
            //    //  this.loginResonse => res.status;
            //    //this.router.navigate(['/dashboard']);
            //    //console.log(this.loginResonse);

            // })
              .subscribe(
                (res) => this.loginResonse = res
               // this.loginResonse => this.res
               // console.log('Neha',this.loginResonse)

              );

    console.log(this.loginResonse);
  }

}
