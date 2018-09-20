import { Component, OnInit, Injectable,SimpleChanges,OnChanges,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
// import { User } from './User';

@Injectable()
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit,OnChanges {

  @Input() name:string = "Shrasti";

  ngOnChanges(changes:SimpleChanges){
    console.log("onchanges");
    console.log(changes);
  }

  constructor(private _http:Http) { }

  private headers = new Headers({'Content-Type':'application/json'});


  ngOnInit() {
  }

  submitForm(form :NgForm){
    console.log(form.value);
    return this._http.post('http://127.0.0.1:8000/api/user/register',JSON.stringify(form.value),{headers:this.headers})
    .toPromise()
    .then(res =>res.json().data)
    .catch(this.handleError);
  }

  private handleError(error:any):Promise <any>{
    console.error('An error Occured',error);
    return Promise.reject(error.message || error);

  }

}
