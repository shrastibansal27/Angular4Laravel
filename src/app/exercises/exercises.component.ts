import { Component, OnInit,Input } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercises.interface';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
  providers : [ExerciseService]
})
export class ExercisesComponent implements OnInit {
    title = "You can add new excercise machines from here";
    @Input() excerciseName:string;
    exercises:Exercise[];
    childValue:string = '';
    searchtext:string = '';
    ExerciseNameArr:Exercise[] = [];
    filterString:string = '';
    footerMessage:string = '';


  constructor(private exerciseservice:ExerciseService) { }

  ngOnInit() {
                this.exerciseservice.getExerciseData()
                .subscribe(
                    (exercises:Exercise[]) => {this.exercises = exercises
                      this.ExerciseNameArr = this.exercises;
                    },
                    (error) =>console.log(error)
                    );


                this.exerciseservice.passFooterMsg.subscribe((footerMsg) => {

                  //this.footerMessage = footerMsg;
                  console.log("footer",footerMsg);

                },
                (error) => console.log(error)
                );


  }

  getValuefromChild(Value:string){
   this.childValue = Value;
  }

  getSearchValue(search:string){
    this.searchtext = search;
  }

  changeName(){
    //this.ExerciseNameArr[0].machine_name = 'MAchine1';
  }

}
