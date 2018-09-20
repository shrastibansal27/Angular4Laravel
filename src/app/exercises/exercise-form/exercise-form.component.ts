import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent implements OnInit {


  @Input() formTitle:string;

  formname:string;
  constructor() { }

  ngOnInit() {
  }


  getFormData(f){
    console.log("Hi",f);
    this.formname = f.value.machine_name;
  }

  formData($event){
    console.log("test",$event);
  }

}
