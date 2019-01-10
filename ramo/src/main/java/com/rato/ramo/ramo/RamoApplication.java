package com.rato.ramo.ramo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.rato.ramo")
@EntityScan(basePackages = {"com.rato.ramo.model"})
@EnableJpaRepositories(basePackages = {"com.rato.ramo.repository"})
public class RamoApplication {

	public static void main(String[] args) {
		SpringApplication.run(RamoApplication.class, args);
	}

}

