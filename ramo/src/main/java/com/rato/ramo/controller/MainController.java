package com.rato.ramo.controller;

import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.rato.ramo.model.Pais;
import com.rato.ramo.service.PaisService;

@Controller
public class MainController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @Autowired
    private PaisService paisService;

	@RequestMapping(value = {"/", "/CP", "/modems"}, method = RequestMethod.GET)
	public ModelAndView main() {
		logger.info("Ctrl working fine.");
		Pais pais = new Pais(2l, "United States", "USA");
		paisService.save(pais);
		
		HashMap<String, String> hm = new HashMap<>();
		hm.put("jQueryVersion", "2.1.3");
		hm.put("angularVersion", "1.5.6");
		hm.put("bootstrapUIVersion", "2.5.0");
		hm.put("bootstrapVersion", "3.3.4");
		return new ModelAndView("appBase", hm);
	}
	
	@RequestMapping(value = "error", method = RequestMethod.GET)
	public ModelAndView error() {
		System.out.println("Ctrl");
		return new ModelAndView("main");
	}
}
