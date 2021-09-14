package com.store.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.store.UserReviews;

@Repository
public interface UserReviewRepository extends JpaRepository<UserReviews, Long>{
    //have to finish the query to get a list of reviews that a User has done.
    @Query(
        value = "select * from ",
        nativeQuery=true
    )
	public List<UserReviews> getReviewsByUserName(String userName);
}
