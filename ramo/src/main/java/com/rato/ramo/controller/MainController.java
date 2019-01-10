package com.rato.ramo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.rato.ramo.model.Pais;
import com.rato.ramo.repository.PaisRepository;

@RequestMapping(value = "/")
@Controller
public class MainController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @Autowired
    private PaisRepository paisRepo;

	@RequestMapping(value = "main", method = RequestMethod.GET)
	public ModelAndView main() {
		logger.info("Ctrl working fine.");
		Pais pais = new Pais(1l, "México", "MX");
		paisRepo.save(pais);
		return new ModelAndView("main");
	}
	
	@RequestMapping(value = "error", method = RequestMethod.GET)
	public ModelAndView error() {
		System.out.println("Ctrl");
		return new ModelAndView("main");
	}
}
