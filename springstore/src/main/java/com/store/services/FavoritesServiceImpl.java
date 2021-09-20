package com.store.services;

import com.store.entity.Favorites;
import com.store.repositories.FavoritesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoritesServiceImpl implements FavoritesService{

    @Autowired
    private FavoritesRepository repository;

    @Override
    public Favorites saveFavorite(Favorites favorites) {
        System.out.println(favorites);
        return repository.save(favorites);
    }

    @Override
    public List<Favorites> getAllFavorites() {
        return repository.findAll();
    }

    @Override
    public List<Favorites> getFavoritesByUsername(String username) {
        return (List<Favorites>) repository.findAllByUsername(username);
    }
}
