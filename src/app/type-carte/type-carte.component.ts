import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-type-carte',
  templateUrl: './type-carte.component.html',
  styleUrls: ['./type-carte.component.css']
})
export class TypeCarteComponent{

  constructor() { }

@Output() Carte = new EventEmitter();

ListCarte = new Object();


SendcarteN(Nom){
  this.ListCarte["NOM"]=Nom;
}
SendcarteP(Prenom){
  this.ListCarte["PRENOM"]=Prenom;
  this.Carte.emit(this.ListCarte);
}
SendcarteA(Adresse){
  var splt = Adresse.split(' ');
  var addr="";
  splt.forEach(element => {
    addr = addr+"+"+element.toString();
    console.log(addr);
  });
  this.ListCarte["Adresse"]=addr.substr(1);
  this.Carte.emit(this.ListCarte);
}
SendcarteZ(Zip){
  this.ListCarte["Zip"]=Zip;
  this.Carte.emit(this.ListCarte);
}
SendcarteV(Ville){
  this.ListCarte["Ville"]=Ville;
  this.Carte.emit(this.ListCarte);
}
SendcartePa(Pays){
  this.ListCarte["Pays"]=Pays;
  this.Carte.emit(this.ListCarte);
}
SendcarteE(Entreprise){
  this.ListCarte["Entreprise"]=Entreprise;
  this.Carte.emit(this.ListCarte);
}
SendcarteMp(Mailp){
  this.ListCarte["Mailp"]=Mailp;
  this.Carte.emit(this.ListCarte);
}
SendcarteTd(Telp){
  this.ListCarte["Telp"]=Telp;
  this.Carte.emit(this.ListCarte);
}




}
