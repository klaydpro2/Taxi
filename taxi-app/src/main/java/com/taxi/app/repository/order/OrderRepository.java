package com.taxi.app.repository.order;

import com.taxi.app.model.Order;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Integer> {

    Order save(Order order);

    List<Order> findAll();

    List<Order> findByActive(boolean active);

    Order findById(int i);

    void deleteById(int i);
}
