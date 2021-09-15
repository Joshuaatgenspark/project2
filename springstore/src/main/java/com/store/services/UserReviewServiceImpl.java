package com.store.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.entity.UserReviews;
import com.store.repositories.UserReviewRepository;

@Service
public class UserReviewServiceImpl implements UserReviewService{
    @Autowired
    private UserReviewRepository uRRepository; 

	@Override
	public UserReviews saveReview(UserReviews review) {
		// Saves user review object to db
		return uRRepository.save(review);
	}

	@Override
	public List<UserReviews> getAllUserReviews() {
		// retrieves all user reviews
		return uRRepository.findAll();
	}

	@Override
	public UserReviews updateReview(int reviewID, UserReviews userReview) {
		// TODO Auto-generated method stub
		return null;
	}
    
}