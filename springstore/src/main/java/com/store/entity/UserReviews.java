package com.store.entity;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "user_reviews")
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class UserReviews {

    /**
     * Review ID is the internal counter for each review a user makes It is also the
     * primary key to the UserReviews Database
     */
    @Id
    @SequenceGenerator(
            name = "review_sequence",
            sequenceName = "review_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "review_sequence"
    )
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private long reviewID;

    // may need a hibernate annotation to link user to user table
    private String userName;

    // game title of each review
    @Column(name="game_title") 		
    private String gameTitle;

    // user review
    @Column(name = "game_review", columnDefinition = "varchar(1337)")
    private String review;

}
