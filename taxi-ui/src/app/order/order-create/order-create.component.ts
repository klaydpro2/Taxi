import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../../models/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent {//implements OnInit {

  order: Order = new Order();

  constructor(private router: Router, private orderService: OrderService) { }

/*  ngOnInit() {
  }*/

  createOrder(): void {
    this.orderService.createOrder(this.order)
      .subscribe( data => {
        alert("Такси успешно заказано.");
      });
  }

}
