/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("resources")
public class Application extends ResourceConfig {
    public Application() {
        packages("net.vexelon.dc.server.resources", // App REST resources
        		"com.fasterxml.jackson.jaxrs.json", // support for JSON Body Reader/Writer
        		"org.glassfish.jersey.examples.httppatch" // support for HTTP PATCH
        		);
    }
}