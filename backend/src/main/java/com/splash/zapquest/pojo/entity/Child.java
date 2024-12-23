package com.splash.zapquest.pojo.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "child")
public class Child extends BaseEntity {
    @Column(nullable = false, unique = true)
    private String loginCode;

    @Column
    private String name;

    @OneToOne(optional = false)
    @JoinColumn(nullable = false)
    private Parent parent;

    @Column(nullable = false)
    private Integer coinBalance = 0;

    @OneToMany(mappedBy = "child", cascade = CascadeType.ALL)
    private Set<PurchasedItem> purchasedItems = new HashSet<>();
}