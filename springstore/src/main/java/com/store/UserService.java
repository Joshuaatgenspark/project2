package com.store;

import org.springframework.stereotype.Service;



@Service
public interface UserService {
	User saveUser(User user);
	User updateUser(long uId, User user);
}
