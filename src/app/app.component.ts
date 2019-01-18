import { Component,Input } from '@angular/core';
import {OnInit,OnChanges,SimpleChanges,DoCheck} from '@angular/core';
import {AuthService} from './auth.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck {
  title = 'app';
  authenticate:string;

  @Input('fullName') name:string = "Shrasti";

  constructor(private authService:AuthService,private router:Router){


    if (window.localStorage.getItem('loggedIn') == null) {
      this.authenticate = 'false';
    }
    else{
      this.authenticate = window.localStorage.getItem('loggedIn');
    }
    console.log("check",this.authenticate);
  }

  ngOnChanges(changes:SimpleChanges){
   // alert();
   // console.log("onchanges");
    //console.log(changes);
  }

  ngOnInit(){
   //console.log("oninit");
  }

  ngDoCheck(){
  //console.log("ngDoCheck");
  }

  ngAfterContentInit(){
   // console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(){
   // console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){
   //console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
   //console.log("ngAfterViewChecked");
  }

  ngDestroy(){
   //console.log("ngDestroy");
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

}
