package com.shana.users.service;

import java.util.List;
import java.util.Optional;
import com.shana.users.model.User;

public interface UserService {
	void saveUser(User user);
	
	public List<User> listUser();
	boolean existUserByUsername(String username);
	Optional<User> findByUsername(String username);
	
	boolean existsUserByEmail(String email);
	Optional<User> findByEmail(String email);
}
