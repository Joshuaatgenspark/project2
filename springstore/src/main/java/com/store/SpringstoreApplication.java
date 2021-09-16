package com.store;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@EnableEncryptableProperties
@CrossOrigin(origins = "http://localhost:4200/")
@SpringBootApplication
public class SpringstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringstoreApplication.class, args);
	}

}
