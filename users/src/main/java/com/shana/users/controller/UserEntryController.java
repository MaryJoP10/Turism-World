package com.shana.users.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.shana.users.dto.SignInDTO;
import com.shana.users.dto.SignUpDTO;
import com.shana.users.service.UserEntryService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/users")
public class UserEntryController {
	 @Autowired
	    private UserEntryService userService;

	    public UserEntryController(UserEntryService userService) {
	        this.userService = userService;
	    }

	    @PostMapping("/signup")
	    public ResponseEntity<?> signUp(@RequestBody SignUpDTO signUpDTO){
	        return userService.signUp(signUpDTO);
	    }

	    @PostMapping("/signin")
	    public ResponseEntity<?> signIn(@RequestBody SignInDTO signInDTO){
	        return userService.signIn(signInDTO);
	    }
}
