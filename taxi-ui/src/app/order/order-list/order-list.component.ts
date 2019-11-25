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
  dateBegin: Date;
  dateEnd: Date;

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getAllOrders()
      .subscribe( data => {
        this.orders = data;
      });
  }

  getActiveOrders() {
    this.orderService.getActiveOrders()
      .subscribe( data => {
        this.orders = data;
      });
  }

  getCompleteOrders() {
    this.orderService.getCompleteOrders(this.dateBegin, this.dateEnd)
      .subscribe( data => {
        this.orders = data;
      });
  }

  completeOrder(order: Order): void {
    order.dateComplete = new Date();
    order.active = false;
    this.orderService.createOrder(order)
      .subscribe((data: Order) => {
        alert("Поездка завершена")
      });
  };

  cancelOrder(order: Order): void {
    order.active = false;
    this.orderService.createOrder(order)
      .subscribe((data: Order) => {
        alert("Заказ отменен")
      });
  };

  deleteOrder(order: Order): void {
    this.orderService.deleteOrder(order)
      .subscribe( data => {
        this.orders = this.orders.filter(u => u !== order);
      })
  };

}
