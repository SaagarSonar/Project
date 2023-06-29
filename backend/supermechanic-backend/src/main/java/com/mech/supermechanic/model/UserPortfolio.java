package com.mech.supermechanic.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "user_portfolio")
@Getter
@Setter
public class UserPortfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "upid")
    Integer upid;

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "uid", referencedColumnName = "id")
    User uid;

    @ManyToOne(targetEntity = MechanicServ.class)
    @JoinColumn(name = "sid", referencedColumnName = "sid")
    MechanicServ sid;

    @Column(name = "status")
    String status;
}
