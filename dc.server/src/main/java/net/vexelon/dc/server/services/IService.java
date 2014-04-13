package net.vexelon.dc.server.services;

import java.util.Map;

public interface IService {
	
	/**
	 * Unique resource path
	 * @return <code>String</code>
	 */
	String getName();

	/**
	 * List of sub-resources links provided by this resource
	 * @return Map of <code>String</code> key/value pairs describing name and url for 
	 * each resource.
	 */
	Map<String, String> getResources();	
}
