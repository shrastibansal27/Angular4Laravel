import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    isLogged = false;
    loggedIn:boolean =false;
    validate:string = '';


    login(){
         this.loggedIn = true;
    }

    logout(){
       window.localStorage.removeItem('loggedIn');
    }

    isAuthenticate(){

        this.validate = window.localStorage.getItem('loggedIn')
        console.log("auth",this.validate);
        const promise = new Promise((resolve,reject) =>{

            setTimeout(()=>{resolve(this.validate),2000});
        });

        return promise;
    }



}
