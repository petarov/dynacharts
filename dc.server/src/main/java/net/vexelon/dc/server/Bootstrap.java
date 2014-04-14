/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server;

import net.vexelon.dc.server.conf.ConfigException;
import net.vexelon.dc.server.conf.Configuration;
import net.vexelon.dc.server.conf.Options;
import net.vexelon.dc.server.conf.SysPropsConfiguration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 
 * Bootstrap class must take care of:
 * <ol>
 * <li> Loading configuration files
 * <li> Validating loaded settings
 * <li> Perform system self tests
 * <li> Create configuration registry instance
 * 
 * @author p.petrov
 *
 */
public class Bootstrap {
	
	private static final Logger log = LoggerFactory.getLogger(Bootstrap.class);
	
	private Configuration _configuration = new SysPropsConfiguration();
	
	public void init() throws BootException {
		
		/*
		 * Make sure required environment variables are set
		 */
//		String configDir = System.getenv(Globals.ENV_CONFIG_DIR);
//		if (configDir == null) {
//			throw new BootException("Required environment variable " + Globals.ENV_CONFIG_DIR + " is not set!");
//		}
		
		/*
		 * Setup logging
		 */
//		Path log4jPath = Paths.get(configDir, Globals.LOGGING_LOG4J_NAME);
//		try {
//			validateResourceExists(log4jPath, TPL_LOG4J_PATH);
//		} catch (IOException e) {
//			throw new BootException(String.format("Failed to copy %s to %s ! (%s)", 
//					Globals.LOGGING_LOG4J_NAME, configDir, e.toString()));
//		}
//		
//		PropertyConfigurator.configureAndWatch(log4jPath.toString(), Globals.LOGGING_REFRESH_PERIOD);

		log.info("Server is booting ...");
		//TODO add version manifest reader
		
		/*
		 * Run sanity checks
		 */
		try {
			SanityTest.run();
		} catch (Exception e) {
			throw new BootException("Self testing has failed!", e);
		}
		
		/*
		 * Init/Load configurations
		 */
		log.info("Loading configurations ...");
		
		try {
			_configuration = new SysPropsConfiguration();
			_configuration.load();
		} catch (ConfigException e) {
			throw new BootException("Failed to load configuration properties!", e);			
		}
		
		/*
		 * Start self-tests
		 */
		// TODO:
		
		//TODO sync NTP server
		
		log.info("{} is starting ...", _configuration.getString(Options.SERVER_NAME));		
	}
	
//	private void validateResourceExists(Path destination, Path resourcePath) throws IOException  {
////		try {
//			if (!destination.toFile().exists()) {
////				InputStream is = getResourceAsStream(getServletContext(), resourcePath);
//				Files.copy(resourcePath, destination);
//			}
////		} catch (Exception e) {
////			System.err.println(String.format("Failed to copy %s to %s ! (%s)", 
////					resourcePath, destination, e.toString()));
////			return; // Fatal!
////		}			
//	}	
	
	public void destroy() {
		// Leer
	}
	
	public Configuration getConfiguration() {
		return _configuration;
	}
	
}
