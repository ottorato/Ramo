package com.rato.ramo.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rato.ramo.model.Pais;
import com.rato.ramo.repository.PaisRepository;
import com.rato.ramo.service.PaisService;

@Service
@Transactional
public class PaisServiceImpl implements PaisService {
	
	
	@Autowired
    private PaisRepository paisRepo;

	@Override
	public Pais save(Pais pais) {
		pais = paisRepo.save(pais);
		
		return pais;
	}
	
	@Override
	public Pais findById(Long id) {
		Pais pais = paisRepo.findById(id).get();
		
		return pais;
	}
	
	@Override
	public List<Pais> findAll() {
		List<Pais> paises = paisRepo.findAll();
		
		return paises;
	}
}