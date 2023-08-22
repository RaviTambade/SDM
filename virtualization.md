


##  Infrastructure as a Service (IAAS)
<img src="https://github.com/RaviTambade/SDM/blob/main/images/Virtualization/history.jpeg"/>
.
The diagram below shows two decades of cloud evolution.

* 2001 - VMWare - Virtualization via hypervisor
* 2006 - AWS - IaaS (Infrastructure as a Service)
* 2009 - Heroku - PaaS (Platform as a Service)
* 2010 - OpenStack - Open-source IaaS
* 2011 - CloudFoundry - Open-source PaaS
* 2013 - Docker - Containers
* 2015 - CNCF (Cloud Native Computing Foundation) - Cloud Native

### Virtualization

<img src="https://github.com/RaviTambade/SDM/blob/main/images/Virtualization/concept-of-Virtualization.png"/>

Today, we witness many startups coming up with innovative solutions.  May products are SaaS(Software As A Service) products such as Microsoft 365, Google Apps, Salesforce, etc. These projects able to create an impact on increasing business productvity. Now  people build their first version of the application within a week and releasing it.  it is possible to develop a startup, SaaS product, or side projects without having to worry about infrastructure. All these are possible due to many factors. one of them is Virtualization. 

The word virtual means that it is a representation of something physically present elsewhere.

<p>Virtualization  is a technology that allows us to create virtual resources such as servers, networks, and storage in the cloud. All these resources are allocated from a physical machine that runs somewhere in the world. We  get the software to provision and manage these virtual resources. These physical machines are operated by cloud providers. They take care of maintenance, and hardware supplies.</p>

<p>Virtualization in Cloud Computing also enables us to set up access control over the resources to secure them. It also enables resource sharing among multiple applications. </p>

<p>Virtualization  enables efficient resource utilization. Virtualization  provision extra resources such as extra memory, storage, or processors is as simple as clicking a few buttons on the cloud software. </p>

##### Some of virtualization in cloud computing examples are as follows  

- EC2 service from Amazon Web Service 
- Compute engine from  Google Cloud 
- Azure Virtual Machines from Microsoft Azure 

## Concept Behind Virtualization

<img src="https://github.com/RaviTambade/SDM/blob/main/images/Virtualization/virtualization.png"/>

Virtualization follows a very simple architecture. Let's first look at the left side of the figure, this is the traditional machine. Here we have the hardware at the base layer and the host operating system, such as Linux, Windows, Mac, etc. Above, we have the application running directly on the host machine.  

Here since we run one application on the host machine, a lot of computer resources are unused, to avoid this we can run multiple applications by sharing the resources among the applications. This might increase the efficiency in resource utilization, but there are a few issues since the resources are shared. The risk of a data breach is high, and the application cannot operate in a dedicated environment.  

Virtualization architecture starts with the base hardware, as the traditional machine, but it replaces the operating system with the hypervisor. The hypervisor creates virtual machines for these applications and allots resources to them, and these VMs will have their OS, storage, computing power, etc., allowing the application to run in an isolated environment with dedicated resources. 

This allows efficient resource utilization as well as provides an isolated or dedicated environment for the application inside the machine.

The main concept behind virtualization is Hypervisor. Hypervisor is a software that partitions the hardware resources on the physical machine and runs Virtual Machine. It is typically installed on the server's hardware and divides the resources for Virtual machines (VMs). 

The server running hypervisor is called the Host, and the VMs using its resources are called Guest Operating Systems. The VMs function like digital files inside the physical device and they can be moved from one system to another, thereby increasing the portability. 

Hypervisor partitions the resources as per the requirement of the physical machine. This enables cloud providers to provision virtual machines to the users, who then can run their applications on them. 

If extra resources are requested, the hypervisor caches the current state of the virtual machine and transfers the request to the physical system (hardware) to provide more resources. By doing so, Hypervisor can make sure the previous state of the VMs is not modified after processing the extra resource request.

###  Characteristics Of Virtualization

1. <b>Managed Resources</b>
The VMs or any resources provisioned from the cloud are completely managed by the cloud providers, meaning apart from specifying the requirements, users don't have to maintain or worry about the underlying hardware and configuration of their resources. For example, the cloud providers handle all the work such as hardware supplies, backups, monitoring, etc. 

2. <b>Resource Allotment</b>
The resource allotment is made simple with virtualization technology, the process is as simple as clicking a few buttons. Users can get their whole infrastructure ready within hours, and they can customize it later without any hassle. 

3. <b>Resource Isolation>/b>
Resource isolation is one of the important characteristics of virtualization in the cloud. This enables applications to run in an environment that is completely dedicated to them. This also helps in preventing data breaches and makes sure to enable efficient resource utilization. 

4. <b>Load balancing</b>
The load balancer as the name suggest handles the request load of a server. The virtualization platforms make sure that the incoming requests are distributed to the appropriate servers. This allows the servers to serve requests sooner instead of being overloaded by the huge amount of requests. 

5. <b>Portability</b>
The virtualization resources are portable, meaning they can be copied and moved from one system to another, and the same functionality can be expected. This allows the users to create and reuse the configuration instead of repeating it.

## Types of Virtualizations
There are a couple of types of virtualization in cloud computing, they are 

1. <b>Server Virtualization</b>

The servers are computers where the application resides. Server virtualization is nothing but dividing the physical machine resources into a virtual machine, with the help of a hypervisor and provisioning it to the user. These VMs will have their own identity which allows them to operate independently.  

