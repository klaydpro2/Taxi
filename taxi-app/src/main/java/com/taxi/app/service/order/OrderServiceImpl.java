package com.taxi.app.service.order;

import com.taxi.app.model.Order;
import com.taxi.app.repository.order.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository repository;

    @Override
    public Order create(Order order) {
        return repository.save(order);
    }

    @Override
    public List<Order> getAll() {
        return repository.findAllByOrderById();
    }

    @Override
    public List<Order> getActive() {
        return repository.findByActiveOrderById(true);
    }

    @Override
    public List<Order> getComplete(Date dateBegin, Date dateEnd) {
        return repository.findByDateCompleteBetweenOrderById(dateBegin, dateEnd);
    }

    @Override
    public Order getOrder(int id) {
        return repository.findById(id);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }
}
