package com.shana.users.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.shana.users.dto.ResponseDTO;
import com.shana.users.dto.SignInDTO;
import com.shana.users.dto.SignUpDTO;
import com.shana.users.model.User;

@Service
public class UserEntryServiceImpl implements UserEntryService {
	private final UserService userService;

	public UserEntryServiceImpl(UserService userService) {
		this.userService = userService;
	}

	@Override
	public ResponseEntity<?> signIn(SignInDTO signInDTO) {
		ResponseDTO response = new ResponseDTO();
		User auth = userService.findByUsername(signInDTO.getUsername()).orElse(null);
		if (!signInDTO.getPassword().equals(auth.getPassword())) {
			response.setValid(false);
			return ResponseEntity.status(HttpStatus.OK).body(response);
		}
		response.setValid(true);
		return ResponseEntity.status(HttpStatus.OK).body(response);
	}

	@Override
	public ResponseEntity<?> signUp(SignUpDTO signUpDTO) {
		ResponseDTO response = new ResponseDTO();
		if (Boolean.TRUE.equals(userService.existsUserByEmail(signUpDTO.getEmail())) || Boolean.TRUE.equals(userService.existUserByUsername(signUpDTO.getUsername()))) {
			response.setValid(false);
			return ResponseEntity.status(HttpStatus.OK).body(response);
		}
		response.setValid(true);
		User user = new User();

		user.setUsername(signUpDTO.getUsername());
		user.setEmail(signUpDTO.getEmail());
		user.setPassword(signUpDTO.getPassword());

		userService.saveUser(user);
		return ResponseEntity.status(HttpStatus.OK).body(response);
	}

}
