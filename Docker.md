
<img src="https://github.com/RaviTambade/SDM/blob/main/images/Container/containers-vs-virtual-machines.jpg"/>


# What is a Container?

A standardized unit of software.
Package Software into Standardized Units for Development, Shipment and Deployment

A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

# Comparing Containers and Virtual Machines

Containers and virtual machines have similar resource isolation and allocation benefits, but function differently because containers virtualize the operating system instead of hardware. Containers are more portable and efficient.


The Old Way to deploy applications was to install the applications on a host using the operating-system package manager. This had the disadvantage of entangling the applications’ executables, configuration, libraries, and lifecycles with each other and with the host OS. One could build immutable virtual-machine images in order to achieve predictable rollouts and rollbacks, but VMs are heavyweight and non-portable.

The New Way is to deploy containers based on operating-system-level virtualization rather than hardware virtualization. These containers are isolated from each other and from the host: they have their own filesystems, they can’t see each others’ processes, and their computational resource usage can be bounded. They are easier to build than VMs, and because they are decoupled from the underlying infrastructure and from the host filesystem, they are portable across clouds and OS distributions.

Because containers are small and fast, one application can be packed in each container image. This one-to-one application-to-image relationship unlocks the full benefits of containers. With containers, immutable container images can be created at build/release time rather than deployment time, since each application doesn’t need to be composed with the rest of the application stack, nor married to the production infrastructure environment. Generating container images at build/release time enables a consistent environment to be carried from development into production. Similarly, containers are vastly more transparent than VMs, which facilitates monitoring and management. This is especially true when the containers’ process lifecycles are managed by the infrastructure rather than hidden by a process supervisor inside the container. Finally, with a single application per container, managing the containers becomes tantamount to managing deployment of the application.


## VIRTUAL MACHINES
Virtual machines (VMs) are an abstraction of physical hardware turning one server into many servers. The hypervisor allows multiple VMs to run on a single machine. Each VM includes a full copy of an operating system, the application, necessary binaries and libraries - taking up tens of GBs. VMs can also be slow to boot.


## CONTAINERS

Containers are an abstraction at the app layer that packages code and dependencies together. Multiple containers can run on the same machine and share the OS kernel with other containers, each running as isolated processes in user space. Containers take up less space than VMs (container images are typically tens of MBs in size), can handle more applications and require fewer VMs and Operating systems.


## Containerization

Containerization is a lightweight alternative to full machine virtualization that involves encapsulating an application in a container with its own operating environment. This provides many of the benefits of loading an application onto a virtual machine, as the application can be run on any suitable physical machine without any worries about dependencies.

Containerization has gained recent prominence with the open-source Docker. Docker containers are designed to run on everything from physical computers to virtual machines, bare-metal servers, OpenStack cloud clusters, public instances and more.


## Docker

The widespread adoption of containers has changed the orthodoxy of IT—administrators do not need to run multiple virtual machines to create a barrier between applications or users, nor are programmers beholden to languages such as Java, which have their own strategy for process isolation and lifecycle management.

Leading the way in this change is Docker, an open-source utility that automates the deployment and management of programs inside software containers. Docker is also the center of the container ecosystem, with other solutions such as Kubernetes available for deploying containers through Docker in a computing cluster.


Docker is an open-source tool that automates the deployment of an application inside a software container. 

Back in the day, transportation companies faced the following challenges:

How to transport different (incompatible) types of goods side by side (like food and chemicals, or glass and bricks).
How to handle packages of various sizes using the same vehicle.
After the introduction of containers, bricks could be put over glass, and chemicals could be stored next to food. Cargo of various sizes can be put inside a standardized container and loaded/unloaded by the same vehicle.

When you develop an application, you need to provide your code along with all possible dependencies like libraries, the web server, databases, etc. You may end up in a situation when the application is working on your computer, but won’t even start on the staging server, or the dev or QA’s machine.

This challenge can be addressed by isolating the app to make it independent of the system.

