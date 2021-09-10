package com.restangspring;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;

@Entity
public class User {
	public User(String name, String email) {
		// TODO Auto-generated constructor stub
	}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private final String name = "";
	private final String email = "";
	
	//standard constructors / setters / getters / toString
}
