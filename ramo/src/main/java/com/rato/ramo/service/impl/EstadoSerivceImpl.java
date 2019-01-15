package com.rato.ramo.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rato.ramo.model.Estado;
import com.rato.ramo.repository.EstadoRepository;
import com.rato.ramo.service.EstadoSerivce;

@Service
@Transactional
public class EstadoSerivceImpl implements EstadoSerivce {

	@Autowired
    private EstadoRepository estadoRepository;
	
	@Override
	public Estado save(Estado estado) {

		estado = estadoRepository.save(estado);
		return null;
	}
	
	@Override
	public Estado findById(Long id) {
		Estado estado = estadoRepository.findById(id).get();
		return estado;
	}

	@Override
	public List<Estado> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