## How does this differ from virtualization?

Traditionally, virtual machines were used to avoid this unexpected behavior. The main problem with VM is that an “extra OS” on top of the host operating system adds gigabytes of space to the project. Most of the time your server will host several VMs that will take up even more space. And by the way, at the moment, most cloud-based server providers will charge you for that extra space. Another significant drawback of VM is a slow boot.

Docker eliminates all the above by simply sharing the OS kernel across all the containers running as separate processes of the host OS.


## Why do we need Docker?

The short list of benefits includes:

- Faster development process
- Handy application encapsulation
- The same behaviour on local machine / dev / staging / production servers
- Easy and clear monitoring
- Easy to scale


### Faster development process

There is no need to install 3rd-party apps like PostgreSQL, Redis, Elasticsearch on the system – you can run it in containers. Docker also gives you the ability to run different versions of same application simultaneously. For example, say you need to do some manual data migration from an older version of Postgres to a newer version. You can have such a situation in microservice architecture when you want to create a new microservice with a new version of the 3rd-party software.

It could be quite complex to keep two different versions of the same app on one host OS. In this case, Docker containers could be a perfect solution – you receive isolated environments for your applications and 3rd-parties.

### Handy application encapsulation

You can deliver your application in one piece. Most programming languages, frameworks and all operating systems have their own packaging managers. And even if your application can be packed with its native package manager, it could be hard to create a port for another system.

Docker gives you a unified image format to distribute you applications across different host systems and cloud services. You can deliver your application in one piece with all the required dependencies (included in an image) ready to run.

Same behaviour on local machine / dev / staging / production servers
Docker can’t guarantee 100% dev / staging / production parity, because there is always the human factor. But it reduces to almost zero the probability of error caused by different versions of operating systems, system-dependencies, etc.

With right approach to building Docker images, your application will use the same base image with the same OS version and the required dependencies.

### Easy and clear monitoring

Out of the box, you have a unified way to read log files from all running containers. You don’t need to remember all the specific paths where your app and its dependencies store log files and write custom hooks to handle this.
You can integrate an external logging driver and monitor your app log files in one place.

### Easy to scale

A correctly wrapped application will cover most of the Twelve Factors. By design, Docker forces you follow its core principles, such as configuration over environment variables, communication over TCP/UDP ports, etc. And if you’ve done your application right, it will be ready for scaling not only in Docker.

### Supported platforms

Docker’s native platform is Linux, as it’s based on features provided by the Linux kernel. However, you can still run it on macOS and Windows. 
The only difference is that on macOS and Windows, Docker is encapsulated into a tiny virtual machine. At the moment, Docker for macOS and Windows has reached a significant level of usability and feels more like a native app.

## Terminology

#### Container 
– a running instance that encapsulates required software. Containers are always created from images. A container can expose ports and volumes to interact with other containers or/and the outer world. Containers can be easily killed / removed and re-created again in a very short time. Containers don’t keep state.

#### Image 
– the basic element for every container. When you create an image, every step is cached and can be reused (Copy On Write model). Depending on the image, it can take some time to build. Containers, on the other hand, can be started from images right away.

#### Port 
– a TCP/UDP port in its original meaning. To keep things simple, let’s assume that ports can be exposed to the outer world (accessible from the host OS) or connected to other containers – i.e., accessible only from those containers and invisible to the outer world.

#### Volume
– can be described as a shared folder. Volumes are initialized when a container is created. Volumes are designed to persist data, independent of the container’s lifecycle.

#### Registry 
– the server that stores Docker images. It can be compared to Github – you can pull an image from the registry to deploy it locally, and push locally built images to the registry.

## Docker Hub 
– a registry with web interface provided by Docker Inc. It stores a lot of Docker images with different software. Docker Hub is a source of the “official” Docker images made by the Docker team or in cooperation with the original software manufacturer (it doesn’t necessary mean that these “original” images are from official software manufacturers). Official images list their potential vulnerabilities. This information is available to any logged-in user. There are both free and paid accounts available. You can have one private image per account and an infinite amount of public images for free. Docker Store – a service very similar to Docker Hub. It’s a marketplace with ratings, reviews, etc. My personal opinion is that it’s marketing stuff. I’m totally happy with Docker Hub.


