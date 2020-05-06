import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-cal',
  templateUrl: './type-cal.component.html',
  styleUrls: ['./type-cal.component.css']
})
export class TypeCalComponent {

  constructor() { }
  @Output() Calend = new EventEmitter();
ListCalendrier = new Object();

  SendDesc(desc){
    this.ListCalendrier["DESC"]=desc;
  }
  SendFrom(dateD){
    this.ListCalendrier["DATED"]=dateD;

  }
  SendTo(dateF){
    this.ListCalendrier["DATEF"]=dateF;
    this.Calend.emit(this.ListCalendrier);
  }
}
