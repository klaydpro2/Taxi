package com.taxi.app.controller;

import com.taxi.app.model.Order;
import com.taxi.app.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin (origins = "http://localhost:4200" , maxAge = 3600)
@RestController
@RequestMapping({"/order"})
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public Order create(@RequestBody Order order){
        return orderService.create(order);
    }

    @GetMapping
    public List<Order> getAll(){
        return orderService.getAll();
    }

    @GetMapping("/id")
    public Order getOrder(@PathVariable("id") int id){
        return orderService.getOrder(id);
    }

    @DeleteMapping("/id")
    public void delete(@PathVariable("id") int id) {
        orderService.delete(id);
    }

}
