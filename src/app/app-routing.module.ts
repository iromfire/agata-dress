import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OrderComponent } from './components/order/order.component';
import { CheckoutSuccessComponent } from './components/order/checkout-success/checkout-success.component';
import { RepairComponent } from './components/repair/repair.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { StylistComponent } from './components/stylist/stylist.component';

const extraOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled'
};

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order/success', component: CheckoutSuccessComponent },
    { path: 'repair', component: RepairComponent },
    { path: 'accessories', component: AccessoriesComponent },
    { path: 'stylist', component: StylistComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, extraOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
