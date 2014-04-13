package net.vexelon.dc.server.pojo;

import com.google.gson.Gson;

public abstract class PojoAbstact {
	
	protected static final Gson s_Gson = new Gson();
	
	public String toJSON() {
		return s_Gson.toJson(this);
	}

}
