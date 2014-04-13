/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ServletBootContext implements ServletContextListener {
	
	private static final Logger log = LoggerFactory.getLogger(ServletBootContext.class);

	public ServletBootContext() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		log.info("*** App exit ***");
	}

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		log.info("*** App boot ***");
		try {
			SanityTest.run();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
