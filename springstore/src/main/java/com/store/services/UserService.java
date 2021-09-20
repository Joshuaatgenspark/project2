package com.store.services;

import java.util.List;

import org.springframework.stereotype.Service;
import com.store.entity.User;


@Service
public interface UserService {
	User saveUser(User user);
	User updateUser(long uId, User user);
	List<User> listUsers();
	User loginUser(String userName, String password);
}
