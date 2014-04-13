/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server.conf;

/**
 * This enumeration holds names and types of properties we expect to be present
 * in the configuration INI file.
 * 
 * @author p.petrov
 *
 */
public enum Options {
	
	/*
	 * Server 
	 */
	
	SERVER_NAME("server.name", String.class, true),
	SERVER_ADDRESS("server.address", String.class, true),
	
	;
	
	String name;
	Class<?> type;
	boolean mandatory;
	
	Options(String name, Class<?> type, boolean mandatory) {
		this.name = name;
		this.type = type;
		this.mandatory = mandatory;
	}
	
	Options(String name, Class<?> type) {
		this.name = name;
		this.type = type;
		this.mandatory = false;		
	}
	
	public String getName() {
		return this.name;
	}
	
	public Class<?> getType() {
		return this.type;
	}
	
	public boolean isMandatory() {
		return this.mandatory;
	}

}
