package net.vexelon.dc.server;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class ServletBootContext implements ServletContextListener {

	public ServletBootContext() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		System.out.println("!!App exit!!");
	}

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		System.out.println("!!App boot!!");
		try {
			SanityTest.run();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}

	}

}
