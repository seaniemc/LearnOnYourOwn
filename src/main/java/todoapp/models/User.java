package todoapp.models;

//package com.springbootsecure.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "users")
public class User {
  @Id
  private String id;
  
  private String email;
  private String name;
  private String username;
  private String password;
  private int role;
  
  public User(){}
  
  public User(String email, String password, String username, String name, int role){
	this.setEmail(email);
    this.setPassword(password);
    this.setUsername(username);
    this.setName(name);
    this.setRole(role); 
  }
  public String getId() {
    return id;
  }
  
  public void setId(String id) {
    this.id = id;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getUsername() {
    return username;
  }
  public void setUsername(String username) {
    this.username = username;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getName() {
		return name;
  }

  public void setName(String name) {
	this.name = name;
  }
  public int getRole() {
    return role;
  }
  public void setRole(int role) {
    this.role = role;
  }
  
    @Override
    public String toString() {
        return "User{" +
                "id='" + id + "'" +
                ", username='" + username + "'" +
                ", password='" + password + "'" +
                ", role='" + role + "'" +
                '}';
    }
  
}