package com.store;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.store.services.UserService;


@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class UserController {
	
	@Autowired
	private UserService service;
	
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
}
