package com.store.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(uniqueConstraints = { @UniqueConstraint(name = "email_unique", columnNames = "email"),
                             @UniqueConstraint(name = "userName_unique", columnNames = "username") })
public class UserEntity {

        // auto generated user ID number
       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       private long id;
       private String userName;
       private String email;
       private String password;

}
