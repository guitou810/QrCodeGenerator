import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-type-url',
  templateUrl: './type-url.component.html',
  styleUrls: ['./type-url.component.css']
})
export class TypeUrlComponent {
  constructor() { }

  @Output() Url = new EventEmitter();

  Sendurl(url){
    this.Url.emit(url);
  }

}
