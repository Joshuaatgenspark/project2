package com.store.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.store.UserReviews;

@Service
public interface UserReviewService {
	UserReviews saveReview(UserReviews review);

	List<UserReviews> getAllUserReviews();

	UserReviews updateReview(int reviewID, UserReviews userReview);
}
