# Virtuaization

<img src="https://github.com/RaviTambade/SDM/blob/main/images/Virtualization/concept-of-Virtualization.png"/>


Today, we witness many startups coming up with innovative solutions and many SaaS products or side projects able to create an impact, and people building their first version of the application within a week and releasing it; all these are possible due to many factors and one of them is Virtualization in Cloud Computing. 

Since people were able to leverage this virtualization and cloud computing, it was possible to develop a startup, SaaS product, or side projects without having to worry about infrastructure. Virtualization in cloud computing is helping industries every single day, and due to this, the demand for skilled engineers with expertise in virtualization is growing. Check out Cloud Computing Certification for beginners to learn about the fundamentals of virtualization and be one of the in-demand cloud engineers. 

### What is Virtualization In Cloud Computing? 

Before getting started with Virtualization in Cloud Computing, we need to understand the meaning of the word virtual. The word virtual means that it is a representation of something physically present elsewhere.

Similarly, Virtualization in Cloud Computing is a technology that allows us to create virtual resources such as servers, networks, and storage in the cloud. All these resources are allocated from a physical machine that runs somewhere in the world, and we'll get the software to provision and manage these virtual resources. These physical machines are operated by cloud providers, who take care of maintenance, and hardware supplies.

Virtualization in Cloud Computing also enables us to set up access control over the resources to secure them. It also enables resource sharing among multiple applications. 

Virtualization also enables efficient resource utilization, since it only provisions the requested amount of resources and not more. And provisioning extra resources such as extra memory, storage, or processors is as simple as clicking a few buttons on the cloud software. 


##### Some of virtualization in cloud computing examples are as follows  

- EC2 service from Amazon Web Service 
- Compute engine from  Google Cloud 
Azure Virtual Machines from Microsoft Azure 

## Concept Behind Virtualization

The main concept behind virtualization is Hypervisor. Hypervisor is a software that partitions the hardware resources on the physical machine and runs Virtual Machine. It is typically installed on the server's hardware and divides the resources for Virtual machines (VMs). 

The server running hypervisor is called the Host, and the VMs using its resources are called Guest Operating Systems. The VMs function like digital files inside the physical device and they can be moved from one system to another, thereby increasing the portability. 

Hypervisor partitions the resources as per the requirement of the physical machine. This enables cloud providers to provision virtual machines to the users, who then can run their applications on them. 

If extra resources are requested, the hypervisor caches the current state of the virtual machine and transfers the request to the physical system (hardware) to provide more resources. By doing so, Hypervisor can make sure the previous state of the VMs is not modified after processing the extra resource request.

There are many open-source and paid Hypervisors available. Cloud providers use them based on their requirements and business needs. 

## How Does Virtualization Work in Cloud Computing? 


Virtualization in the cloud is achieved by combining multiple layers of virtualization, these layers include hardware/physical, network, storage, and application virtualization. These layers can be customized and controlled by the cloud software by the users. 

The interaction with virtualization starts with the users sending a request for a virtual resource via the cloud software, which transfers the request to the hypervisor. The hypervisor then checks for the available resources and allocates the requested amount of resources to the user. 

Due to this simplified interaction, the users can set up their entire infrastructure in less time and with less maintenance instead of having to deal with setting up the entire physical infrastructure and maintaining it themselves. 

## Architecture Of Virtualization

Virtualization follows a very simple architecture. Let's first look at the left side of the figure, this is the traditional machine. Here we have the hardware at the base layer and the host operating system, such as Linux, Windows, Mac, etc. Above, we have the application running directly on the host machine.  

Here since we run one application on the host machine, a lot of computer resources are unused, to avoid this we can run multiple applications by sharing the resources among the applications. This might increase the efficiency in resource utilization, but there are a few issues since the resources are shared. The risk of a data breach is high, and the application cannot operate in a dedicated environment.  

To address these issues and enable efficient resource utilization, virtualization was introduced that follows the same architecture pattern as the traditional machine but with a slight change. 

Virtualization architecture starts with the base hardware, as the traditional machine, but it replaces the operating system with the hypervisor. The hypervisor creates virtual machines for these applications and allots resources to them, and these VMs will have their OS, storage, computing power, etc., allowing the application to run in an isolated environment with dedicated resources. 

