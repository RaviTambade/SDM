


## Dockerizing a Node.js web app

The goal of this example is to show you how to get a Node.js application into a Docker container. The guide is intended for development, and not for a production deployment. The guide also assumes you have a working Docker installation and a basic understanding of how a Node.js application is structured.

In the first part of this guide we will create a simple web application in Node.js, then we will build a Docker image for that application, and lastly we will instantiate a container from that image.

Docker allows you to package an application with its environment and all of its dependencies into a "box", called a container. Usually, a container consists of an application running in a stripped-to-basics version of a Linux operating system. An image is the blueprint for a container, a container is a running instance of an image.


### Docker file

A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. This page describes the commands you can use in a Dockerfile .

### Docker image
A Docker image is a file used to execute code in a Docker container. Docker images act as a set of instructions to build a Docker container, like a template. Docker images also act as the starting point when using Docker. An image is comparable to a snapshot in virtual machine (VM) environments.

Docker is used to create, run and deploy applications in containers. A Docker image contains application code, libraries, tools, dependencies and other files needed to make an application run. When a user runs an image, it can become one or many instances of a container.


Docker images have multiple layers, each one originates from the previous layer but is different from it. The layers speed up Docker builds while increasing reusability and decreasing disk use. Image layers are also read-only files. Once a container is created, a writable layer is added on top of the unchangeable images, allowing a user to make changes.

References to disk space in Docker images and containers can be confusing. It's important to distinguish between size and virtual size. Size refers to the disk space that the writable layer of a container uses, while virtual size is the disk space used for the container and the writeable layer. The read-only layers of an image can be shared between any container started from the same image.

Docker image use cases
A Docker image has everything needed to run a containerized application, including code, config files, environment variables, libraries and runtimes. When the image is deployed to a Docker environment, it can be executed as a Docker container. The docker run command creates a container from a specific image.

Docker images are a reusable asset -- deployable on any host. Developers can take the static image layers from one project and use them in another. This saves the user time, because they do not have to recreate an image from scratch.

Docker container vs. Docker image
A Docker container is a virtualized runtime environment used in application development. It is used to create, run and deploy applications that are isolated from the underlying hardware. A Docker container can use one machine, share its kernel and virtualize the OS to run more isolated processes. As a result, Docker containers are lightweight.

A Docker image is like a snapshot in other types of VM environments. It is a record of a Docker container at a specific point in time. Docker images are also immutable. While they can't be changed, they can be duplicated, shared or deleted. The feature is useful for testing new software or configurations because whatever happens, the image remains unchanged.

Containers need a runnable image to exist. Containers are dependent on images, because they are used to construct runtime environments and are needed to run an application.


Dockerfile method
This approach requires making a plain text Dockerfile. The Dockerfile makes the specifications for creating an image. This process is more difficult and time-consuming, but it does well in continuous delivery environments. The method includes creating the Dockerfile and adding the commands needed for the image. Once the Dockerfile is started, the user sets up a .dockerignore file to exclude any files not needed for the final build. The .dockerignore file is in the root directory. Next, the Docker build command is used to create a Docker image and an image name and tag are set. Lastly, the Docker images command is used to see the created image.



Docker image commands
According to Docker, there are sets of primary Docker image commands, categorized as child commands; some include the following:

docker image build. Builds an image from a Dockerfile.
docker image inspect. Displays information on one or more images.
docker image load. Loads an image from a tar archive or streams for receiving or reading input (STDIN).
docker image prune. Removes unused images.
docker image pull. Pulls an image or a repository from a registry.
docker image push. Pushes an image or a repository to a registry.
docker image rm. Removes one or more images.
docker image save. Saves one or more images to a tar archive (streamed to STDOUT by default).
docker image tag. Creates a tag TARGET_IMAGE that refers to SOURCE_IMAGE.
The Docker CLI provides commands that are used to customize Docker images. Examples of Docker image commands include the following:

docker image history. Shows the history of an image, including changes made to it and its layers.
docker update. Enables a user to update the configuration of containers.
docker tag. Creates a tag, such as TARGET_IMAGE, which enables users to group and organize container images.
docker search. Looks in Docker Hub for whatever the user needs.
docker save. Enables a user to save images to an archive.
docker compose. Used to handle an environment variable.
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
- 12.start container instance using docker run command.
- 13.Check website inside container instance by invoking externally.
- 14.Enure firewall for LInux VM is set to accept HTTP trafic from anywhere.
- 15.User browser to access web site from local machine.
- 16.List down all container instance running 
- 17.List down all container images created in Linux VM
- 18.Kill unnessary  container intancess running .
- 19.Remove container images from LInux VM
- 20.STop Docker running.
- 21.STop or terminate Linux VM running