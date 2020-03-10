import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WalletComponent } from './wallet/wallet.component';
import { PaymentComponent } from './payment/payment.component';

const appRoutes: Routes = [
  { path: 'wallet',        component: WalletComponent },

  { path: 'paiement',        component: PaymentComponent },
  { path: '',   redirectTo: '/wallet', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule,CommonModule
  ]
})
export class AppRoutingModule {}
