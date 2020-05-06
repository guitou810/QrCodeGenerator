import { Component } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import {CreateUrlService } from './create-url.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiRequestService,CreateUrlService]
})
export class AppComponent {

  title = 'QrCode';
  urlSafe: SafeResourceUrl;
  Blob;
  site;
  selectURL = "none";
  selectTEXT = "none";
  selectCarte = "none";
  selectSms = "none";
  selectPhone = "none";
  selectMaps = "none";
  selectCal = "none";
  selectMail = "none";
  selectWifi = "none";

  constructor(private HttpClientService:ApiRequestService,private CreateUrlService:CreateUrlService,private _sanitizer:DomSanitizer){
  };

getSafeUrl(API) {
   var url = this.HttpClientService.execute(API);
   this.Blob = url;
}

safe(val){
 this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl(val);
}

Url(url){
  var formurl = this.CreateUrlService.Apiurl(url);
  this.getSafeUrl(formurl);
}
Txt(txt){
  var texte = this.CreateUrlService.Apiurl(txt);
  this.getSafeUrl(texte);
}
Carte(carte){
  var vcardte = this.CreateUrlService.ApiCarte(carte);
  this.getSafeUrl(vcardte);
}
Sms(sms){
  var vsms = this.CreateUrlService.ApiSms(sms);
  this.getSafeUrl(vsms);
}
Call(num){
  var vnum= this.CreateUrlService.ApiCall(num);
  this.getSafeUrl(vnum);
}
Map(map){
  var vmap = this.CreateUrlService.ApiMap(map);
  this.getSafeUrl(vmap);
}
Calend(calend){
  var vcalend = this.CreateUrlService.ApiCalend(calend);
  this.getSafeUrl(vcalend);
}
Mail(mail){
  var vmail = this.CreateUrlService.ApiMail(mail);
  this.getSafeUrl(vmail);
}
Wifi(wifi){
  var vwifi = this.CreateUrlService.ApiWifi(wifi);
  this.getSafeUrl(vwifi);
}

InfoT(Type){  
this.selectURL = "none";
this.selectTEXT = "none";
this.selectCarte = "none";
this.selectSms = "none";
this.selectPhone = "none";
this.selectMaps = "none";
this.selectCal = "none";
this.selectMail = "none";
this.selectWifi = "none";
  switch(Type){
    case "URL":
      this.selectURL = "block";
      this.urlSafe ="";
    break;
    case "TEXTE":
      this.selectTEXT = "block";
      this.urlSafe ="";
    break;
    case "CARTE":
      this.selectCarte = "block";
      this.urlSafe ="";
    break;
    case "SMS":
      this.selectSms = "block";
      this.urlSafe ="";
    break;
    case "PHONE":
      this.selectPhone = "block";
      this.urlSafe ="";
    break;
    case "GEOLOCALISATION":
      this.selectMaps = "block";
      this.urlSafe ="";
    break;
    case "CALENDRIER":
      this.selectCal = "block";
      this.urlSafe ="";
    break;
    case "EMAIL":
      this.selectMail = "block";
      this.urlSafe ="";
    break;
    case "WIFI":
      this.selectWifi = "block";
      this.urlSafe ="";
    break;
  }
  console.log(Type);
}


}
