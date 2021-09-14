package com.example.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entity.User;
import repository.UserRepository;

@Service
public class UserImpl implements UserService {
	
	@Autowired
	private UserRepository repository;

	@Override
	public User saveUser(User user) {
		return repository.save(user);
	}

	@Override
	public User updateUser(long uId, User user) {
		User userDB = repository.findById(uId).get();
		userDB.setName(user.getName());
		userDB.getEmail();
		return repository.save(userDB);
	}
}
