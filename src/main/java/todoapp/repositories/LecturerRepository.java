package todoapp.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import todoapp.models.Lecturer;

@Repository
public interface LecturerRepository extends MongoRepository<Lecturer, String>{
	public List<Lecturer> findAll();
	public Lecturer findOne(String id);
	public Lecturer save(Lecturer lecturer);
	public void delete(Lecturer lecturer);
	public Lecturer findByName(String name); 
}
