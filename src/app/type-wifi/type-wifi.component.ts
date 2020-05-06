import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-wifi',
  templateUrl: './type-wifi.component.html',
  styleUrls: ['./type-wifi.component.css']
})
export class TypeWifiComponent {

  constructor() { }

  @Output() Wifi = new EventEmitter();

ListWifi = new Object();

  SendEncr(encr){
    this.ListWifi["ENCR"]=encr;
  }
  SendSSID(ss){
    this.ListWifi["SS"]=ss;
  }
  SendPass(pass){
    this.ListWifi["PASS"]=pass;
    this.Wifi.emit(this.ListWifi);
  }
}
