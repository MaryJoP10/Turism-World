package com.shana.users.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users", uniqueConstraints = {@UniqueConstraint(columnNames = "email"), @UniqueConstraint(columnNames = "username")})
public class User {
	/* Variables */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_user")
	private Integer id_user;
	
	@Column(name = "username", length = 100)
	private String username;
	
	@Column(name = "email", length = 100)
	private String email ;
	
	@Column(name = "password", length = 100)
	private String password;
	
	/* Constructors */
	public User(Integer id_user, String username, String email, String password) {
		super();
		this.id_user = id_user;
		this.username = username;
		this.email = email;
		this.password = password;
	}
	
	public User(String username, String email, String password) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
	}
	
	public User() {
	}
	
	/* Getters and Setters */
	public Integer getId_user() {
		return id_user;
	}

	public void setId_user(Integer id_user) {
		this.id_user = id_user;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
