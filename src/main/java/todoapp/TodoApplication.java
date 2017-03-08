package todoapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import todoapp.models.User;
import todoapp.repositories.UserRepository;

@SpringBootApplication
public class TodoApplication   {
	@Autowired
	 UserRepository repo;
     
    public static void main(String[] args) {
        SpringApplication.run(TodoApplication.class, args);
           
    }
}
