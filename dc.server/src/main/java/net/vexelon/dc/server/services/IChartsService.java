package net.vexelon.dc.server.services;

import net.vexelon.dc.server.pojo.ChartPojo;

public interface IChartsService extends IService {
	
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