Server virtualization is also known as hardware virtualization in cloud computing, since it virtualizes hardware components such as processor, RAM, storage (HDD/SSD), etc. 

2. <b>Network Virtualization</b>

Network virtualization enables users to control and manage all the networking configurations via the cloud software. In network virtualization, all the physical networking components and tools are integrated and controlled by a single software.  

Along with that admins can specify rules, which define how the incoming requests are processed. In addition to that network virtualization allows the users to export and import the same config on other resources as well if supported. 

3. <b>Storage Virtualization</b>

Storage virtualization divides the physical storage devices and provides them as virtual storage for a wide variety of use cases. 

This virtual storage can be accessed via cloud software or APIs provided by the cloud provider. These virtual storage are used to store many types of data such as images, videos, and other documents. 

4. <b>Desktop Virtualization</b>

Desktop virtualization is a way of simulating the user's machine/PC/workstation. This enables users to work remotely from anywhere around the globe. Desktop virtualization is also known as application virtualization.  

Desktop virtualization allows organizations to provide remote access to their system, and organization network securely from anywhere in the world, without having the employee physically present. 

## Advantages of Virtualization 

Here are some of the benefits of application virtualization in cloud computing, which provides more details on the role of virtualization in cloud computing. 

1. <b>Reduced Cost</b>

Virtualization in the cloud provides an easy-to-use platform, which enables the users to provision resources with few clicks, and pay for only what they use.  

Due to this, the user doesn't have to set up their own physical server and handle the maintenance, which would be expensive. 

2. <b>Increased Uptime</b>

Virtualization in the cloud enables users to set up virtual resources in many locations around the world as a backup.  

This increases the uptime and availability of the resources and the user doesn't have to worry if one or more of their server goes down, since there are backup resources available. 

3.<b> Increased Security</b>

Cloud providers take extra measures to secure every single resource they provide, and these security measures are implemented layer by layer, starting from the hardware level to the software level. 

The security measures include Firewall to defend against cyber and virus threats, End-to-End encryption, Data Backups, and more. The cloud providers let users define some of their security policies as well, such as adding a member, whitelisting IP addresses, and more. 

4. <b>Flexible Provisioning</b>

The resourcing provisioning in the cloud is as simple as clicking a few buttons. Users specify the type of resource and the capacity of resources they need, and those requested sets of resources will be provided within a few minutes. 

In addition to this, increasing and decreasing the existing capacity of the resources isn't complicated, users just have to edit the capacity of the resources, and updated resources need will be fulfilled. 

5. <b>Easy setup and migration</b>

Virtualization in cloud makes sure that the platform is easy to use for the users who are setting up their infrastructure. In addition to that cloud providers make sure to provide an easy solution to migrate resources from one service to another.  

For instance, virtualization in the cloud allows users to create a virtual database and helps them migrate their existing database to the managed database without any hassle.

## Disadvantages of Virtualization 

Among all of these advantages of virtualization in cloud computing there are some pitfalls of virtualization in cloud computing as well, here’s the list.

1. <b>Data Privacy Concerns</b>

Along with all the benefits of the cloud and virtualization, one of the important disadvantages is privacy, because even though virtualization in the cloud would help users to create any number of virtual resources, the data and all the activities are stored and managed by a third party. 

This wouldn't be a concern for all the application, but for some it does. Cloud providers often come up with agreements, encryption, and many other ways to overcome this. 

2. <b>Learning Curve</b>

Mastering virtualization technology in cloud has a bit difficult learning curve and can take some time and experience, since along with creating resources one must handle the network configuration, defining policies, whitelisting IPs, deploying applications, etc. 

3. <b>Increased Risk of Over Billing</b>

Overbilling is a common concern in the cloud, this usually depends on how the user provisions the resources and uses them. Some users may forget to terminate their resources or increases the resource capacity which increases the billing amount.  

Although cloud provides few solutions such as billing alerts, budget management, etc. But this is a common issue found for every 8 out of 10 users 

4. <b>Possibilities of Vendor Locking</b>

Vendor locking is one of the ways where cloud providers restrict users from moving out of their platform. The whole platform is designed in such a way that all the services depends on one another, and due to this it is hard for the user to move out of one platform to another.  

This is one of the biggest issues when there's a downtime, meaning for some unexpected reason if the cloud service goes down, then all the services that are being used by the users goes down as well.


### Important Terminologies of Virtualization

1.<b> Virtual Machine (VM)</b>
The virtual machine that simulates an actual computer, these VMs come with an operating system (OS) already installed and executes the application that is installed inside them. These virtual machines are controlled and managed by the Hypervisor. 

2.<b> Hypervisor</b>
A hypervisor is software that partitions the hardware resources on the physical machine and runs Virtual Machine on them. This is responsible to create and provision virtual resources when there is a request. 

3.<b> Virtualization software</b>
A tool that works on deploying virtualization on the device, this is the software that the user interacts with for specifying virtual resources requirements. This software communicates with the hypervisor for the resource requirements. 

4.<b> Virtual Networking</b>
The Virtual Networking, the network that is configured inside the servers is separated logically these networks can be scaled across multiple servers, and these networks can be controlled by the software. 

Virtualization offers many solutions for every user and their requirements, from creating small resources to handling large-scale application that deals with a huge amount of data and need a huge amount of computing power.  