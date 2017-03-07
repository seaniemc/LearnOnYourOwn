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
//    public void run(String... args) throws Exception {
//    	implements CommandLineRunner
//    	repo.save(new User("tim@tim.ie", "TimM471", "TMiles","Tim Miles" ,2));
//    	repo.save(new User("logan@porter.ie", "Fireman97", "Porter77", "Logan Porter", 2));
//    	repo.save(new User("dasiy@patterson.ie", "DPattHype", "Patty", "Daisy Patterson", 2));
//    	repo.save(new User("katy@mc.ie", "MickyD75", "KMcD007", "Kathy McDonald", 2));
//    	repo.save(new User("mat@dix.ie", "MDixie", "Matty72", "Mathew Dixon", 2));
//    	repo.save(new User("mat@dix.ie", "MDixie", "Matty72", "Mathew Dixon", 2));
//    	
//    	System.out.println("Customers found with findAll():");
//		System.out.println("-------------------------------");
//    	for (User customer : repo.findAll()) {
//			System.out.println(customer);
//		}
//    }
}
