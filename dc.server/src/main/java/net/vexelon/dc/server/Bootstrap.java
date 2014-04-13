/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import net.vexelon.dc.server.conf.ConfigException;
import net.vexelon.dc.server.conf.Configuration;
import net.vexelon.dc.server.conf.INIConfiguration;
import net.vexelon.dc.server.conf.Options;
import net.vexelon.dc.server.defs.Globals;

import org.apache.log4j.PropertyConfigurator;
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
	
	/*
	 * Constants
	 */
	private static final String TPL_DIR = "templates/";
	private static final String TPL_EXTENSION = ".tpl";
	
	private static final Path TPL_LOG4J_PATH = Paths.get(TPL_DIR, Globals.LOGGING_LOG4J_NAME + TPL_EXTENSION);
	private static final Path TPL_CONFIG_PATH = Paths.get(TPL_DIR, Globals.SERVER_CONF_FILE + TPL_EXTENSION);
	
	/*
	 * Vars
	 */
	
	private BootstrapRegistry _registry = new BootstrapRegistry();
	
	
	public void init() throws BootException {
		
		/*
		 * Make sure required environment variables are set
		 */
		String configDir = System.getenv(Globals.ENV_CONFIG_DIR);
		if (configDir == null) {
			throw new BootException("Required environment variable " + Globals.ENV_CONFIG_DIR + " is not set!");
		}
		
//		String databaseDir = System.getenv(Globals.ENV_DATA_DIR);
//		if (databaseDir == null) {
//			throw new BootException("Required environment variable " + Globals.ENV_DATA_DIR + " is not set!");
//		}		
		
		/*
		 * Setup logging
		 */
		Path log4jPath = Paths.get(configDir, Globals.LOGGING_LOG4J_NAME);
		try {
			validateResourceExists(log4jPath, TPL_LOG4J_PATH);
		} catch (IOException e) {
			throw new BootException(String.format("Failed to copy %s to %s ! (%s)", 
					Globals.LOGGING_LOG4J_NAME, configDir, e.toString()));
		}
		
		PropertyConfigurator.configureAndWatch(log4jPath.toString(), Globals.LOGGING_REFRESH_PERIOD);

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
		
		Path configPath = Paths.get(configDir, Globals.SERVER_CONF_FILE);
		try {
			validateResourceExists(configPath, TPL_CONFIG_PATH);
			Configuration configINI = new INIConfiguration(configPath);
			_registry.setGlobalConfiguraiton(configINI);
		} catch (IOException e) {
			throw new BootException(
					String.format("Failed to copy %s to %s !", Globals.SERVER_CONF_FILE, configDir), e);
		} catch (ConfigException e) {
			throw new BootException(
					String.format("Failed to parse %s !", Globals.SERVER_CONF_FILE), e);			
		}
		
		/*
		 * Start self-tests
		 */
		// TODO:
		
		/*
		 * Find embedded database
		 */
//		Path databasePath = Paths.get(databaseDir, Globals.DATABASE_NAME);
//		try {
//			validateResourceExists(databasePath, TPL_DATABASE_NAME);
//		} catch (IOException e) {
//			log.error(String.format("Failed to copy database file %s to %s !",
//					Globals.CONF_CONFIG_NAME, configDir), e);
//			return; // Fatal!
//		}
//		Registry.getInstance().setDatabasePath(databasePath);
		
		//TODO sync NTP server
		
		log.info("{} is starting ...", _registry.getGlobalConfiguraiton().getString(Options.SERVER_NAME));		
	}
	
	private void validateResourceExists(Path destination, Path resourcePath) throws IOException  {
//		try {
			if (!destination.toFile().exists()) {
//				InputStream is = getResourceAsStream(getServletContext(), resourcePath);
				Files.copy(resourcePath, destination);
			}
//		} catch (Exception e) {
//			System.err.println(String.format("Failed to copy %s to %s ! (%s)", 
//					resourcePath, destination, e.toString()));
//			return; // Fatal!
//		}			
	}	
	
	public void destroy() {
		// Leer
	}
	
	public BootstrapRegistry getRegistry() {
		return _registry;
	}

	public void setRegistry(BootstrapRegistry registry) {
		this._registry = registry;
	}	
	
}
