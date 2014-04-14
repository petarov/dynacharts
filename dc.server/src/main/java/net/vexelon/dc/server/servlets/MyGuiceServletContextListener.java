package net.vexelon.dc.server.servlets;

import javax.servlet.ServletContextEvent;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import net.vexelon.dc.server.Bootstrap;
import net.vexelon.dc.server.modules.MainModule;
import net.vexelon.dc.server.modules.ServiceModule;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import com.google.inject.servlet.ServletModule;

public class MyGuiceServletContextListener extends GuiceServletContextListener {
	
	private static final Logger log = LoggerFactory.getLogger(MyGuiceServletContextListener.class);
	
	public static Injector injector;

	public MyGuiceServletContextListener() {}
	
	@Override
	protected Injector getInjector() {
		injector = Guice.createInjector(new ServletModule() {
			@Override
			protected void configureServlets() {
				super.configureServlets();
				bind(MainModule.class);
				
			}
		});
		return injector;
	}
	
	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		log.info("*** App exit ***");
	}

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		log.info("*** App boot ***");

//		Bootstrap bootstrap = new Bootstrap();
//		try {
//			bootstrap.init();
//		} catch (Exception e) {
//			throw new RuntimeException(e);
//		}
	}

}
