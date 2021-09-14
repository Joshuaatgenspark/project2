package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.store.service.UserService;

import entity.User;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class UserController {
	
	@Autowired
	private UserService service;
	
	@PostMapping("/users")
	public User saveUser(@RequestBody User user) {
		return service.saveUser(user);
	}
	
	@PutMapping("/employees/{id}")
	public User updateUser(@PathVariable("id") long userId, @RequestBody User user) {
		return service.updateUser(userId, user);
	}
}
