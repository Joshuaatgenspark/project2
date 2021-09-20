package com.store.services;

import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.store.entity.User;
import com.store.repositories.UserRepository;

/**
 * 
 * This is the User Service Implementation class
 * it allows the application to access the database
 * to save an User account, update an User Account,
 * and list all Users
 * 
 * @author Nicky Kayyarath
 *
 */

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
		// Checks DB and updates user name and password if user name and password is not null or empty string
        User userDB = userRepo.findById(uId).get();
        
        if(Objects.nonNull(user.getUserName()) && !"".equalsIgnoreCase(user.getUserName())){
            userDB.setUserName(user.getUserName());
        }
        
        if(Objects.nonNull(user.getPassword()) && !"".equalsIgnoreCase(user.getPassword())) {
        	userDB.setPassword(user.getPassword());
        }
        
		return userRepo.save(userDB);
	}
	
	@Override
	public List<User> listUsers() {
		// Lists all users!
		return  userRepo.findAll();
	}

	@Override
	public User loginUser(String userName, String password) {
		return userRepo.findByUserNameAndPassword(userName,password);
	}

}
