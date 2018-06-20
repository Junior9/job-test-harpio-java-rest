package com.harpio.respository;

import org.springframework.data.repository.CrudRepository;

import com.harpio.model.Company;

public interface CompanyRepository extends CrudRepository<Company, String> {

}
