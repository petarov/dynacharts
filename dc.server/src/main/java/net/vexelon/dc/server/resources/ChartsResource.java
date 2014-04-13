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

import net.vexelon.dc.server.pojo.ChartPojo;
 
/**
 * Charts resources stub. 
 * All sub operations and requests related to CRUD of charts are described here.
 * 
 * @author ppetrov
 *
 */
@Path("/charts")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ChartsResource {
	
	@GET
    public Response getResources() { 
		System.out.println("@GET ROOT");
		
		return Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
				.entity("{id: 'http://localhost:8080/test'}")
				.build();
	}
	
	@GET @Path("/{id}")
    public Response getChart(@PathParam("id") String chartId) { 
		System.out.println("@GET " + chartId);
		
		return Response.status(Response.Status.OK)
				.type(MediaType.TEXT_PLAIN)
				.build();
	}	
	
	@POST
    public Response createChart(ChartPojo json) {
		System.out.println("@POST");
		return Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
//				.entity(new Gson().toJson(json))
				.entity(json)
				.build();
	}

	@PATCH
	public Response updateChart(ChartPojo json) {
		System.out.println("@PATCH");
		return Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
				.entity(json)
				.build();
	}
	
	@DELETE @Path("/{id}")
	public Response deleteChart(@PathParam("id") String chartId) {
		
		//TODO: proper authorization
		
		System.out.println("@DELETE " + chartId);
		return Response.status(Response.Status.OK)
				.type(MediaType.TEXT_PLAIN)
				.build();
	}	
 
}
