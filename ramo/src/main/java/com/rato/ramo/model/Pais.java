package com.rato.ramo.model;

import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "PAIS")
public class Pais {
	private Long id;
	private String nombre;
	private String nombreCorto;
	private List<Estado> estados;
	
	public Pais() {
		super();
	}
	
	public Pais(Long id, String nombre, String nombreCorto) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.nombreCorto = nombreCorto;
	}

	@Id
	@Column(name = "ID", nullable = false)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	@Basic
	@Column(name = "NOMBRE", nullable = false)
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	@Basic
	@Column(name = "NOMBRECORTO")
	public String getNombreCorto() {
		return nombreCorto;
	}
	public void setNombreCorto(String nombreCorto) {
		this.nombreCorto = nombreCorto;
	}
	
	@OneToMany(targetEntity=Estado.class, mappedBy = "pais", cascade = CascadeType.ALL, fetch=FetchType.EAGER)
	public List<Estado> getEstados() {
		return estados;
	}
	public void setEstados(List<Estado> estados) {
		this.estados = estados;
	}

}
