package com.store.controller;

import java.util.List;

import com.store.entity.User;
import com.store.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.store.services.UserService;
import com.store.status.Status;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {
	
	@Autowired
	private UserService service;

	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/register")
	public Status saveUser(@RequestBody User newUser) {
		
		List<User> users = userRepository.findAll();
		System.out.println("New user: " + newUser.toString());
		for (User user : users) {
			System.out.println("Registered user: " + newUser.toString());
			if (user.equals(newUser)) {
				System.out.println("User Already exists!");
				return Status.USER_ALREADY_EXISTS;
			}
		}
		service.saveUser(newUser);
		return Status.SUCCESS;
	}
	
	@GetMapping("/user")
    public List<User> getUsers() {
        return service.listUsers();
    }
	
	@PutMapping("/user/{id}")
	public User updateUser(@PathVariable("id") long userId, @RequestBody User user) {
		return service.updateUser(userId, user);
	}

	@PostMapping("/login")
	public Status loginUser(@Validated @RequestBody User user) {
		List<User> users = userRepository.findAll();
		for (User other : users) {
			if (other.equals(user)) {
				
				userRepository.save(user);
				return Status.SUCCESS;
			}
		}
		return Status.FAILURE;
	}

}
