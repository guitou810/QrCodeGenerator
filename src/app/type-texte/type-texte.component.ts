import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-type-texte',
  templateUrl: './type-texte.component.html',
  styleUrls: ['./type-texte.component.css']
})
export class TypeTexteComponent {

  constructor() { }

@Output() Txt = new EventEmitter();

  Sendtext(txt){
    this.Txt.emit(txt);
  }
}
