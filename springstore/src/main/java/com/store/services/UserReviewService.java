package com.store.services;

import java.util.List;

import com.store.entity.UserReviews;
import org.springframework.stereotype.Service;



@Service
public interface UserReviewService {
	UserReviews saveReview(UserReviews review);

	List<UserReviews> getReviewByTitle(String gameTitle);

	List<UserReviews> getReviewsByUserName(String userName);

	List<UserReviews> getAllUserReviews();

	UserReviews updateReview(long reviewID, UserReviews userReview);
}
