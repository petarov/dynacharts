package net.vexelon.dc.server.services;

import java.util.Map;

import com.google.common.collect.ImmutableMap;

import net.vexelon.dc.server.Constants;
import net.vexelon.dc.server.pojo.ChartPojo;

public class ChartsService implements IChartsService {
	
	private ImmutableMap<String, String> resources = ImmutableMap.of(
			"url", "/charts");
	
	protected ChartsService() {
		// no instances ...
	}

	@Override
	public String getName() {
		return Constants.RESOURCE_CHARTS_1_0;
	}

	@Override
	public Map<String, String> getResources() {
		return resources;
	}
	
	@Override
	public ChartPojo createChart() throws ServiceException {
		// TODO Auto-generated method stub
		throw new ServiceException("Not implemented!");
	}
	
	@Override
	public ChartPojo updateChart() throws ServiceException {
		// TODO Auto-generated method stub
		throw new ServiceException("Not implemented!");
	}
	
	@Override
	public void deleteChart(int id) throws ServiceException {
		// TODO Auto-generated method stub
		throw new ServiceException("Not implemented!");
	}
	
	// --- static -----------------------------------------------------------
	public static IChartsService newInstance() {
		return new ChartsService();
	}

}
