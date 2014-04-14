/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server.modules;

import net.vexelon.dc.server.conf.Configuration;

import com.google.inject.AbstractModule;

/**
 * BaseModule binds instances common to all modules in the application
 * 
 * @author p.petrov
 *
 */
public class BaseModule extends AbstractModule {
	
	/**
	 * Static Configuration instance
	 * This instance will be created during the bootstrap process. We use exactly <b>one</b> 
	 * configuration throughout all modules.
	 */
	public static Configuration configurationInstance;

	@Override
	protected void configure() {
		bind(Configuration.class).toInstance(configurationInstance);

	}
}
