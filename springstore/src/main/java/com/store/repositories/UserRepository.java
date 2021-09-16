package com.store.repositories;


import com.store.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    private static final String REGISTRATION_CONFIRMATION_PAGE ="registrationConfirmation";

    @Autowired
    private UserService userService;

    @GetMapping("/register")
    public String getRegistrationView(){
        return "registration";
    }

    @PostMapping("/register")
    public String userRegistration(final UserDto user, final Model model){
        userService.saveUser(user);
        return REGISTRATION_CONFIRMATION_PAGE;
    }
}
