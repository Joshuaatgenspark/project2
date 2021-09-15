package com.store.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.store.entity.UserReviews;

@Repository
public interface UserReviewRepository extends JpaRepository<UserReviews, Long>{

}
