package net.vexelon.dc.server.modules;

import net.vexelon.dc.server.services.charts.ChartsService;
import net.vexelon.dc.server.services.charts.ChartsServiceImpl;

public class MainModule extends AbstractModuleBase {

	@Override
	protected void configure() {
		
		bind(ChartsService.class).toInstance(ChartsServiceImpl.newInstance());

	}

}
