import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { Order } from '../models/order.model';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService {

  constructor(private http:HttpClient) {}

  private orderUrl = 'http://localhost:8080/order';

  public getOrder(id: string) {
    return this.http.get<Order>(this.orderUrl + "/"+ id);
  }

  /*public getOrders(type: string) {
    return this.http.get<Order[]>(this.orderUrl + "/list/" + type);
  }*/

  public getAllOrders() {
    return this.http.get<Order[]>(this.orderUrl + "/list/all");
  }

  public getActiveOrders() {
    return this.http.get<Order[]>(this.orderUrl + "/list/active");
  }

  public getCompleteOrders(dateBegin: Date, dateEnd: Date) {
    let params = new HttpParams();
    params.set("dateBegin", dateBegin);
    params.set("dateEnd", dateEnd);
    return this.http.get<Order[]>(this.orderUrl + "/list/complete", {params: params});
  }

  public deleteOrder(order) {
    return this.http.delete(this.orderUrl + "/"+ order.id);
  }

  public createOrder(order) {
    return this.http.post<Order>(this.orderUrl, order);
  }

}
