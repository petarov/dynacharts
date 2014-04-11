package net.vexelon.dc.server.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
 
@Path("/users/{username}")
public class HelloWorld {
	
    public static final String CLICHED_MESSAGE = "Hello World PETYE!";
 
//    @GET
//	@Produces("text/plain")
//    public String getHello() {
//        return CLICHED_MESSAGE;
//    }
    
    @GET
    @Produces("text/xml")
    public String getUser(@PathParam("username") String userName) {
    	String result = "<user id=\"1\" name=\"" + userName + "\" />";
    	return result;
    }    
}
