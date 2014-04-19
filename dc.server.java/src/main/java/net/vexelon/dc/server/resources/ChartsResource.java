/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server.resources;

import java.util.Date;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.examples.httppatch.PATCH;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormatter;
import org.joda.time.format.ISODateTimeFormat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.inject.servlet.RequestScoped;

import net.vexelon.dc.server.defs.Globals;
import net.vexelon.dc.server.pojo.ChartPojo;
import net.vexelon.dc.server.pojo.ResponsePojo;
import net.vexelon.dc.server.services.charts.ChartsService;
import net.vexelon.dc.utils.DateUtils;
 
/**
 * Charts resources stub. 
 * All sub operations and requests related to CRUD of charts are described here.
 * 
 * @author p.petrov
 *
 */
@Path(Globals.RESOURCE_CHARTS_1_0)
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
public class ChartsResource {
	
	private static final Logger log = LoggerFactory.getLogger(ChartsResource.class);
	
	private ChartsService chartService; 
	
	@Inject
	public ChartsResource(ChartsService chartService) {
		this.chartService = chartService;
	}
	
	/**
	 * <pre>
	 * GET /charts HTTP/1.1
	 * Accept: application/json
	 * </pre>
	 * 
	 * Get a list of available resources
	 * @return
	 */
	@GET
    public Response getResources() { 
		log.debug("@GET ROOT");
		
		return Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
				.entity(chartService.getResources())
				.build();
	}
	
	/**
	 * <pre>
	 * POST /charts HTTP/1.1
	 * Accept: application/json
	 * Content-Type: application/json
	 * </pre>
	 *  
	 * Create a new chart
	 * @param json
	 * @return
	 */
	@POST
    public Response createChart(ChartPojo json) {
		log.info("@POST");
		return Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
//				.entity(new Gson().toJson(json))
				.entity(json)
				.build();
	}
	
	/**
	 * <pre>
	 * GET /charts/{id} HTTP/1.1
	 * Accept: application/json
	 * </pre>
	 *  
	 * Get properties for given chart Id
	 * @param chartId
	 * @return
	 */
	@GET @Path("/{id}")
    public Response getChart(@PathParam("id") String chartId) { 
		log.debug("@GET {}", chartId);
		
		return Response.status(Response.Status.OK)
				.type(MediaType.TEXT_PLAIN)
				.build();
	}	

	/**
	 * <pre>
	 * PATCH /charts/{id} HTTP/1.1
	 * Accept: application/json
	 * Content-Type: application/json
	 * </pre>
	 *  
	 * Update properties for given chart Id
	 * @param chartId
	 * @param json
	 * @return
	 */
	@PATCH @Path("/{id}")
	public Response updateChart(@PathParam("id") String chartId, ChartPojo json) {
		log.debug("@PATCH");
		return Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
				.entity(json)
				.build();
	}
	
	/**
	 * <pre>
	 * DELETE /charts/{id} HTTP/1.1
	 * Accept: application/json
	 * </pre>
	 *  
	 * Remove chart from database
	 * @param chartId
	 * @return
	 */
	@DELETE @Path("/{id}")
	public Response deleteChart(@PathParam("id") String chartId) {
		
		//TODO: proper authorization
		
		ResponsePojo resp = new ResponsePojo();
		resp.setIsoDate(new DateTime().toString(ISODateTimeFormat.dateTime()))
			.setStatusCode(Response.Status.OK.getStatusCode())
			.setStatusMessage("OK");		
		
		log.debug("@DELETE {}", chartId);
		return Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
				.entity(resp.toJSON())
				.build();
	}
	
	/**
	 * <pre>
	 * POST /charts/{id} HTTP/1.1
	 * Accept: application/json
	 * Content-Type: text/plain
	 * </pre>
	 * 
	 * Update chart data
	 * @param json
	 * @return
	 */
	@POST @Path("/{id}")
	@Consumes(MediaType.TEXT_PLAIN)
    public Response updateChartDataCSV(@PathParam("id") String chartId, String csvData) {
		log.info("@POST");
		
		return Response.status(Response.Status.OK)
				.type(MediaType.TEXT_PLAIN)
				.entity(csvData)
				.build();
	}	
 
}
