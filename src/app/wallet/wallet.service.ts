import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Wallet } from './wallet.model';


@Injectable({
  providedIn: 'root',
})
export class WalletService {
  Walletchanged = new Subject<Wallet>();


  private balance: Wallet;

  constructor(
    private http: HttpClient) {}
    GetBalance (): Observable<Wallet> {
      return this.http.get<Wallet>(
        'http://private-anon-66511089cd-testtechniquefront.apiary-mock.com/balance',
        
      );
    }
 

  getWallet() {
    return this.balance;
  }




}
