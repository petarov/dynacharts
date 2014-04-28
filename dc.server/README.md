DynaCharts Server
===================

Node.js HTTP Server Backend

## Requirements
### Linux/OSX

  * [Node.js](http://nodejs.org/download/) v0.10.x
  * (Use your pkg-manager to install) Python 2.7
  * (Use your pkg-manager to install) [cairo](http://cairographics.org/download/)
  * (Use your pkg-manager to install) libRSVG
  
### Windows 

  * Node.js v0.10.x **x86**
  * [Python 2.7](http://www.python.org/download/)
  * [Visual C++ 2010 Express](http://www.microsoft.com/visualstudio/eng/downloads#d-2010-express)
  * [GTK+ 2.x](http://www.gtk.org/download/win32.php) ( *Extract at C:\GTK* )

## Usage
To install all dependencies run:

    npm install

To deploy the app run:

    grunt

## Notes
On production site we will **always** use a Linux server installation. 
Therefore, a Windows installation would only be used for development and basic tests.