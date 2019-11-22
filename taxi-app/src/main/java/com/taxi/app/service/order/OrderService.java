package com.taxi.app.service.order;

import com.taxi.app.model.Order;

import java.util.List;

public interface OrderService {

    Order create(Order order);

    List<Order> getAll();

    Order getOrder(int id);

    void delete(int id);
}
