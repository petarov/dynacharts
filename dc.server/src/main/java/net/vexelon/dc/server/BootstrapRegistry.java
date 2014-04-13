/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server;

import java.nio.file.Path;

import net.vexelon.dc.server.conf.Configuration;

public class BootstrapRegistry {
	
	/*
	 *  Configurations
	 */
	private static Configuration _globalConfiguraiton;
	
	/*
	 * Data
	 */
	private static Path _databasePath;

	protected BootstrapRegistry() {
		// Leer
	}
	
	/**************************************************************************
	 * Getters and setters
	 */

	public Configuration getGlobalConfiguraiton() {
		return _globalConfiguraiton;
	}

	public void setGlobalConfiguraiton(Configuration _globalConfiguraiton) {
		BootstrapRegistry._globalConfiguraiton = _globalConfiguraiton;
	}	
	
	public Path getDatabasePath() {
		return _databasePath;
	}

	public void setDatabasePath(Path _databasePath) {
		BootstrapRegistry._databasePath = _databasePath;
	}	
}
