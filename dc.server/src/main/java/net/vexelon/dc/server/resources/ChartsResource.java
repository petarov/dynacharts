/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/
package net.vexelon.dc.server.resources;

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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import net.vexelon.dc.server.defs.Globals;
import net.vexelon.dc.server.pojo.ChartPojo;
import net.vexelon.dc.server.services.ChartsService;
import net.vexelon.dc.server.services.IChartsService;
 
/**
 * Charts resources stub. 
 * All sub operations and requests related to CRUD of charts are described here.
 * 
 * @author ppetrov
 *
 */
@Path(Globals.RESOURCE_CHARTS_1_0)
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ChartsResource {
	
	private static final Logger log = LoggerFactory.getLogger(ChartsResource.class);
	
	protected IChartsService chartService = ChartsService.newInstance(); 
	
	@GET
    public Response getResources() { 
		log.debug("@GET ROOT");
		
		return Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
				.entity(chartService.getResources())
				.build();
	}
	
	@GET @Path("/{id}")
    public Response getChart(@PathParam("id") String chartId) { 
		log.debug("@GET {}", chartId);
		
		return Response.status(Response.Status.OK)
				.type(MediaType.TEXT_PLAIN)
				.build();
	}	
	
	@POST
    public Response createChart(ChartPojo json) {
		log.info("@POST");
		return Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
//				.entity(new Gson().toJson(json))
				.entity(json)
				.build();
	}

	@PATCH
	public Response updateChart(ChartPojo json) {
		log.debug("@PATCH");
		return Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
				.entity(json)
				.build();
	}
	
	@DELETE @Path("/{id}")
	public Response deleteChart(@PathParam("id") String chartId) {
		
		//TODO: proper authorization
		
		log.debug("@DELETE {}", chartId);
		return Response.status(Response.Status.OK)
				.type(MediaType.TEXT_PLAIN)
				.build();
	}	
 
}
