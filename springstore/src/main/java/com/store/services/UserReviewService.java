package com.store.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.store.entity.UserReviews;

@Service
public interface UserReviewService {
	UserReviews saveReview(UserReviews review);

	List<UserReviews> getAllUserReviews();

	UserReviews updateReview(long reviewID, UserReviews userReview);
}
