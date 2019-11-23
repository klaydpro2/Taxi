package com.taxi.app.service.order;

import com.taxi.app.model.Order;

import java.util.List;

public interface OrderService {

    Order create(Order order);

    //List<Order> getOrders(String type);

    List<Order> getAll();

    List<Order> getActive();

    List<Order> getComplete();

    Order getOrder(int id);

    void delete(int id);
}
