package com.store.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(uniqueConstraints = { @UniqueConstraint(name = "email_unique", columnNames = "email"),
                             @UniqueConstraint(name = "userName_unique", columnNames = "userName") })
public class User {

        // auto generated user ID number

        @Id
        @SequenceGenerator(
                name = "user_sequence",
                sequenceName = "user_sequence",
                allocationSize = 1
        )
        @GeneratedValue(
                strategy = GenerationType.SEQUENCE,
                generator = "user_sequence"
        )
//        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;

        // user chosen username must be unique;

        private String userName;

        @Column(name = "email", nullable = false)
        private String email;

        private String password;
}
