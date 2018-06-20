package com.harpio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harpio.model.Person;
import com.harpio.respository.CompanyRepository;
import com.harpio.respository.PersonRespository;

@Service
public class PersonService {

	@Autowired
	private PersonRespository personRepository;
	
	@Autowired
	private CompanyRepository companyRepository;
	
	public Boolean save(Person person) {
		person.setCompany(companyRepository.save(person.getCompany()));
		Person personSave = personRepository.save(person);
		if(personSave != null){
			return Boolean.TRUE;
		}
		return Boolean.FALSE;
	}

	public Iterable<Person> all() {
		return personRepository.findAll();
	}

	public void delete(int id) {
		Person person = personRepository.findById(id);
		if(person != null) {
			personRepository.delete(person);
		}
	}

}