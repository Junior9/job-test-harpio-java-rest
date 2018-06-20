package com.harpio.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.runners.MockitoJUnitRunner;

import com.harpio.model.Person;
import com.harpio.respository.PersonRespository;

@RunWith(MockitoJUnitRunner.class)
public class PersonServiceTest {
	
	@InjectMocks
	private PersonService personService;
	
	@Mock
	private PersonRespository personRepository;

	private final String NAME = "Paulo"; 
	private Person person;
	private Iterable<Person> persons;
	
	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
		person = new Person(NAME);
	}
	
	@Test
	public void getAllPersonTest() {
		when(personRepository.findAll()).thenReturn( Arrays.asList(new Person("Francisco"),new Person("Francisco")));
		persons = personService.all();
		assertNotNull(persons);
		verify(personRepository).findAll();
	}
	
	@Test
	public void saveTest() {
		when(personRepository.save(person)).thenReturn(person);
		Person personSalvo  = personRepository.save(person);
		assertNotNull(personSalvo);
		assertEquals(NAME, personSalvo.getName());
		verify(personRepository).save(person);
	}
	
}
