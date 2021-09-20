package com.store.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.entity.UserReviews;
import com.store.repositories.UserReviewRepository;

/**
 * User Review Service class allows the us to be able to save user game reviews.
 * Get all game reviews to display Also Eventually, we can also allow a user to
 * update their review.
 * 
 * @author Nicky Kayyarath
 *
 */
@Service
public class UserReviewServiceImpl implements UserReviewService {
	@Autowired
	private UserReviewRepository uRRepository;
	
	EntityManager em;

	@Override
	public UserReviews saveReview(UserReviews review) {
		// Saves user review object to db
		return uRRepository.save(review);
	}

	@Override
	public List<UserReviews> getReviewByTitle(String gameTitle) {
		return uRRepository.findAllByGameTitle(gameTitle);
	}

	@Override
	public List<UserReviews> getReviewsByUserName(String userName) {
		return uRRepository.findAllByUserName(userName);
	}

	@Override
	public List<UserReviews> getAllUserReviews() {
		// retrieves all user reviews
		return uRRepository.findAll();
	}
	
	//gets all user reviews by game title
	public List<UserReviews> getAllReviewsByTitle(String gameTitle){
		//Criteria Builder lets us create different parts of the query
		CriteriaBuilder cb = em.getCriteriaBuilder();
		//Criteria Query lets us describe what we want to do in the query
		CriteriaQuery<UserReviews> cq = cb.createQuery(UserReviews.class);
		
		Root<UserReviews> userReviews = cq.from(UserReviews.class);
		
		List<Predicate> predicates = new ArrayList<>();
		
		
		if(gameTitle != null) {
			// userReviews.get("game_title") may have to match the one in 
			// the Entity, but I am using the column name in the database
			predicates.add(cb.equal(userReviews.get("game_title"), gameTitle));
		}
		
		cq.where(predicates.toArray(new Predicate[0]));
		
		return em.createQuery(cq).getResultList();
		
	}

	@Override
	public UserReviews updateReview(long reviewID, UserReviews userReview) {
		// Allows an User to update their own review.
		UserReviews uRDB = uRRepository.findById(reviewID).get();
		uRDB.setUserName(userReview.getUserName());
		uRDB.setGameTitle(userReview.getGameTitle());
		uRDB.setReview(userReview.getReview());


		if (Objects.nonNull(userReview.getReview()) && !"".equalsIgnoreCase(userReview.getGameTitle())) {
			uRDB.setReview(userReview.getReview());
		}

		return uRRepository.save(uRDB);
	}

}