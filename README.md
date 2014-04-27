DynaCharts
===========

A Web platform that generates and provides real-time updates of charts and diagrams.

# Getting Started

  * `dc.server` - Node.js REST backend
  * `dc.server.java` - Java REST backend (Deprecated)

# Projects
## DynaCharts Server
### Requirements

  * Node.js v0.10.x

### Usage

Go to directory `dc.server`. To install dependencies run:

    npm install

To deploy the app run:

    grunt

## DynaCharts Java Server (Deprecated)
### Requirements

  * Apache Maven 3.2.x

### Usage

Go to directory `dc.server.java`. To clean the project use:

    mvn clean

To deploy the app within the Jetty application server:

    mvn jetty:start
    
# Development
Information relevant to the development process.

## Coding style
Please read the following documents in order to understand how source code should be formatted and written.

Important:
  * Use **100 characters** column width.
  * Use *spaces* instead of *tabs* for code indentation. This is configurable in your IDE / Editor.
  * Use *2 spaces* idnentation for Node.js / Javascript source code.
  * Use *4 spaces* indentation for Java source code.
    

For Java development refer to [Google Java Style](http://google-styleguide.googlecode.com/svn/trunk/javaguide.html).

For Node.js development refer to [Felix's Node.js Style Guide](http://nodeguide.com/style.html).

# License
Copyright (c) 2014 Vexelon.NET Services
