import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderViewComponent } from './order/order-view/order-view.component';

const routes: Routes = [
  { path: 'order-create', component: OrderCreateComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'order-view/:id', component: OrderViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
