package com.taxi.app.repository.order;

import com.taxi.app.model.Order;
import org.springframework.data.repository.Repository;

public interface OrderRepository extends Repository<Order, Integer> {

    Order save(Order order);
}
