package com.store.services;

import com.store.entity.UserEntity;
import com.store.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public UserEntity saveUser(final UserDto userData){
        UserEntity userModel = populateUserData(userData);
        return userRepository.save(userModel);
    }

    private UserEntity populateUserData(final UserDto userData){
        UserEntity user = new UserEntity();
        user.setFirstName(userData.getFirstName());
        user.setLastName(userData.getLastName());
        user.setEmail(userData.getEmail());
        user.setPassword(passwordEncoder.encode(userData.getPassword()));
        return user;
    }
}
