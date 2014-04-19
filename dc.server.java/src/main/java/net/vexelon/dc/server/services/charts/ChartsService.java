/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server.services.charts;

import net.vexelon.dc.server.pojo.ChartPojo;
import net.vexelon.dc.server.services.Service;
import net.vexelon.dc.server.services.ServiceException;

public interface ChartsService extends Service {
	
	/**
	 * Create a new chart given input parameters.
	 * @return New {@link ChartPojo} instance.
	 * @throws ServiceException
	 */
	ChartPojo createChart() throws ServiceException;
	
	/**
	 * 
	 * @return Updated {@link ChartPojo} instance.
	 * @throws ServiceException
	 */
	ChartPojo updateChart() throws ServiceException;
	
	/**
	 * Remove chart from data storage
	 * @throws ServiceException
	 */
	void deleteChart(int id) throws ServiceException;

}
