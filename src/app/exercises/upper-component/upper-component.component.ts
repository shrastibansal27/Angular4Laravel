import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Exercise } from '../../exercises.interface';
import { ExerciseService } from '../../exercise.service';

@Component({
  selector: 'app-upper-component',
  templateUrl: './upper-component.component.html',
  styleUrls: ['./upper-component.component.css'],
  providers: [ExerciseService]
})
export class UpperComponentComponent implements OnInit {

  selectedValue = '1';
  searchfield:string = '';
  @Input() ExerciseName:Exercise[] = [];
  MachineList = [];
  Footer:string = '';
  title:string = "This is upper class title";

  @Output() onSelectValueChange:EventEmitter<string> = new EventEmitter();

  @Output() searchValue:EventEmitter<string> = new EventEmitter();

  constructor(private exerciseservice: ExerciseService) {


  }

  ngOnChanges(){
    //alert();
  }

  ngOnInit() {
    this.exerciseservice.passFooterMsg.subscribe((msg:string) => alert(msg));
    this.exerciseservice.getMachineList().subscribe((response) => {this.MachineList = response});
  }
  getChangedValue(){
    this.onSelectValueChange.emit(this.selectedValue);
  }

  getSearchText(){
   this.searchValue.emit(this.searchfield);
  }

  getUpperComponentTitle(){
    return this.title;
  }



}
