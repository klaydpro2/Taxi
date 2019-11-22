import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import {OrderService} from "../order.service";
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  order: Order;
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.orderService.getOrder(id).subscribe((order: Order) => {
          if (order) {
            this.order = order;
          } else {
            console.log('Заказа с ИД ' + {id} + ' не найден');
            this.router.navigate(['/order-list']);
          }
        });
      }
    });
  }

}
