package com.harpio.respository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.harpio.model.Person;

@Repository
public interface PersonRespository extends CrudRepository<Person, String>  {

	Person findById(int id);

}
