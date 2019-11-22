import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../../models/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe( data => {
        this.orders = data;
      });
  }

  viewOrder(order: Order) {

  }

  deleteOrder(order: Order): void {
    this.orderService.deleteOrder(order)
      .subscribe( data => {
        this.orders = this.orders.filter(u => u !== order);
      })
  };

}
