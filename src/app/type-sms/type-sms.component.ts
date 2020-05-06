import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-type-sms',
  templateUrl: './type-sms.component.html',
  styleUrls: ['./type-sms.component.css']
})
export class TypeSmsComponent {

  constructor() { }
@Output() Sms = new EventEmitter();
ListSms = new Object(); 

  SendsmsN(number){
    this.ListSms["NUM"]=number;
  }
  SendsmsT(msg){
    this.ListSms["MSG"]=msg;
    this.Sms.emit(this.ListSms);
  }

}
