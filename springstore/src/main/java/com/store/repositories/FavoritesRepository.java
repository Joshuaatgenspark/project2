package com.store.repositories;

import com.store.entity.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface FavoritesRepository extends JpaRepository<Favorites, Long> {
    Favorites findByUsername(String userName);
}
