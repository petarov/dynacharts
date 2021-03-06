/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server.services.charts;

import java.util.Map;

import javax.inject.Inject;

import com.google.common.collect.ImmutableMap;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Singleton;

import net.vexelon.dc.server.conf.Configuration;
import net.vexelon.dc.server.conf.Options;
import net.vexelon.dc.server.defs.Globals;
import net.vexelon.dc.server.di.ServiceModule;
import net.vexelon.dc.server.pojo.ChartPojo;
import net.vexelon.dc.server.services.AbstractService;
import net.vexelon.dc.server.services.ServiceException;

/**
 * Thread-safe Charts services implementation
 * 
 * @author p.petrov
 *
 */
@Singleton
public class ChartsServiceImpl extends AbstractService implements ChartsService {
	
	private ImmutableMap<String, String> resources;
	
	@Inject
	protected ChartsServiceImpl(Configuration configuration) {
		super(configuration);
		
		/*
		 * Initializations 
		 */
		resources = ImmutableMap.of(
				"url", configuration.getString(Options.SERVER_ADDRESS) + "/charts");
	}

	@Override
	public String getName() {
		return Globals.RESOURCE_CHARTS_1_0;
	}

	@Override
	public Map<String, String> getResources() {
		return resources;
	}
	
	@Override
	public ChartPojo createChart() throws ServiceException {
		// TODO Auto-generated method stub
		throw new ServiceException("Not implemented!");
	}
	
	@Override
	public ChartPojo updateChart() throws ServiceException {
		// TODO Auto-generated method stub
		throw new ServiceException("Not implemented!");
	}
	
	@Override
	public void deleteChart(int id) throws ServiceException {
		// TODO Auto-generated method stub
		throw new ServiceException("Not implemented!");
	}
	
	// --- static -----------------------------------------------------------
	public static ChartsService newInstance() {
		Injector injector = Guice.createInjector(new ServiceModule());
		return injector.getInstance(ChartsServiceImpl.class);
	}

}
