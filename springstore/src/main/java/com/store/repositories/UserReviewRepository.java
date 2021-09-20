package com.store.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.store.entity.UserReviews;

import java.util.List;

@Repository
public interface UserReviewRepository extends JpaRepository<UserReviews, Long>{

    List<UserReviews> findAllByGameTitle(String gameTitle);
    List<UserReviews> findAllByUserName(String userName);

}
