package com.store.controller;

import java.util.List;

import com.store.entity.User;
import com.store.repositories.UserRepository;
import com.store.status.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.store.services.UserService;


@CrossOrigin(origins = "http://localhost:4200/", allowedHeaders = "*")
@RestController
public class UserController {
	
	@Autowired
	private UserService service;
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/user")
	public User saveUser(@RequestBody User user) {
		return service.saveUser(user);
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
