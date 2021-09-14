package com.example.store.service;

import org.springframework.stereotype.Service;

import entity.User;

@Service
public interface UserService {
	User saveUser(User user);
	User updateUser(long uId, User user);
}
