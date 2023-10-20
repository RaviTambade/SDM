# 𝗞𝘂𝗯𝗲𝗿𝗻𝗲𝘁𝗲𝘀

<img src="/images/Container/Kubernetes.png" width="200" height="200"/>
## W𝗵𝗮𝘁 𝗶𝘀 𝗞𝘂𝗯𝗲𝗿𝗻𝗲𝘁𝗲𝘀 (𝗞𝟴𝘀)?

Kubernetes or K8 is an open-source container management platform developed by Google which unifies a cluster of machines into a single pool of computing resources. With Kubernetes we can organize applications in container groups which run its docker engine to maintain applications running as per request. Kubernetes keeps track of container applications which are deployed in cloud 

## Features of Kubernetes

- Compute scheduling considering resource needs of containers and find right place and run them automatically.
- Self-healing in nature so if container crashes a new one will be created to replace it.
- Horizontal scaling can be achieved by observing CPU and memory metrics , add and remove instances as required.
- Volume management is easy as it manages the persistent storage used by applications.
- IP address , DNS and multiple instances load balancing.
- During upgrade health of new instances is monitored and if failure occurs rollback happens to previous version automatically.
- Management of application configuration and secrets. 

## Use cases
- Large scale application deployments
- Management of microservices
- CI/CD software development
- Server less computing
- Hybrid and multi-cloud deployments
- Big data processing
- Computation 
- Machine learning 

1. It is a container orchestrator that performs the scheduling, running and recovery of your containerised applications in a horizontally scalable and self-healing way.

## Kubernetes architecture


<img src="/images/Container/KubernetesArchitecture.gif"/>

Kubernetes architecture consists of two main logical groups:

2. <b>Control plane</b> 
    - this is where K8s system processes that are responsible for scheduling workloads defined by you and keeping the system healthy live.
3. <b>Worker nodes</b> 
    - this is where containers are scheduled and run.

𝗛𝗼𝘄 𝗱𝗼𝗲𝘀 𝗞𝘂𝗯𝗲𝗿𝗻𝗲𝘁𝗲𝘀 𝗵𝗲𝗹𝗽 𝘆𝗼𝘂?

4. You can have thousands of Nodes (usually you only need tens of them) in your K8s cluster, each of them can host multiple containers. Nodes can be added or removed from the cluster as needed. This enables unrivaled horizontal scalability.
5. Kubernetes provides an easy to use and understand declarative interface to deploy applications. Your application deployment definition can be described in yaml, submitted to the cluster and the system will take care that the desired state of the application is always up to date.
6. Users are empowered to create and own their application architecture in boundaries pre-defined by Cluster Administrators.

- ✅ In most cases you can deploy multiple types of ML Applications into a single cluster, you don’t need to care about which server to deploy to - K8s will take care of it.
- ✅ You can request different amounts of dedicated machine resources per application.
- ✅ If your application goes down - K8s will make sure that a desired number of replicas is always alive.
- ✅ You can roll out new versions of the running application using multiple strategies - K8s will safely do it for you.
- ✅ You can expose your ML Services for other Product Apps to use with few intuitive resource definitions.


## The Control Plane
The control plane comprises several components such as API server, metadata store for maintaining cluster state, multiple controllers to manage nodes in the data plane and enable user access. The control plane is distributed across multiple systems for high availability and robust infrastructure. The data plane comprises multiple nodes or workers. The control plane deploys and runs pods (a group of containers) on nodes, looks for changes and responds. Let’s look in detail about components in Kubernetes architecture. 


### Kubectl
It is a command line tool used to interact with the Kubernetes cluster. The control plane consists of API server, the etcd metadata store, Scheduler, Controller manager and cloud controller manager. 

### API Server
The Kube API Server is REST server which exposes Kubernetes APIs to the external world. We can have multiple instances of API server in the control plane for high availability. API server cluster state is kept in etcd. 

### etcd Store
The complete cluster is stored in etcd (https://coreos.com/etcd/) , which is a consistent, reliable and distributed key value store. The etcd store is an open-source object developed by CoreOS initially. For redundancy 3 to 5 instances are maintained if you lose data in etcd store you lose your cluster also. 


### Scheduler
Kube-scheduler is responsible for scheduling Pods to worker nodes. Implementation of sophisticated scheduling algorithms takes a lot of information into account such as availability of resources on each node, constraints mentioned by user, type of available nodes, resource limits and quotas, and other factors such as affinity , anti-affinity, tolerations and taints.

### Controller Manager

The Kube controller manager is a single process which has multiple controllers to achieve simplicity. These controllers keep a watch on changes and respond accordingly 

- Node controllers are responsible for notice and respond when a node goes down
- Replication controller ensure there is correct number of pods for each replica set or objects for replication controller
- Endpoints controller assign for each service an endpoint object which lists the service pods
- Service account and token controllers initialize new namespaces with default service account and corresponding API access tokens

## The Data Plane 
The data plane comprises nodes in the cluster which run containerized workloads or pods. The data plane and control plane share physical and logical machines. In order to communicate to nodes Kubernetes installs several components on each node, watch, schedule pods etc

### Kubelet
The Kubelet is Kubernetes agent and responsible for talking to API servers and running and managing pods on the node. Kubelet is responsible for : 

- Download pod secrets from API server
- Volume mounts
- Pod container running via container runtime interface (CRI)
- Report status of each Pod and node
- Probe container liveness

#### Kube Proxy
Networking aspects are handled by this component for the node. It operates as local front for services and forwards TCP and UDP packets and discovers IP addresses of services via DNS or environment variables

### Container Runtime
Kubernetes runs containers and supports a variety of container runtimes. Docker is supported initially. Kubernetes runs containers via an interface known as CRI which is based on gRPC.


- ❗️Having said this, while it is a bliss to use, usually the operation of Kubernetes clusters is what is feared. It is a complex system.
- ❗️Master Plane is an overhead, you need it even if you want to deploy a single small application.



Please have a look at this youtube video.😁
<a href="https://www.youtube.com/watch?v=PivpCKEiQOQ ">Hiteler uses Docker(Downfall pardoy)</a> 

<p>Hitler has represented boss or a customer’s frustration very well. New technology promises to solve all problems, but in facts we are using more and more resources. Developers are always obsessed with new technology and they believe that they are solving bigger problems. But many times we over complicate the system.</p>
