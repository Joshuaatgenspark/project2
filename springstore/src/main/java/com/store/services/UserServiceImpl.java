package com.store.services;

import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.store.User;
import com.store.UserRepository;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepo;
    
	@Override
	public User saveUser(User user) {
		// Saves user object in db
		return userRepo.save(user);
	}

	@Override
	public User updateUser(long uId, User user) {
		// Checks DB and updates name if name is not null or empty string
        User userDB = userRepo.findById(uId).get();
        
        if(Objects.nonNull(user.getName()) && !"".equalsIgnoreCase(user.getName())){
            userDB.setName(user.getName());
        }
        
		return userRepo.save(userDB);
	}
	
	@Override
	public List<User> listUsers() {
		// Lists all users!
		return  userRepo.findAll();
	}

}
