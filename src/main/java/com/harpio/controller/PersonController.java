package com.harpio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.harpio.model.Person;
import com.harpio.service.PersonService;

@RestController
public class PersonController {
	
	@Autowired
	private PersonService personService;
	
	@PostMapping(value="/person/save",consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public void save(@RequestBody Person person) {
		personService.save(person);
	}
	
	@GetMapping("/person/all")
	public Iterable<Person> getAll() {
		return personService.all();	
	}
	
	@DeleteMapping("/person/delete/{id}")
	public void delete(@PathVariable int id) {
		personService.delete(id);
	}
	
}
