package com.rato.ramo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rato.ramo.model.Estado;

@Repository
public interface EstadoRepository extends JpaRepository<Estado, Long> {

}
