import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-maps',
  templateUrl: './type-maps.component.html',
  styleUrls: ['./type-maps.component.css']
})
export class TypeMapsComponent {

  constructor() { }
  @Output() Map = new EventEmitter();

ListMap = new Object();

  SendLat(lat){
    this.ListMap["LAT"]=lat;
  }
  SendLatS(S){
    if(S){
      var lat = this.ListMap["LAT"]
      this.ListMap["LAT"] = -lat;
      this.Map.emit(this.ListMap);
    }else{
      this.Map.emit(this.ListMap);
    }
  }
  SendLong(lon){
    this.ListMap["LON"]=lon;
    this.Map.emit(this.ListMap);
  }

  SendLongW(W){
    if(W){
      var lon = this.ListMap["LON"]
      this.ListMap["LON"] = -lon;
      this.Map.emit(this.ListMap);
    }else{
      this.Map.emit(this.ListMap);
    }
  }

}
