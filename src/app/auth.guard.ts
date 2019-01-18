import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    //This Interface must have canActivate method and accepts two arguments next and state.It returns Observable or promise or boolean

    constructor(private authService:AuthService,private router:Router){};

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticate()
    .then((authenticated:boolean) => {

        if (authenticated) {
            return true;
        }
        else{
            this.router.navigate([""]);
        }

    });

  }
}
