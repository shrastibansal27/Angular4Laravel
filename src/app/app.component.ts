import { Component,Input } from '@angular/core';
import {OnInit,OnChanges,SimpleChanges,DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck {
  title = 'app';

  @Input('fullName') name:string = "Shrasti";

  constructor(){
    //console.log("constructor");
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

}
