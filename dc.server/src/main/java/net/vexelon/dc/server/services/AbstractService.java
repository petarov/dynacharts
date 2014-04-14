/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server.services;

import net.vexelon.dc.server.conf.Configuration;

import com.google.inject.Inject;

public abstract class AbstractService implements Service {

	/*
	 * Injected
	 */
	
	protected Configuration configuration;
	
	@Inject
	protected AbstractService(Configuration configuration) {
		this.configuration = configuration;
	}	

}
