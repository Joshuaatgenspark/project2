package com.store.controller;

import com.store.entity.UserReviews;
import com.store.services.UserReviewService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserReviewController {

    @Autowired
    private UserReviewService userReviewService;

    @PostMapping("/review")
    public UserReviews saveReview(@RequestBody UserReviews review){
        return userReviewService.saveReview(review);
    }

    @GetMapping("/review")
    public List<UserReviews> getAllReviews(){
        return userReviewService.getAllUserReviews();
    }

    @GetMapping("/games/{title}")
    public List<UserReviews> getReviewsByGameTitle(@PathVariable("title") String gameTitle){
        return userReviewService.getReviewByTitle(gameTitle);
    }

    @GetMapping("/review/{userName}")
    public List<UserReviews> getReviewsByUserName(@PathVariable("username") String userName){
        return userReviewService.getReviewsByUserName(userName);
    }

    @PutMapping("/review/{reviewID}")
    public UserReviews updateReview(@PathVariable("reviewID") long reviewID, @RequestBody UserReviews userReviews){
        return userReviewService.updateReview(reviewID, userReviews);
    }

}