This allows efficient resource utilization as well as provides an isolated or dedicated environment for the application inside the machine.

## Characteristics Of Virtualization

1. Managed Resources
The VMs or any resources provisioned from the cloud are completely managed by the cloud providers, meaning apart from specifying the requirements, users don't have to maintain or worry about the underlying hardware and configuration of their resources. For example, the cloud providers handle all the work such as hardware supplies, backups, monitoring, etc. 

2. Resource Allotment
The resource allotment is made simple with virtualization technology, the process is as simple as clicking a few buttons. Users can get their whole infrastructure ready within hours, and they can customize it later without any hassle. 

3. Resource Isolation
Resource isolation is one of the important characteristics of virtualization in the cloud. This enables applications to run in an environment that is completely dedicated to them. This also helps in preventing data breaches and makes sure to enable efficient resource utilization. 

4. Load balancing
The load balancer as the name suggest handles the request load of a server. The virtualization platforms make sure that the incoming requests are distributed to the appropriate servers. This allows the servers to serve requests sooner instead of being overloaded by the huge amount of requests. 

5. Portability
The virtualization resources are portable, meaning they can be copied and moved from one system to another, and the same functionality can be expected. This allows the users to create and reuse the configuration instead of repeating it.

## Types of Virtualizations
There are a couple of types of virtualization in cloud computing, they are 

1. Server Virtualization

The servers are computers where the application resides. Server virtualization is nothing but dividing the physical machine resources into a virtual machine, with the help of a hypervisor and provisioning it to the user. These VMs will have their own identity which allows them to operate independently.  

Server virtualization is also known as hardware virtualization in cloud computing, since it virtualizes hardware components such as processor, RAM, storage (HDD/SSD), etc. 

2. Network Virtualization

Network virtualization enables users to control and manage all the networking configurations via the cloud software. In network virtualization, all the physical networking components and tools are integrated and controlled by a single software.  

Along with that admins can specify rules, which define how the incoming requests are processed. In addition to that network virtualization allows the users to export and import the same config on other resources as well if supported. 

3. Storage Virtualization

Storage virtualization divides the physical storage devices and provides them as virtual storage for a wide variety of use cases. 

This virtual storage can be accessed via cloud software or APIs provided by the cloud provider. These virtual storage are used to store many types of data such as images, videos, and other documents. 

4. Desktop Virtualization

Desktop virtualization is a way of simulating the user's machine/PC/workstation. This enables users to work remotely from anywhere around the globe. Desktop virtualization is also known as application virtualization.  

Desktop virtualization allows organizations to provide remote access to their system, and organization network securely from anywhere in the world, without having the employee physically present. 

## Advantages of Virtualization 

Here are some of the benefits of application virtualization in cloud computing, which provides more details on the role of virtualization in cloud computing. 

1. Reduced Cost

Virtualization in the cloud provides an easy-to-use platform, which enables the users to provision resources with few clicks, and pay for only what they use.  

Due to this, the user doesn't have to set up their own physical server and handle the maintenance, which would be expensive. 

2. Increased Uptime

Virtualization in the cloud enables users to set up virtual resources in many locations around the world as a backup.  

This increases the uptime and availability of the resources and the user doesn't have to worry if one or more of their server goes down, since there are backup resources available. 

3. Increased Security

Cloud providers take extra measures to secure every single resource they provide, and these security measures are implemented layer by layer, starting from the hardware level to the software level. 

The security measures include Firewall to defend against cyber and virus threats, End-to-End encryption, Data Backups, and more. The cloud providers let users define some of their security policies as well, such as adding a member, whitelisting IP addresses, and more. 

4. Flexible Provisioning

The resourcing provisioning in the cloud is as simple as clicking a few buttons. Users specify the type of resource and the capacity of resources they need, and those requested sets of resources will be provided within a few minutes. 

In addition to this, increasing and decreasing the existing capacity of the resources isn't complicated, users just have to edit the capacity of the resources, and updated resources need will be fulfilled. 

5. Easy setup and migration

Virtualization in cloud makes sure that the platform is easy to use for the users who are setting up their infrastructure. In addition to that cloud providers make sure to provide an easy solution to migrate resources from one service to another.  

