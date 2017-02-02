package todoapp.models;

import java.util.Date;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

//name of the collection being used
@Document(collection="register")
public class User {
	//declare instance variables that are in the database
	@Id
	private String id;
	
	@NotBlank
	@Size(max=250)
	@Indexed(unique=true)
	
	private String name;
	private String email;
	private String username;
	private String password;
	private String gender;
	private String type;

	//default constructor
	public User() {
		super();
	}
	
	//constructor with title
	public User(String username) {
		this.username = username;
	}	
	
	//Getters and Setters for instance variables
	
    public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	//override toString
	@Override
    public String toString() {
        return String.format(
                "Todo[id=%s, usernamre='%s', email='%s']",
                id, username, email);
    }
	
}
