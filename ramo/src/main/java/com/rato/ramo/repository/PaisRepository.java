package com.rato.ramo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rato.ramo.model.Pais;

@Repository
public interface PaisRepository extends JpaRepository<Pais, Long> {

}
