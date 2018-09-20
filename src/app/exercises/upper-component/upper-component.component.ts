import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Exercise } from '../../exercises.interface';

@Component({
  selector: 'app-upper-component',
  templateUrl: './upper-component.component.html',
  styleUrls: ['./upper-component.component.css']
})
export class UpperComponentComponent implements OnInit {

  selectedValue = '1';
  searchfield:string = '';
  @Input() ExerciseName:Exercise[] = [];

  constructor() { }

  ngOnChanges(){
    //alert();

  }

  ngOnInit() {

  }




  @Output() onSelectValueChange:EventEmitter<string> = new EventEmitter();

  @Output() searchValue:EventEmitter<string> = new EventEmitter();


  getChangedValue(){
    this.onSelectValueChange.emit(this.selectedValue);
  }

  getSearchText(){
   this.searchValue.emit(this.searchfield);
  }



}
