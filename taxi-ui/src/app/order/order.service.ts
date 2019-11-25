import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { Order } from '../models/order.model';

@Injectable()
export class OrderService {

  constructor(private http:HttpClient) {}

  private orderUrl = 'http://localhost:8080/order';

    public getOrder(id: string) {
    return this.http.get<Order>(this.orderUrl + "/"+ id);
  }

  public getAllOrders() {
    return this.http.get<Order[]>(this.orderUrl + "/list/all");
  }

  public getActiveOrders() {
    return this.http.get<Order[]>(this.orderUrl + "/list/active");
  }

  public getCompleteOrders(dateBegin: Date, dateEnd: Date) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    params = params.append('dateBegin', dateBegin ? dateBegin.toString() : "0001-01-01");
    params = params.append("dateEnd", dateEnd ?  dateEnd.toString() : "9999-12-31");

    return this.http.get<Order[]>(this.orderUrl + "/list/complete", {headers: headers, params: params});
  }

  public deleteOrder(order) {
    return this.http.delete(this.orderUrl + "/"+ order.id);
  }

  public createOrder(order) {
    return this.http.post<Order>(this.orderUrl, order);
  }

}
