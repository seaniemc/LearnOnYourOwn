package todoapp.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "courses")
public class Courses {
	@Id
	private String id;
	private String name;
	private String lecturer;
	private String picture;
	private String video;
	private String description;
	private String enroled;
	  
	public Courses(){}
	  
	public Courses(String name, String lecturer, String picture, String video, String description,String enroled) {
		this.name = name;
		this.lecturer = lecturer;
		this.picture = picture;
		this.video = video;
		this.description = description;
		this.enroled = enroled;
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
	public String getLecturer() {
		return lecturer;
	}
	public void setLecturer(String lecturer) {
		this.lecturer = lecturer;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public String getVideo() {
		return video;
	}
	public void setVideo(String video) {
		this.video = video;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getEnroled() {
		return enroled;
	}
	public void setEnroled(String enroled) {
		this.enroled = enroled;
	}
	
    @Override
    public String toString() {
        return "Courses{" +
                "id='" + id + "'" +
                ", name='" + name + "'" +
                ", lecturer='" + lecturer + "'" +
                ", description='" + description + "'" +
                '}';
    }
}
