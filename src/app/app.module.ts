import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { ProductsListComponent } from './components/marketplace/products-list/products-list.component';
import { SidebarFilterComponent } from './components/marketplace/sidebar-filter/sidebar-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveryOrderComponent } from './components/delivery-order/delivery-order.component';


@NgModule({
  declarations: [
    AppComponent,
    MarketplaceComponent,
    ProductsListComponent,
    SidebarFilterComponent,
    DeliveryOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
