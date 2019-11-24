package com.taxi.app.controller;

import com.taxi.app.model.Order;
import com.taxi.app.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@CrossOrigin (origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/order"})
//@RequestMapping({"/api"})
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public Order create(@RequestBody Order order){
        return orderService.create(order);
    }

    /*@GetMapping("/list/{type}")
    public List<Order> getOrders(@PathVariable("type") String type) {
        return orderService.getOrders(type);
    }*/

    @GetMapping("/list/all")
    public List<Order> getAll() {
        return orderService.getAll();
    }

    @GetMapping("/list/active")
    public List<Order> getActive() {
        return orderService.getActive();
    }

    @GetMapping("/list/complete")
    public List<Order> getComplete(
            @DateTimeFormat(pattern = "yyyy-MM-dd") @RequestParam(value = "dateBegin") Date dateBegin,
            @DateTimeFormat(pattern = "yyyy-MM-dd") @RequestParam(value = "dateEnd") Date dateEnd) {
        return orderService.getComplete(dateBegin, dateEnd);
    }

    @GetMapping("/{id}")
    public Order getOrder(@PathVariable("id") int id){
        return orderService.getOrder(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") int id) {
        orderService.delete(id);
    }

}
