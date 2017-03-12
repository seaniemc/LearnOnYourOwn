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

import todoapp.models.Courses;
import todoapp.models.Lecturer;
import todoapp.repositories.CoursesRepository;

@RestController
@RequestMapping("/api/courses")
public class CoursesController {
	@Autowired
	CoursesRepository coursesRepository;
	
	//return all data
	@RequestMapping(method=RequestMethod.GET)
	public List<Courses> getAllCourses() {
		return coursesRepository.findAll();
	}

	//create statement
	@RequestMapping(method=RequestMethod.POST)
	public Courses createCourse(@Valid @RequestBody Courses courses) {
		return coursesRepository.save(courses);
	}

	//return by Name
//	@RequestMapping(value="{name}", method=RequestMethod.GET)
//	public ResponseEntity<Courses> getLecturerByName(@PathVariable("name") String name) {
//		Courses courses = coursesRepository.findByName(name);
//		if(courses == null) {
//			return new ResponseEntity<Courses>(HttpStatus.NOT_FOUND);
//		} else {
//			return new ResponseEntity<Courses>(courses, HttpStatus.OK);
//		}
//	}
	//return by Id
		@RequestMapping(value="{id}", method=RequestMethod.GET)
		public ResponseEntity<Courses> getCourseById(@PathVariable("id") String id) {
			Courses courses = coursesRepository.findOne(id);
			if(courses == null) {
				return new ResponseEntity<Courses>(HttpStatus.NOT_FOUND);
			} else {
				return new ResponseEntity<Courses>(courses, HttpStatus.OK);
			}
		}
	
	@RequestMapping(value="{id}", method=RequestMethod.PUT)
	public ResponseEntity<Courses> updateCourse(@Valid @RequestBody Courses courses, @PathVariable("id") String id) {
		Courses courseData = coursesRepository.findOne(id);
		if(courseData == null) {
			return new ResponseEntity<Courses>(HttpStatus.NOT_FOUND);
		}
		courseData.setName(courses.getName());
		courseData.setLecturer(courses.getLecturer());
		courseData.setPicture(courses.getPicture());
		courseData.setVideo(courses.getVideo());
		courseData.setDescription(courses.getDescription());
		courseData.setEnroled(courses.getEnroled());
		
		Courses updateCourse = coursesRepository.save(courseData);
		return new ResponseEntity<Courses>(updateCourse, HttpStatus.OK);
	}
	
	
	//delete by Id
	@RequestMapping(value="{id}", method=RequestMethod.DELETE)
	public void deleteCourse(@PathVariable("id") String id) {
		coursesRepository.delete(id);
	}
}
