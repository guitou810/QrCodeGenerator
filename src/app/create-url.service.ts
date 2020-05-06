import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUrlService {

  constructor() { }
  Apiurl(Furl){
    var api = "http://api.qrserver.com/v1/create-qr-code/?data="
    var apiurl = Furl.replace("/","%");
    var urlapi = api + apiurl + "&size=100x100";
    return urlapi;
  }
  ApiSms(sms){
    var api = "http://api.qrserver.com/v1/create-qr-code/?data="
    var num = "SMSTO%3A"+sms.NUM;
    var msg = "%3A"+sms.MSG;
    return api+num+msg+"&size=220x220&margin=0";
  }
  ApiCall(num){
    var api = "http://api.qrserver.com/v1/create-qr-code/?data="
    var numero = "tel%3A"+num;
    return api+numero+"&size=220x220&margin=0";
  }
  ApiMap(map){
    var api = "http://api.qrserver.com/v1/create-qr-code/?data="
    var lat = "geo%3A"+map.LAT;
    var lon = "%2C"+map.LON+"%2C400";
    return api+lat+lon+"&size=220x220&margin=0";
  }
  ApiCalend(calend){
    var api = "http://api.qrserver.com/v1/create-qr-code/?data="
    var desc = "BEGIN%3AVEVENT%0ASUMMARY%3A"+calend.DESC;
    var dd = calend.DATED.split("-").join("").split(":").join("");
    var dated = "%0ADTSTART%3A"+dd;
    var df = calend.DATEF.split("-").join("").split(":").join("");
    var datef = "00Z%0ADTEND%3A"+df+"00Z%0AEND%3AVEVENT";
    return api+desc+dated+datef+"&size=220x220&margin=0";
  }
  ApiMail(mail){
    var api = "http://api.qrserver.com/v1/create-qr-code/?data="
    var adrm = mail.MAIL.replace("@","%40");
    var adressm = "MATMSG%3ATO%3A"+adrm;
    var sujet = "%3BSUB%3A"+mail.SUJET;
    var message = "%3BBODY%3A"+mail.TEXTE+"%3B%3B";
    return api+adressm+sujet+message+"&size=220x220&margin=0";

  }
  ApiWifi(wifi){
    var api = "http://api.qrserver.com/v1/create-qr-code/?data="
    var encr = "WIFI%3AT%3A"+wifi.ENCR;
    var ssid = "%3BS%3A"+wifi.SS;
    var passwd = "%3BP%3A"+wifi.PASS+"%3B%3B";
    return api+encr+ssid+passwd+"&size=220x220&margin=0";
  }
  ApiCarte(urlCarte){
    var api = "http://api.qrserver.com/v1/create-qr-code/?data="
    console.log(urlCarte);
    var deb ="BEGIN%3AVCARD%0AVERSION%3A2.1";
    var fin="%0AEND%3AVCARD%";
    if (urlCarte.PRENOM !== undefined){
      var NP = "%0AFN%3A"+urlCarte.PRENOM+"+"+urlCarte.NOM+"%0AN%3A"+urlCarte.NOM+"Adax%3B"+urlCarte.PRENOM;
    }else{var NP=""}
    if (urlCarte.Telp !== undefined){
      var num = "%0ATEL%3BHOME%3BVOICE%3A"+urlCarte.Telp;
    }else{var num=""}
    if(urlCarte.Mailp !== undefined){
      var mail = "%0AEMAIL%3BHOME%3BINTERNET%3A"+urlCarte.Mailp;
    }else{var mail=""}
    if (urlCarte.Adresse !== undefined){
      var adress = "%0AADR%3A%3B%3B"+urlCarte.Adresse;
    }else{var adress=""}
    if (urlCarte.Ville !== undefined){
      var ville = "%3B"+urlCarte.Ville;
    }else{var ville=""}
    if (urlCarte.Zip !== undefined){
      var zip = "%3B%3B"+urlCarte.Zip;
    }else{var zip=""}
    if (urlCarte.Pays !== undefined){
      var pays = "%3B"+urlCarte.Pays;
    }else{var pays=""}
    if (urlCarte.Entreprise !== undefined){
      var entreprise = "%0AORG%3A"+urlCarte.Entreprise;
    }else{var entreprise=""}

    var urlcarte = deb+NP+num+mail+adress+ville+zip+pays+entreprise+fin;
    console.log(urlcarte);
    return api+urlcarte+"&size=100x100";
    
  }

}
