package com.store.controller;

import com.store.entity.Favorites;
import com.store.services.FavoritesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/", allowedHeaders = "*")
@RestController
public class FavoritesController {

    @Autowired
    private FavoritesService service;

    @PostMapping("/profile")
    public Favorites saveFavorite(@RequestBody Favorites favorites){
        return service.saveFavorite(favorites);
    }

    @GetMapping("/profile")
    public List<Favorites> getAllFavorites(){
        return service.getAllFavorites();
    }

    @GetMapping("/profile/{username}")
    public List<Favorites> getFavoritesByUserName(@PathVariable("username") String username){
        System.out.println(username);
        return (List<Favorites>) service.getFavoritesByUsername(username);
    }
}
