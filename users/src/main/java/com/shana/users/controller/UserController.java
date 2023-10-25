package com.shana.users.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shana.users.model.User;
import com.shana.users.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/listusers")
public class UserController {
	@Autowired
    private UserService userService;

    @GetMapping
    private ResponseEntity<List<User>> listUsers(){
        return ResponseEntity.ok(userService.listUser());
    }
}
