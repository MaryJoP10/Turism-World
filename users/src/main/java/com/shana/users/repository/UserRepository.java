package com.shana.users.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.shana.users.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	Optional<User> findByUsername(String username);
	Boolean existsUserByUsername(String username);
	
	Boolean existsUserByEmail(String email);
	Optional<User> findByEmail(String email);
}
