import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-type-phone',
  templateUrl: './type-phone.component.html',
  styleUrls: ['./type-phone.component.css']
})
export class TypePhoneComponent{

  constructor() { }
  
@Output() Call = new EventEmitter();

  Sendphone(num){
    this.Call.emit(num);
  }

}
