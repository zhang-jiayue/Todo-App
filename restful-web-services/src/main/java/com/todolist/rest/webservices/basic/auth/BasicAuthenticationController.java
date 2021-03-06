package com.todolist.rest.webservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller 
@RestController
@CrossOrigin(origins="http://localhost:4200")

public class BasicAuthenticationController {
	//GET
	//URI - /hello-world
	//method -"Hello World"
	

	//hello-world-bean
	@GetMapping(path = "/basicauth")	//mapping a get request to string "/hello-world"
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("Your are authenticated");

	}
}