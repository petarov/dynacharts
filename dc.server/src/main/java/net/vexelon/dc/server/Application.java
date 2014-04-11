package net.vexelon.dc.server;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("resources")
public class Application extends ResourceConfig {
    public Application() {
    	/**
    	 * Location of REST resources
    	 */
        packages("net.vexelon.dc.server.resources");
    }
}