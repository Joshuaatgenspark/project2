package com.store.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(uniqueConstraints = { @UniqueConstraint(name = "email_unique", columnNames = "email"),
                             @UniqueConstraint(name = "userName_unique", columnNames = "username") })
public class User {

        // auto generated user ID number
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;

        // user chosen username must be unique;
        @Id
        private String userName;

        @Column(name = "email", nullable = false)
        private String email;

        private String password;
}
