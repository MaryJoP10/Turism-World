package com.shana.users.service;

import org.springframework.stereotype.Service;
import com.shana.users.model.User;
import com.shana.users.repository.UserRepository;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;


    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void saveUser(User user){
        userRepository.save(user);
    }

	@Override
	public List<User> listUser() {
		return userRepository.findAll();
	}

	@Override
	public boolean existUserByUsername(String username) {
		return userRepository.existsUserByUsername(username);
	}

	@Override
	public Optional<User> findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	@Override
	public boolean existsUserByEmail(String email) {
		return userRepository.existsUserByEmail(email);
	}

	@Override
	public Optional<User> findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
}