import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderCreateComponent } from './order/order-create/order-create.component';

const routes: Routes = [
  { path: 'order-create', component: OrderCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
