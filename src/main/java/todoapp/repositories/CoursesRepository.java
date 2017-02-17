package todoapp.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import todoapp.models.Courses;

@Repository
public interface CoursesRepository extends MongoRepository<Courses, String> {
	public List<Courses> findAll();
	public Courses findOne(String id);
	public Courses save(Courses courses);
	public void delete(Courses courses);
	public Courses findByName(String name); 
}
