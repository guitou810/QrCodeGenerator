import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http:HttpClient,private _sanitizer:DomSanitizer ) { }

  //private url:string="http://api.qrserver.com/v1/create-qr-code/?data=Dax Guillaume&size=100x100"

execute(API){
    var listB = [];
    this.http.get(API, { responseType: 'blob'}).subscribe(blob => {
      var urlCreator = window.URL;
      var BLOB = urlCreator.createObjectURL(blob);
      listB.push(BLOB.toString());
      console.log(listB);
    })
    return listB;
  }
}
