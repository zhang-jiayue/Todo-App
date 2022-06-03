package com.todolist.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller 
@RestController
public class HelloWorldController {
	//GET
	//URI - /hello-world
	//method -"Hello World"
	
	@GetMapping(path = "/hello-world")	//mapping a get request to string "/hello-world"
	@CrossOrigin(origins="http://localhost:4200")
	public String helloWorld() {
		return "Hello World";
	}
	//hello-world-bean
	@GetMapping(path = "/hello-world-bean")	//mapping a get request to string "/hello-world"
	@CrossOrigin(origins="http://localhost:4200")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World Bean");
	}
	
	@GetMapping(path="/hello-world/path-variable/{name}")
	@CrossOrigin(origins="http://localhost:4200")

	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
//		throw new RuntimeException("Something went wrong");
	}
}
