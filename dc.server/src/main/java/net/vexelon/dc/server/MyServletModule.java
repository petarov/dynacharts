package net.vexelon.dc.server;

import net.vexelon.dc.server.modules.MainModule;
import net.vexelon.dc.server.modules.ServiceModule;

import com.google.inject.servlet.ServletModule;

public class MyServletModule extends ServletModule {

	@Override
	protected void configureServlets() {
		super.configureServlets();
		
		install(new ServiceModule());
		install(new MainModule());
	}

}
