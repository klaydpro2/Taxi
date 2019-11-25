package com.taxi.app.repository.order;

import com.taxi.app.model.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {

    Order save(Order order);

    List<Order> findAllByOrderById();

    List<Order> findByActiveOrderById(boolean active);

    List<Order> findByDateCompleteBetweenOrderById(Date dateBegin, Date dateEnd);

    Order findById(int i);

    void deleteById(int i);
}
