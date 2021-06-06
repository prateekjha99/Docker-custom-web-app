# Docker-custom-web-app
This is a custom node web app which is containerized using Docker and it takes bgcolor of web page as env variable and port mapping is also done to expose this container.

**Build** : To build own docker image using DOCKERFILE, run below custom command in same directory <br>
_docker build -t prateekjha/node-web-app ._
<img src='images/build.png' alt='docker build' />

<hr>

**Run** :
1. Yellow background color 
   <br>
   _docker run -p 8080:3000 -e BG_COLOR=yellow prateekjha/node-web-app_
   <img src='images/yellow.png' alt='docker run yellow bgcolor' />
   Here external port mapped is 8080 and bgcolor of webapp is yellow
<hr>

2. Green background color <br>
   _docker run -p 8081:3000 -e BG_COLOR=green prateekjha/node-web-app_
   <img src='images/green.png' alt='docker run green bgcolor' />
   Here external port mapped is 8081 and bgcolor of webapp is green
 <hr>
 
 **docker ps** lists all running containers and some additional info eg for how much time a container is up, command etc
