package com.shana.users.service;

import org.springframework.http.ResponseEntity;
import com.shana.users.dto.SignInDTO;
import com.shana.users.dto.SignUpDTO;

public interface UserEntryService {
	ResponseEntity<?> signIn(SignInDTO signInDTO);
    ResponseEntity<?> signUp(SignUpDTO signUpDTO);
}
