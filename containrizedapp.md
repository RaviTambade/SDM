## Dockerizing a Node.js web app

<img src="https://github.com/RaviTambade/SDM/blob/main/images/Container/docker.jpg">


Docker allows you to package an application with its environment and all of its dependencies into a "box", called a container. Usually, a container consists of an application running in a stripped-to-basics version of a Linux operating system. An image is the blueprint for a container, a container is a running instance of an image.

### Docker file

```
FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 8000
```

A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. This page describes the commands you can use in a Dockerfile .




<img src="https://github.com/RaviTambade/SDM/blob/main/images/Container/tflstoredockerizedapp.jpg">

### Docker image

A Docker image is a file used to execute code in a Docker container. Docker images act as a set of instructions to build a Docker container, like a template. Docker images also act as the starting point when using Docker. An image is comparable to a snapshot in virtual machine (VM) environments.

Docker is used to create, run and deploy applications in containers. A Docker image contains application code, libraries, tools, dependencies and other files needed to make an application run. When a user runs an image, it can become one or many instances of a container.


Docker images have multiple layers, each one originates from the previous layer but is different from it. The layers speed up Docker builds while increasing reusability and decreasing disk use. Image layers are also read-only files. Once a container is created, a writable layer is added on top of the unchangeable images, allowing a user to make changes.


### Docker image use cases
A Docker image has everything needed to run a containerized application, including code, config files, environment variables, libraries and runtimes. When the image is deployed to a Docker environment, it can be executed as a Docker container. The docker run command creates a container from a specific image.

Docker images are a reusable asset -- deployable on any host. Developers can take the static image layers from one project and use them in another. This saves the user time, because they do not have to recreate an image from scratch.

### Docker container vs. Docker image

A Docker container is a virtualized runtime environment used in application development. It is used to create, run and deploy applications that are isolated from the underlying hardware. A Docker container can use one machine, share its kernel and virtualize the OS to run more isolated processes. As a result, Docker containers are lightweight.

Docker images are also immutable. While they can't be changed, they can be duplicated, shared or deleted. The feature is useful for testing new software or configurations because whatever happens, the image remains unchanged.

Containers need a runnable image to exist. Containers are dependent on images, because they are used to construct runtime environments and are needed to run an application.


### Docker image commands

According to Docker, there are sets of primary Docker image commands, categorized as child commands; some include the following:

##### sudo docker build -t testapp . 
Builds an image from a Dockerfile.
 
##### sudo docker images
 Lists all docker images downloaded or created in existing environment.

##### sudo docker   prune  imageid
Removes unused images.

##### sudo docker   pull hello-world 
Pulls an image or a repository from a registry.

##### sudo docker image push. 
Pushes an image or a repository to a registry (Docker Hub).

##### sudo docker  rmi imageid
 Removes  container images whose image id mentioned.
  
The Docker CLI provides commands that are used to customize Docker images. 
Examples of Docker image commands include the following:

Docker images are an important concept and tool to know when working within Docker to create applications in containerized environments.


## Steps for Containrized Application

- 1.Create Node JS application
- 2.Add Dockerfile to node js application.
- 3.Define automation script for creating custom container image
- 4.Push Node JS appliation to Github repo at git site.
- 5.Create Virtual machine in On-premise or Hosted enviornment.
- 6.Clone NodeJS app repo to Linux VM.
- 7.Install Docker container execution engine.
- 8.Start docker engine.
- 9.build Docker container image using Docker build command.
- 10.Ensure Container image is created in Linux machine.
- 11.start container instance using docker run command.
- 12.Check website inside container instance by invoking externally.
- 13.Enure firewall for LInux VM is set to accept HTTP trafic from anywhere.
- 14.User browser to access web site from local machine.
- 15.List down all container instance running 
- 16.List down all container images created in Linux VM
- 17.Kill unnessary  container intancess running .
- 18.Remove container images from LInux VM
- 19.STop Docker running.
- 20.STop or terminate Linux VM running