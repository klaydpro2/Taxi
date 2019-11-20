package com.taxi.app.service.order;

import com.taxi.app.model.Order;
import com.taxi.app.repository.order.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository repository;

    @Override
    public Order create(Order order) {
        return repository.save(order);
    }
}