For instance, virtualization in the cloud allows users to create a virtual database and helps them migrate their existing database to the managed database without any hassle.

## Disadvantages of Virtualization 

Among all of these advantages of virtualization in cloud computing there are some pitfalls of virtualization in cloud computing as well, here’s the list.

1. Data Privacy Concerns

Along with all the benefits of the cloud and virtualization, one of the important disadvantages is privacy, because even though virtualization in the cloud would help users to create any number of virtual resources, the data and all the activities are stored and managed by a third party. 

This wouldn't be a concern for all the application, but for some it does. Cloud providers often come up with agreements, encryption, and many other ways to overcome this. 

2. Learning Curve

Mastering virtualization technology in cloud has a bit difficult learning curve and can take some time and experience, since along with creating resources one must handle the network configuration, defining policies, whitelisting IPs, deploying applications, etc. 

3. Increased Risk of Over Billing

Overbilling is a common concern in the cloud, this usually depends on how the user provisions the resources and uses them. Some users may forget to terminate their resources or increases the resource capacity which increases the billing amount.  

Although cloud provides few solutions such as billing alerts, budget management, etc. But this is a common issue found for every 8 out of 10 users 

4. Possibilities of Vendor Locking

Vendor locking is one of the ways where cloud providers restrict users from moving out of their platform. The whole platform is designed in such a way that all the services depends on one another, and due to this it is hard for the user to move out of one platform to another.  

This is one of the biggest issues when there's a downtime, meaning for some unexpected reason if the cloud service goes down, then all the services that are being used by the users goes down as well.

## Role of Virtualization in Cloud Computing 

Virtualization technology in cloud computing has played and is playing an immense role in cloud computing, it provides an ability to share a single resource with multiple users so that the resources that are available can be used efficiently.  

Along with it, it also revolutionized the way software development and operations used to work, before it was mandatory to use physical servers and bear all the expenses of hardware, maintenance, and others.  But with virtualization tech, it made it really simple to develop, test, and release software with less or no overhead of the infrastructure.  

This encouraged many people to start working on their software ideas since it eliminated the need for huge initial capital investment instead people start off with very minimal investment and get their pieces of software out in the market. 

## Important Terminologies of Virtualization

1. Virtual Machine (VM)

The virtual machine that simulates an actual computer, these VMs come with an operating system (OS) already installed and executes the application that is installed inside them. These virtual machines are controlled and managed by the Hypervisor. 

2. Hypervisor

A hypervisor is software that partitions the hardware resources on the physical machine and runs Virtual Machine on them. This is responsible to create and provision virtual resources when there is a request. 

3. Virtualization software

A tool that works on deploying virtualization on the device, this is the software that the user interacts with for specifying virtual resources requirements. This software communicates with the hypervisor for the resource requirements. 

4. Virtual Networking

The Virtual Networking, the network that is configured inside the servers is separated logically these networks can be scaled across multiple servers, and these networks can be controlled by the software. 

## Wrapping It Up

Virtualization offers many solutions for every user and their requirements, from creating small resources to handling large-scale application that deals with a huge amount of data and need a huge amount of computing power.  

This virtualization is made possible by software called Hypervisor, which divides the existing hardware resources into virtual machines (VMs). In addition to this there are many interesting things about Virtualization in Cloud Computing, and mastering this technology would be many steps forward in one's career, check out KnowledgeHut Cloud Computing Certification for beginners, to kick-start your career on cloud computing and learn more about how cloud is solving many problems and contributing to the software ecosystem. 

## Frequently Asked Questions (FAQs) 

1. What is virtualization in cloud computing with example?
Virtualization in Cloud Computing is a technology that allows us to create virtual resources such as servers, networks, storage, and more on the cloud. Examples: Amazon Web Services, Google cloud, etc. 

2. What are the 4 general types of virtualization?

- Server Virtualization  
- Network Virtualization 
- Storage Virtualization 
- Desktop Virtualization 

3. Do virtualization and cloud computing differ?
Yes! Virtualization is a software that virtualizes hardware into a number of machines whereas Cloud computing refers to the combination of multiple hardware machines or devices. 