package com.rato.ramo.dto;

public class RespuestaAngularDTO {
	private Integer valor;
	private String mensaje;
	private Object objeto;
	
	
	public RespuestaAngularDTO(Integer valor, String mensaje, Object objeto) {
		super();
		this.valor = valor;
		this.mensaje = mensaje;
		this.objeto = objeto;
	}
	public Integer getValor() {
		return valor;
	}
	public void setValor(Integer valor) {
		this.valor = valor;
	}
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public Object getObjeto() {
		return objeto;
	}
	public void setObjeto(Object objeto) {
		this.objeto = objeto;
	}
}
