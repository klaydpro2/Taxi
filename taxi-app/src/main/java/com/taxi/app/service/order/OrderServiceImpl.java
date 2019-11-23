package com.taxi.app.service.order;

import com.taxi.app.model.Order;
import com.taxi.app.repository.order.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository repository;

    @Override
    public Order create(Order order) {
        return repository.save(order);
    }

    /*@Override
    public List<Order> getOrders(String type) {
        List<Order> result;
        switch (type) {
            case "all":
                result = repository.findAll();
                break;
            case "current":
                result = repository.findByActive(true);
                break;
            default:
                result = new ArrayList<Order>();
        }

        return result;
    }*/

    @Override
    public List<Order> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Order> getActive() {
        return repository.findByActive(true);
    }

    @Override
    public List<Order> getComplete() {
        return repository.findByActive(true);
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
