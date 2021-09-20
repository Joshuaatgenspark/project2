package com.store.services;

import com.store.entity.Favorites;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FavoritesService{
    Favorites saveFavorite(Favorites favorites);
    List<Favorites> getAllFavorites();
    List<Favorites> getFavoritesByUsername(String username);
}
