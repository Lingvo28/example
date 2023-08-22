import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { DeliveryOrderComponent } from './components/delivery-order/delivery-order.component';

const routes: Routes = [
  {
    path: 'marketplace',
    component: MarketplaceComponent,
    canActivate: []
  },
  {
    path: '**',
    component: DeliveryOrderComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
