/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server.conf;

import java.math.BigInteger;

public interface Configuration {
	
	public void load() throws ConfigException;
	
	public void reload() throws ConfigException;
	
	public int getOptionsCount();
	
	public Object getValue(Options option);
	
	public String getString(Options option);
	
	public long getLong(Options option);
	
	public int getInt(Options option);
	
	public BigInteger getBigInteger(Options option);
	
}
