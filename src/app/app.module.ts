import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TypeQrCodeComponent } from './type-qr-code/type-qr-code.component';
import { TypeUrlComponent } from './type-url/type-url.component';
import { TypeTexteComponent } from './type-texte/type-texte.component';
import { TypeCarteComponent } from './type-carte/type-carte.component';
import { TypeSmsComponent } from './type-sms/type-sms.component';
import { TypePhoneComponent } from './type-phone/type-phone.component';
import { TypeMapsComponent } from './type-maps/type-maps.component';
import { TypeCalComponent } from './type-cal/type-cal.component';
import { TypeMailComponent } from './type-mail/type-mail.component';
import { TypeWifiComponent } from './type-wifi/type-wifi.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeQrCodeComponent,
    TypeUrlComponent,
    TypeTexteComponent,
    TypeCarteComponent,
    TypeSmsComponent,
    TypePhoneComponent,
    TypeMapsComponent,
    TypeCalComponent,
    TypeMailComponent,
    TypeWifiComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
