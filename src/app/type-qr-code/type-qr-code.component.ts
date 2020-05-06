import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-type-qr-code',
  templateUrl: './type-qr-code.component.html',
  styleUrls: ['./type-qr-code.component.css']
})
export class TypeQrCodeComponent {

TypeText;

@Output() InfoT = new EventEmitter();

  constructor() { }

InfoType(event){
  var type = event.srcElement.id;
  this.TypeText = type;
  this.InfoT.emit(type);
}

}
