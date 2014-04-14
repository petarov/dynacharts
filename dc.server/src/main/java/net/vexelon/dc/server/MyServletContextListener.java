/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MyServletContextListener implements ServletContextListener {
	
	private static final Logger log = LoggerFactory.getLogger(MyServletContextListener.class);

	public MyServletContextListener() {
		// empty
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		log.info("*** App exit ***");
		// TODO Auto-generated method stub
	}

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		log.info("*** App boot ***");

		Bootstrap bootstrap = new Bootstrap();
		try {
			bootstrap.init();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
