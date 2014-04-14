/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server.di;

import net.vexelon.dc.server.services.charts.ChartsService;
import net.vexelon.dc.server.services.charts.ChartsServiceImpl;

import com.google.inject.AbstractModule;
import com.google.inject.Singleton;

/**
 * Binds instances and class types to Services
 * 
 * @author p.petrov
 *
 */
public class ServiceModule extends AbstractModule {

	@Override
	protected void configure() {
		
		bind(ChartsService.class).to(ChartsServiceImpl.class).in(Singleton.class);

	}

}
