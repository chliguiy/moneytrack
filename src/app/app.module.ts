import { BrowserModule } from '@angular/platform-browser';

import { NgModule, LOCALE_ID } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { AppRoutingModule } from './app-routing.module';
import { PaymentComponent } from './payment/payment.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    PaymentComponent
  ],
  imports: [
    AppRoutingModule,BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,   MDBBootstrapModule.forRoot(),FormsModule,ReactiveFormsModule,NgbModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "fr-CA" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
