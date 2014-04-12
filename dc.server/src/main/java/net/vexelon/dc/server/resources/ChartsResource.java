package net.vexelon.dc.server.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;

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
		Response r = Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
				.entity("{id: 'http://localhost:8080/test'}")
				.build();
		return r;
	}	
 
	@POST @Path("/create")
    public Response createChart(ChartPojo chart) {
//		System.out.println(content);
		
		Response r = Response.status(Response.Status.OK)
				.type(MediaType.APPLICATION_JSON)
//				.entity(new Gson().toJson(chart))
				.build();
		return r;
	}
	
//    @GET
//	@Produces("text/plain")
//    public String getHello() {
//        return CLICHED_MESSAGE;
//    }
    
//	@POST
//	@Consumes("text/xml")
//	public void putContainer() {
//	    System.out.println("POST CONTAINER " + container);
//	 
//	    URI uri = uriInfo.getAbsolutePath();
//	    Container c = new Container(container, uri.toString());
//	 
//	    Response r;
//	    if (!MemoryStore.MS.hasContainer(c)) {
//	        r = Response.created(uri).build();
//	    } else {
//	        r = Response.noContent().build();
//	    }
//	 
//	    MemoryStore.MS.createContainer(c);
//	    return r;
//	}
	
//    @GET
//    @Produces("text/xml")
//    public String getChart(@PathParam("id") String chartId) {
//    	String result = "<user id=\"1\" name=\"" + chartId + "\" />";
//    	return result;
//    }    
}
