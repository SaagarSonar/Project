package com.mech.supermechanic.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "mechanic_service")
@Getter
@Setter
public class MechanicServ {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sid")
    private Integer sid;

    @Column(name = "description")
    String description;

    @Column(name = "name")
    String name;

    @Column(name = "price")
    Double price;

    @Column(name = "category")
    String category;
}
