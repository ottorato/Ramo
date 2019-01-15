package com.rato.ramo.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "CPE")
public class CPE {
	private Long id;
	private String nombre;
	private String serie;
	private String suscrptor;
	private Model model;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
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
	@Column(name = "SERIE", nullable = false)
	public String getSerie() {
		return serie;
	}
	public void setSerie(String serie) {
		this.serie = serie;
	}
	
	@Basic
	@Column(name = "SUSCRIPTOR", nullable = false)
	public String getSuscrptor() {
		return suscrptor;
	}
	public void setSuscrptor(String suscrptor) {
		this.suscrptor = suscrptor;
	}
	
	@ManyToOne
	@JoinColumn(name="MODEL_ID")
	public Model getModel() {
		return model;
	}
	public void setModel(Model model) {
		this.model = model;
	}
}
