import { Component, OnInit } from '@angular/core';
import { WalletService } from './wallet.service';
import { Wallet } from './wallet.model';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(private WalletService:WalletService) { }
 wallet :Wallet;
 balance:any;
  ngOnInit() {
 this.WalletService.GetBalance()
  .subscribe(response => {
    this.wallet=response;
    this.balance=response.balance;
  });;
  }

}
