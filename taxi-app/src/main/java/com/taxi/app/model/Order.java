package com.taxi.app.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "order")
@Data
public class Order {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "addressFrom")
    private String addressFrom;

    @Column(name = "addressTo")
    private String addressTo;
}
