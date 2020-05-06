import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-mail',
  templateUrl: './type-mail.component.html',
  styleUrls: ['./type-mail.component.css']
})
export class TypeMailComponent  {

  constructor() { }
  @Output() Mail = new EventEmitter();
ListMail = new Object();

  SendMail(mail){
    this.ListMail["MAIL"]=mail;
  }
  SendMailS(sujet){
    this.ListMail["SUJET"]=sujet;
  }
  SendMailT(text){
    this.ListMail["TEXTE"]=text;
    this.Mail.emit(this.ListMail);
  }

}
