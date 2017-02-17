package todoapp.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "lecturer")
public class Lecturer {
	@Id
	private String id;
	private String name;
	private String picture;
	private String courses;
	private String description;
	
	public Lecturer(){}
	  
	public Lecturer(String name, String picture, String courses, String description) {
		this.name = name;
		this.picture = picture;
		this.courses = courses;
		this.description = description;
	}
	
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
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public String getCourses() {
		return courses;
	}
	public void setCourses(String courses) {
		this.courses = courses;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
        return "Lecturer{" +
                "id='" + id + "'" +
                ", name='" + name + "'" +
                ", picture='" + picture + "'" +
                ", courses='" + courses + "'" +
                ", description='" + description + "'" +
                '}';
	}
	
}
