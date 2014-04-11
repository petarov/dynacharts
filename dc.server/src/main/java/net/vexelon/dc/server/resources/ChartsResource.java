package net.vexelon.dc.server.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
 
/**
 * Charts resources stub. 
 * All sub operations and requests related to CRUD of charts are described here.
 * 
 * @author ppetrov
 *
 */
@Path("/charts")
public class ChartsResource {
	
//	@GET
//    @Produces({"application/json", "application/xml"})
//    public WebResourceList getMyResources() { 
//		
//	}	
 
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
	
    @GET
    @Produces("text/xml")
    public String getChart(@PathParam("id") String chartId) {
    	String result = "<user id=\"1\" name=\"" + chartId + "\" />";
    	return result;
    }    
}
