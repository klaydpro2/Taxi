import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import {OrderService} from './order/order.service';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderViewComponent } from './order/order-view/order-view.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderCreateComponent,
    OrderListComponent,
    OrderViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