Docker can be used on all types of projects, regardless of size and complexity.

In the beginning, you can start with compose and Swarm. When the project grows, you can migrate to cloud services like Amazon Container Services or Kubernetes.

Like standard containers used in cargo transportation, wrapping your code in Docker containers will help you build faster and more efficient CI/CD processes.' This is not just another technological trend promoted by a bunch of geeks – it’s a new paradigm that is already being used in the architecture of large companies like PayPal, Visa, Swisscom, General Electric, Splink, etc.


## Kubernetes

Kubernetes is a portable, extensible open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.


Kubernetes has a number of features. It can be thought of as:

- a container platform
- a microservices platform
- a portable cloud platform and a lot more.

Kubernetes provides a container-centric management environment. It orchestrates computing, networking, and storage infrastructure on behalf of user workloads. This provides much of the simplicity of Platform as a Service (PaaS) with the flexibility of Infrastructure as a Service (IaaS), and enables portability across infrastructure providers.


Suppose that you've started a new job as a software developer at the world's most popular pizza joint - Contoso Pizza. Business is booming and the Contoso Pizza's website that indicates whether pizzas are in stock or not has recently been refactored into microservices hosted in Docker containers.

In a microservice-based development approach, each microservice owns its model and data so that it will be autonomous from a development and deployment point of view from other microservices. Hosting microservices inside of a container is a common way to achieve that. These kinds of systems are complex to scale out and manage. You need to consider the process of organizing, adding, removing, and updating many containers. This process is referred to as container management.

For example, you may find during specific times of the day you need to scale up the number of container instances that handle caching. Or you may have an update to the container instance that checks pizza inventory.

To help with container management tasks, you can use a container orchestrator. Kubernetes is one such orchestrator. It is an extensible open-source platform for managing and orchestrating containerized workloads.

This module will teach you about Kubernetes and the problems it solves and how to deploy a .NET web API and web app into a Kubernetes cluster.


## What are orchestrators?

The decoupled design of microservices combined with the atomicity of containers make it possible to scale out apps, and respond to increased demand by deploying more container instances, and to scale back if demand is decreasing. In complex solutions the process of deploying, updating, monitoring, and removing containers introduces challenges.



## Container management

Container management is the process of organizing, adding, removing, or updating a significant number of containers.

The Contoso Pizza Company website consists of multiple microservices responsible for tasks like caching, data processing, and a shopping cart. Each of these services is hosted in a container and can be deployed, updated, and scaled independently from one another.


If you increase the number of a shopping cart container instances and need to deploy a new version, you'll have to update every single instance of that container.

Container management helps with these tasks.


## Container orchestration


A container orchestrator is a system that automatically deploys and manages containerized apps. For example, the orchestrator can dynamically respond to changes in the environment to increase or decrease the deployed instances of the managed app. Or, it can ensure all deployed container instances get updated if a new version of a service is released.



## Kubernetes Benefits

The benefits of using Kubernetes are based on the abstraction of tasks.


These tasks include:

- Self-healing of containers. An example would be restarting containers that fail or replacing containers.
- Scaling deployed container count up or down dynamically, based on demand.
- Automating rolling updates and rollbacks of containers.
- Managing storage.
- Managing network traffic.
- Storing and managing sensitive information, such as usernames and passwords.

Because Kuberentes is a tool to orchestrate containerized workloads, and you can deploy .NET, java, NodeJs, Python  Microservices into containers, you can use Kubernetes to orchestrate your .NET , Java, NodeJs, Python microservices. 

### Complete Picture of CD/CI Piplines in Software Engg.
<img src="https://github.com/RaviTambade/SDM/blob/main/images/Container/CD_CI.jpg"/>
