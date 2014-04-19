DynaCharts
===========

A Web platform that generates and provides real-time updates of charts and diagrams.

# Getting Started

  * `dc.server` - Node.js REST backend
  * `dc.server.java` - Java REST backend (Deprecated)

# Projects
## DynaCharts Server
### Requirements

  * Apache Maven 3.2.x

### Usage

Go to directory `dc.server.java`. To clean the project use:

    mvn clean

To deploy the app within the Jetty application server:

    mvn jetty:start

## DynaCharts Generator Service
### Requirements

  * Node.js v0.10.x

### Usage

Go to directory `dc.server`. To install dependencies run:

    npm install

To deploy the app run:

    grunt


# Development
Information relevant to the development process.

## Coding style
Please refer to [Google Java Style](http://google-styleguide.googlecode.com/svn/trunk/javaguide.html).

# License
Copyright (c) 2014 Vexelon.NET Services
