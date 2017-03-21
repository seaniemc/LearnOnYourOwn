package todoapp.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import todoapp.models.Lecturer;
import todoapp.repositories.LecturerRepository;

@RestController
@RequestMapping("/api/lecturer")
public class LecturerController {
	@Autowired
	LecturerRepository lecturerRepository;
	
	//return all data
	@RequestMapping(method=RequestMethod.GET)
	public List<Lecturer> getAllLecturers() {
		return lecturerRepository.findAll();
	}

	//create statement
	//@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(method=RequestMethod.POST)
	public Lecturer createLecturer(@Valid @RequestBody Lecturer lecturer) {
		return lecturerRepository.save(lecturer);
	}

	//return by Id
	//@PreAuthorize("hasAuthority('USER 'ADMIN'')")
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity<Lecturer> getLecturerById(@PathVariable("id") String id) {
		Lecturer lecturer = lecturerRepository.findOne(id);
		if(lecturer == null) {
			return new ResponseEntity<Lecturer>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<Lecturer>(lecturer, HttpStatus.OK);
		}
	}
	
	//@PreAuthorize("hasAuthority('USER ');
	@RequestMapping(value="{name}", method=RequestMethod.GET)
	public ResponseEntity<Lecturer> getLecturerByName(@PathVariable("name") String name) {
		Lecturer lecturer = lecturerRepository.findByName(name);
		if(lecturer == null) {
			return new ResponseEntity<Lecturer>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<Lecturer>(lecturer, HttpStatus.OK);
		}
	}
	//@PreAuthorize("hasAuthority('ADMIN ');
	@RequestMapping(value="{id}", method=RequestMethod.PUT)
	public ResponseEntity<Lecturer> updateLecturer(@Valid @RequestBody Lecturer lecturer, @PathVariable("id") String id) {
		Lecturer lecturerData = lecturerRepository.findOne(id);
		if(lecturerData == null) {
			return new ResponseEntity<Lecturer>(HttpStatus.NOT_FOUND);
		}
		lecturerData.setName(lecturer.getName());
		lecturerData.setPicture(lecturer.getPicture());
		lecturerData.setCourses(lecturer.getCourses());
		lecturerData.setDescription(lecturer.getDescription());
		
		Lecturer updateLecturer = lecturerRepository.save(lecturerData);
		return new ResponseEntity<Lecturer>(updateLecturer, HttpStatus.OK);
	}
	
	
	//delete by Id
	//@PreAuthorize("hasAuthority('ADMIN ');
	@RequestMapping(value="{id}", method=RequestMethod.DELETE)
	public void deleteLecturer(@PathVariable("id") String id) {
		lecturerRepository.delete(id);
	}
}
