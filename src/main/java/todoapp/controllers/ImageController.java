//package todoapp.controllers;
//
//import java.util.List;
//
//import javax.validation.Valid;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import todoapp.models.Images;
//import todoapp.repositories.ImageRepository;
//
//@RestController
//@RequestMapping("/api/images")
//public class ImageController {
//	@Autowired
//	ImageRepository imageRepository;
//	
//	//return all data
//	@RequestMapping(method=RequestMethod.GET)
//	public List<Images> getAllImages() {
//		return imageRepository.findAll();
//	}
//
//	//create statement
//	@RequestMapping(method=RequestMethod.POST)
//	public Images createImage(@Valid @RequestBody Images image) {
//		return imageRepository.save(image);
//	}
//
//	//return by Id
//	@RequestMapping(value="{id}", method=RequestMethod.GET)
//	public ResponseEntity<Images> getCourseById(@PathVariable("id") String id) {
//		Images image = imageRepository.findOne(id);
//		if(image == null) {
//			return new ResponseEntity<Images>(HttpStatus.NOT_FOUND);
//		} else {
//			return new ResponseEntity<Images>(image, HttpStatus.OK);
//		}
//	}
//	
//	//delete by Id
//	@RequestMapping(value="{id}", method=RequestMethod.DELETE)
//	public void deleteImage(@PathVariable("id") String id) {
//		imageRepository.delete(id);
//	}
//}
