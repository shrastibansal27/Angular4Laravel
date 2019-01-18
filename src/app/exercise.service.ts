import { Injectable,Output,EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class ExerciseService {

  constructor(private http:Http) { }

  getExerciseData():Observable<any> {
          return this.http.get('http://127.0.0.1:8000/api/exercises/list',  {headers: new Headers({'X-Requested-With':'XMLHttpRequest'})})
              .map(
                  (res:Response) => { return res.json();}

                  );
  }

  getMachineList():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/machine/list',{headers: new Headers({
        'X-Requested-With':'XMLHttpRequest'
    })})
    .map(
        (res:Response) =>{return res.json();}
        );
  }


 passFooterMsg:EventEmitter<string> = new EventEmitter();


 getFooterMsg(message:string){
    this.passFooterMsg.emit(message);
 }




}
