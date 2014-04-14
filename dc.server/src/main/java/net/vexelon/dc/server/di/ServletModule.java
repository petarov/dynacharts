package net.vexelon.dc.server.di;

import net.vexelon.dc.server.conf.Configuration;

/**
 * Dependency Injection bindings entry point. 
 * Binds instances common to all modules in the application.
 * 
 * @author p.petrov
 *
 */
public class ServletModule extends com.google.inject.servlet.ServletModule {
	
	/**
	 * Static Configuration instance
	 * This instance will be created during the bootstrap process. We use exactly <b>one</b> 
	 * configuration throughout all modules.
	 */
	public static Configuration configurationInstance;	

	@Override
	protected void configureServlets() {
		super.configureServlets();
		
		bind(Configuration.class).toInstance(configurationInstance);
		
		install(new ServiceModule());
	}

}
