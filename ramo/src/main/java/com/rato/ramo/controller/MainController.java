package com.rato.ramo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping(value = "/")
@Controller
public class MainController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(value = "main", method = RequestMethod.GET)
	public ModelAndView main() {
		logger.info("Ctrl working fine.");
		return new ModelAndView("main");
	}
	
	@RequestMapping(value = "error", method = RequestMethod.GET)
	public ModelAndView error() {
		System.out.println("Ctrl");
		return new ModelAndView("main");
	}
}
