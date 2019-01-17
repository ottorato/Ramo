package com.rato.ramo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rato.ramo.dto.EstadoDTO;
import com.rato.ramo.dto.RespuestaAngularDTO;
import com.rato.ramo.model.Estado;
import com.rato.ramo.model.Pais;
import com.rato.ramo.service.EstadoSerivce;
import com.rato.ramo.service.PaisService;

@Controller
@RequestMapping("/catalogo")
public class CatalogosController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @Autowired
    private PaisService paisService;
    
    @Autowired
    private EstadoSerivce estadoSerivce;
    
    @ResponseBody
    @RequestMapping(value="/listaPaises", method = RequestMethod.GET)
    public RespuestaAngularDTO listaPaises() {
    	logger.info("Recuperando países");
    	List<Pais> paises = paisService.findAll();
    	RespuestaAngularDTO respuesta = new RespuestaAngularDTO(0, "", paises);
    	
    	return respuesta;
    }
    
    @ResponseBody
    @RequestMapping(value="/listaEstadosPaises", method = RequestMethod.GET)
    public RespuestaAngularDTO listaEstadosPaises() {
    	logger.info("Recuperando estados y países...");
    	Map<String, Object> mapa = new HashMap<>();
    	
    	List<Pais> paises = paisService.findAll();
    	List<Estado> estados = estadoSerivce.findAll();
    	mapa.put("paises", paises);
    	mapa.put("estados", estados);
    	
    	RespuestaAngularDTO respuesta = new RespuestaAngularDTO(0, "", mapa);
    	
    	return respuesta;
    }
    
    @ResponseBody
    @RequestMapping(value="/guardarEstado", method = RequestMethod.POST)
    public RespuestaAngularDTO guardaPais(@RequestBody EstadoDTO estado) {
    	logger.info("Guardando estado");
    	Pais pais = paisService.findById(estado.getIdPais());
    	Estado estado2 = new Estado(estado.getId(), estado.getNombre(), estado.getNombreCorto(), pais);
    	estado2 = estadoSerivce.save(estado2);
    	
    	RespuestaAngularDTO respuesta = new RespuestaAngularDTO(0, "Registro guardado exitosamente", estado2);
    	
    	return respuesta;
    }
}
