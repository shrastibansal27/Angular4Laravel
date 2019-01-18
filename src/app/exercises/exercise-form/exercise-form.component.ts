import { Component, OnInit,Input } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ExerciseService} from './../../exercise.service';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent implements OnInit {

exerciseForm:FormGroup;



  @Input() formTitle:string;

  formname:string;
  constructor(private exerciseService:ExerciseService) { }

  ngOnInit() {
    this.exerciseForm = new FormGroup({

      'exerciseData' : new FormGroup({
        machine_name : new FormControl('',[Validators.required,this.customValidation.bind(this)]),
        machine_code : new FormControl('',[Validators.required])
      })

    })
  }


  getFormData(f){
    console.log("Hi",f);
    this.formname = f.value.machine_name;
  }

  formData($event){
    console.log("test",$event);
  }

  create(){
    console.log(this.exerciseForm);
  }
/* Custom Validation to check first letter is capital or not*/
  customValidation(control:FormControl):{[s:string]:boolean}{
    if (control.value.charAt(0) !== control.value.charAt(0).toUpperCase()) {
      return {'invalidExerciseName':true};
    }
    return null;
  }

  // customAsyncValidation(control:FormControl):{}

}
