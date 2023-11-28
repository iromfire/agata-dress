import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OrderComponent } from './order/order.component';
import { CheckoutSuccessComponent } from './order/checkout-success/checkout-success.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order/success', component: CheckoutSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
