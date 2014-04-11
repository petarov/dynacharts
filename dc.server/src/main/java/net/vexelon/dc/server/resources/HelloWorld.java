package net.vexelon.dc.server.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
 
@Path("helloworld")
public class HelloWorld {
    public static final String CLICHED_MESSAGE = "Hello World PETYE!";
 
@GET
@Produces("text/plain")
    public String getHello() {
        return CLICHED_MESSAGE;
    }
}
