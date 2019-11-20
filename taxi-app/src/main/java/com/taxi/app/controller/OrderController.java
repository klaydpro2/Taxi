package com.taxi.app.controller;

import com.taxi.app.model.Order;
import com.taxi.app.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin (origins = "http://localhost:4200" , maxAge = 3600)
@RestController
@RequestMapping({"/order"})
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public String findAll(){
        return "userService.findAll()";
    }

    @PostMapping
    public Order create(@RequestBody Order order){
        return orderService.create(order);
    }

}
