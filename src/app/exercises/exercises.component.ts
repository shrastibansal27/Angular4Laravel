import { Component, OnInit,Input,ElementRef,ViewChild,ViewChildren,ContentChild,ContentChildren,AfterContentInit,AfterViewInit,QueryList } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercises.interface';
import {UpperComponentComponent} from './upper-component/upper-component.component';
import {ActivatedRoute,Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
  providers : [ExerciseService]
})
export class ExercisesComponent implements OnInit,AfterContentInit,AfterViewInit {
    title = "You can add new excercise machines from here";
    @Input() excerciseName:string;
    exercises:Exercise[];
    childValue:string = '';
    searchtext:string = '';
    ExerciseNameArr:Exercise[] = [];
    filterString:string = '';
    footerMsg:string = 'This is a footer msg';
    childComTitle:string = '';
    condition = false;
    exerciseId:string= '';
    exerciseIdDelete:string= '';

    //We can access native DOM elements that have a template reference variable

    @ViewChild('exercisetable') exercisetable :ElementRef;

    //parent componnet can access the child component

    @ViewChild(UpperComponentComponent) child:UpperComponentComponent;
    @ViewChildren(UpperComponentComponent) childComp:QueryList<UpperComponentComponent>;
    @ContentChild(UpperComponentComponent) projectedcontent:UpperComponentComponent;
    @ContentChildren(UpperComponentComponent) projectedcontents:UpperComponentComponent;

  constructor(private exerciseservice:ExerciseService,private activatedroute:ActivatedRoute,private router:Router,location: Location) {

    console.log("url",location.path());

   }

  ngOnInit() {
    let url = this.router.url;

                this.exerciseservice.getExerciseData()
                .subscribe(
                    (exercises:Exercise[]) => {this.exercises = exercises
                      this.ExerciseNameArr = this.exercises;
                    },
                    (error) =>console.log(error)
                    );

                this.activatedroute.params.subscribe(params =>{

                    this.exerciseId = params['id'];
                    console.log("exerciseId",this.exerciseId);
                });

                this.activatedroute.queryParams.subscribe(params =>{
                    this.exerciseIdDelete = params['id'];
                    console.log("deleteId",this.exerciseIdDelete);
                });




  }

  ngAfterContentInit(){

  }

  ngAfterViewInit(){
    //this.exercisetable.nativeElement.innerText = "LIST OF EXERCISES";
    this.childComTitle = this.child.getUpperComponentTitle();

    let jokes: UpperComponentComponent[] = this.childComp.toArray();


    //jokes.forEach((res)=>{
      console.log('res',jokes[0]);
    //});
        console.log(jokes[0].MachineList);
    this.childComp.toArray().forEach((compRef,index,Arr) => {
      compRef.selectedValue = "2";
console.log("Hi",compRef.ExerciseName);
      //compRef.ExerciseName.forEach((ExerciseName) =>{

        compRef.ExerciseName.map((data)=>{console.log("bye",data)});

      //});

    });

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
  passFooterMsgtoUpper(){
    //alert(this.footerMsg);
    this.exerciseservice.getFooterMsg(this.footerMsg);
  }

  createExercise(){
    this.router.navigate(['/exercises/create']);
  }

}
