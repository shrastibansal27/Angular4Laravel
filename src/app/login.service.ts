import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }


  loginUser(email: string, password: string){
    return this.http.post("http://127.0.0.1:8000/api/user/login",
        {email:email, password:password},
        {headers: new Headers({'X-Requested-With':'XMLHttpRequest'})})
         .map((res) =>res.json());
  }

}
