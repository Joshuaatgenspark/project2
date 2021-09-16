package com.store.controller;

import com.store.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

	private static final String REGISTRATION_CONFIRMATION_PAGE ="registrationConfirmation";

	@Autowired
	private UserService userService;

	@GetMapping("/register")
	public String getRegistrationView(){
		return "registration";
	}

	@PostMapping("/register")
	public String customerRegistration(final UserDto user, final Model model){
		UserService.saveUser(user);
		return REGISTRATION_CONFIRMATION_PAGE;
	}
}
