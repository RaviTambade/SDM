

Certainly! Multiple-choice questions (MCQs) about Docker can help test knowledge and understanding of Docker concepts and usage. Here are a few sample MCQs along with their answers:

### MCQs about Docker

1. **What is Docker?**
   - A. A virtual machine
   - B. An operating system
   - C. A containerization platform
   - D. A programming language

   **Answer:** C. A containerization platform

2. **What is the purpose of Docker containers?**
   - A. To emulate hardware
   - B. To encapsulate applications and their dependencies
   - C. To provide a graphical user interface
   - D. To host virtual networks

   **Answer:** B. To encapsulate applications and their dependencies

3. **Which command is used to build a Docker image from a Dockerfile?**
   - A. `docker run`
   - B. `docker start`
   - C. `docker build`
   - D. `docker create`

   **Answer:** C. `docker build`

4. **How can you list all running Docker containers?**
   - A. `docker ps -a`
   - B. `docker list -r`
   - C. `docker containers`
   - D. `docker ps`

   **Answer:** D. `docker ps`

5. **Which Docker command is used to remove a Docker container?**
   - A. `docker stop`
   - B. `docker rm`
   - C. `docker delete`
   - D. `docker kill`

   **Answer:** B. `docker rm`

6. **What does a Dockerfile typically start with?**
   - A. `BEGIN`
   - B. `INIT`
   - C. `FROM`
   - D. `START`

   **Answer:** C. `FROM`

7. **Which Docker command is used to push a Docker image to a registry?**
   - A. `docker upload`
   - B. `docker push`
   - C. `docker export`
   - D. `docker deploy`

   **Answer:** B. `docker push`

8. **How can you specify the port that a Docker container should listen on?**
   - A. `docker port`
   - B. `docker expose`
   - C. `docker run -p`
   - D. `docker connect`

   **Answer:** C. `docker run -p`

9. **What is the difference between Docker images and Docker containers?**
   - A. Images are executable while containers are not.
   - B. Images are used to build containers.
   - C. Containers are used to build images.
   - D. There is no difference; the terms are interchangeable.

   **Answer:** B. Images are used to build containers.

10. **Which Docker command is used to create a new Docker container from an image and start it?**
    - A. `docker create`
    - B. `docker start`
    - C. `docker run`
    - D. `docker spawn`

    **Answer:** C. `docker run`

These questions cover a range of basic Docker concepts including commands, Dockerfile instructions, container management, and basic Docker terminology. They are designed to assess fundamental knowledge of Docker usage and principles.


Sure, let's delve into some more advanced multiple-choice questions (MCQs) related to Docker, covering more detailed aspects and scenarios:

### Advanced MCQs about Docker

1. **What is Docker Compose used for?**
   - A. Building Docker images
   - B. Managing Docker containers in production
   - C. Orchestrating multiple Docker containers as a single application
   - D. Creating Docker networks

   **Answer:** C. Orchestrating multiple Docker containers as a single application

2. **Which Docker command is used to scale services defined in a Docker Compose file?**
   - A. `docker scale`
   - B. `docker compose scale`
   - C. `docker service scale`
   - D. `docker stack scale`

   **Answer:** A. `docker scale`

3. **What is the purpose of Docker volumes?**
   - A. To define environment variables for Docker containers
   - B. To enable communication between Docker containers
   - C. To provide persistent storage for Docker containers
   - D. To manage Docker networking

   **Answer:** C. To provide persistent storage for Docker containers

4. **Which Docker command is used to inspect the detailed configuration of a Docker resource (container, image, volume, etc.)?**
   - A. `docker info`
   - B. `docker inspect`
   - C. `docker describe`
   - D. `docker view`

   **Answer:** B. `docker inspect`

5. **When building a Docker image, what does the `COPY` instruction in a Dockerfile do?**
   - A. Copies files or directories from the host machine to the Docker image filesystem
   - B. Copies files or directories from the Docker image filesystem to the host machine
   - C. Copies files or directories between different Docker containers
   - D. Copies environment variables from the host machine to the Docker image

   **Answer:** A. Copies files or directories from the host machine to the Docker image filesystem

6. **Which Docker networking mode allows communication between containers running on the same Docker host without exposing ports to the outside world?**
   - A. Host networking
   - B. Bridge networking
   - C. Overlay networking
   - D. None networking

   **Answer:** B. Bridge networking

7. **What is the purpose of Docker Swarm?**
   - A. To provide container orchestration and clustering capabilities
   - B. To manage Docker images in a registry
   - C. To automate Docker container deployments
   - D. To monitor Docker container performance

   **Answer:** A. To provide container orchestration and clustering capabilities

8. **In Docker, what does the `ENTRYPOINT` instruction in a Dockerfile define?**
   - A. The base image for the Docker container
   - B. The command that will be run when the container starts
   - C. Environment variables that will be set in the Docker container
   - D. The networking configuration for the Docker container

   **Answer:** B. The command that will be run when the container starts

9. **Which Docker command is used to attach to a running Docker container's console?**
   - A. `docker exec`
   - B. `docker attach`
   - C. `docker connect`
   - D. `docker console`

   **Answer:** B. `docker attach`

10. **What does Docker Registry provide?**
    - A. A graphical user interface for Docker container management
    - B. Centralized storage for Docker images
    - C. Built-in security scanning for Docker containers
    - D. Real-time monitoring of Docker container performance

    **Answer:** B. Centralized storage for Docker images

These advanced MCQs cover more nuanced aspects of Docker, including Docker Compose, networking modes, Docker Swarm, Dockerfile instructions, and more specific Docker commands and features. They are designed to test deeper understanding and practical knowledge of Docker beyond basic usage.



CI/CD Pipeline

Certainly! Here are some multiple-choice questions (MCQs) related to Continuous Integration/Continuous Deployment (CI/CD) pipelines:

### MCQs about CI/CD Pipeline

1. **What is the primary goal of a CI/CD pipeline?**
   - A. To automate the process of deploying software
   - B. To manage database schemas
   - C. To generate test reports
   - D. To monitor server logs

   **Answer:** A. To automate the process of deploying software

2. **Which phase of the CI/CD pipeline typically involves compiling source code and running automated tests?**
   - A. Continuous Integration (CI)
   - B. Continuous Deployment (CD)
   - C. Continuous Monitoring
   - D. Continuous Delivery

   **Answer:** A. Continuous Integration (CI)

3. **What is the purpose of the "build" stage in a CI/CD pipeline?**
   - A. To deploy the application to production
   - B. To perform static code analysis
   - C. To package the application artifact
   - D. To rollback changes in case of failures

   **Answer:** C. To package the application artifact

4. **Which tool or service is commonly used for managing CI/CD pipelines and automating software deployments?**
   - A. Docker
   - B. Kubernetes
   - C. Jenkins
   - D. Ansible

   **Answer:** C. Jenkins

5. **In a CI/CD pipeline, what is the role of the "deployment" stage?**
   - A. To trigger the pipeline automatically
   - B. To run load tests on the application
   - C. To deploy the application to a target environment (e.g., staging, production)
   - D. To monitor application performance metrics

   **Answer:** C. To deploy the application to a target environment (e.g., staging, production)

6. **What is the difference between Continuous Delivery (CD) and Continuous Deployment (CD) in a CI/CD pipeline?**
   - A. Continuous Delivery includes manual approval steps before deployment, while Continuous Deployment does not.
   - B. Continuous Deployment is focused on automating tests, while Continuous Delivery is focused on automating builds.
   - C. Continuous Deployment is the same as Continuous Integration (CI), while Continuous Delivery includes deployment automation.
   - D. There is no difference; both terms are used interchangeably.

   **Answer:** A. Continuous Delivery includes manual approval steps before deployment, while Continuous Deployment does not.

7. **Which of the following is NOT typically a best practice in CI/CD pipelines?**
   - A. Running automated tests before deploying changes
   - B. Ensuring each commit to version control triggers the pipeline
   - C. Manually deploying changes to production after testing
   - D. Using version control to manage source code changes

   **Answer:** C. Manually deploying changes to production after testing

8. **What is the purpose of Continuous Integration (CI) in a CI/CD pipeline?**
   - A. To automatically deploy changes to production
   - B. To automatically merge code changes from feature branches
   - C. To manually review code changes before deployment
   - D. To monitor application performance

   **Answer:** B. To automatically merge code changes from feature branches

9. **Which phase of the CI/CD pipeline is responsible for validating and approving changes before they are deployed?**
   - A. Continuous Integration (CI)
   - B. Continuous Deployment (CD)
   - C. Continuous Monitoring
   - D. Continuous Approval

   **Answer:** D. Continuous Approval

10. **Which tool or service is commonly used for container orchestration in a CI/CD pipeline environment?**
    - A. Jenkins
    - B. Docker
    - C. GitLab
    - D. Kubernetes

    **Answer:** D. Kubernetes

These questions cover various aspects of CI/CD pipelines, including their purpose, stages, tools commonly used, best practices, and the difference between Continuous Delivery and Continuous Deployment. They aim to assess understanding of how CI/CD pipelines automate software delivery processes from development through deployment.


Certainly! Here are more multiple-choice questions (MCQs) that delve deeper into various aspects of CI/CD pipelines:

### More MCQs about CI/CD Pipeline

1. **What is the role of artifact repositories in a CI/CD pipeline?**
   - A. To store container images
   - B. To store application configuration files
   - C. To store build artifacts and dependencies
   - D. To monitor application performance metrics

   **Answer:** C. To store build artifacts and dependencies

2. **Which statement best describes the concept of "Infrastructure as Code" (IaC) in the context of CI/CD pipelines?**
   - A. It refers to managing infrastructure manually through scripts and commands.
   - B. It involves manually configuring infrastructure components for deployment.
   - C. It automates the provisioning and management of infrastructure using code.
   - D. It focuses on integrating infrastructure monitoring tools into the CI/CD pipeline.

   **Answer:** C. It automates the provisioning and management of infrastructure using code.

3. **Which practice is essential for achieving faster feedback in a CI/CD pipeline?**
   - A. Manual testing
   - B. Scheduled deployments
   - C. Continuous integration of small changes
   - D. Dependency management

   **Answer:** C. Continuous integration of small changes

4. **What is the purpose of Canary deployments in a CI/CD pipeline?**
   - A. To roll back changes automatically in case of failures
   - B. To test new features on a small subset of users or traffic
   - C. To run load tests on the application
   - D. To monitor application performance in real-time

   **Answer:** B. To test new features on a small subset of users or traffic

5. **Which tool or service is used to automate the orchestration and deployment of Docker containers in a CI/CD pipeline?**
   - A. Jenkins
   - B. Docker Compose
   - C. Kubernetes
   - D. GitLab

   **Answer:** C. Kubernetes

6. **In a CI/CD pipeline, what is the purpose of a "rollback" strategy?**
   - A. To automatically trigger deployments on successful builds
   - B. To revert to a previous stable version in case of deployment failures
   - C. To manage conflicts between different feature branches
   - D. To review code changes before merging into the main branch

   **Answer:** B. To revert to a previous stable version in case of deployment failures

7. **Which practice is recommended to ensure security in a CI/CD pipeline?**
   - A. Use of static code analysis tools
   - B. Manual deployment of artifacts
   - C. Infrequent code reviews
   - D. Dependency on external libraries

   **Answer:** A. Use of static code analysis tools

8. **Which component is responsible for automatically triggering a CI/CD pipeline upon code changes?**
   - A. Artifact repository
   - B. Version control system
   - C. CI/CD server
   - D. Container registry

   **Answer:** B. Version control system

9. **What is the purpose of blue-green deployments in a CI/CD pipeline?**
   - A. To automatically scale infrastructure based on traffic
   - B. To automate testing of microservices architecture
   - C. To minimize downtime by routing traffic between two identical environments
   - D. To monitor application logs in real-time

   **Answer:** C. To minimize downtime by routing traffic between two identical environments

10. **Which metric is commonly used to measure the efficiency of a CI/CD pipeline?**
    - A. Number of deployments per day
    - B. Size of the development team
    - C. Number of open issues in the bug tracker
    - D. Average response time of the application

    **Answer:** A. Number of deployments per day

These additional questions cover topics such as artifact repositories, Infrastructure as Code (IaC), deployment strategies (Canary and blue-green), security practices, and metrics for evaluating CI/CD pipeline efficiency. They aim to assess a deeper understanding of CI/CD pipeline concepts and practices in software development and deployment processes.




## Jenkins
Certainly! Here are some multiple-choice questions (MCQs) focused specifically on Jenkins, a popular automation server used in CI/CD pipelines:

### MCQs about Jenkins

1. **What is Jenkins primarily used for in a CI/CD pipeline?**
   - A. Container orchestration
   - B. Version control
   - C. Automated testing and continuous integration
   - D. Infrastructure provisioning

   **Answer:** C. Automated testing and continuous integration

2. **Which programming language is commonly used for writing Jenkins Pipeline scripts?**
   - A. Python
   - B. Java
   - C. Groovy
   - D. JavaScript

   **Answer:** C. Groovy

3. **What is the purpose of Jenkins plugins?**
   - A. To define Jenkins build jobs
   - B. To integrate Jenkins with version control systems
   - C. To manage Docker containers
   - D. To extend Jenkins functionality with additional features

   **Answer:** D. To extend Jenkins functionality with additional features

4. **Which Jenkins feature allows you to schedule jobs to run at specific times or intervals?**
   - A. Build triggers
   - B. Jenkinsfile
   - C. Jenkins Pipeline
   - D. Jenkins Scheduler

   **Answer:** A. Build triggers

5. **Which Jenkins component is responsible for managing the execution of build jobs?**
   - A. Jenkins Agent
   - B. Jenkins Master
   - C. Jenkins Executor
   - D. Jenkins Controller

   **Answer:** B. Jenkins Master

6. **Which Jenkins command-line tool is used for managing Jenkins jobs from the terminal?**
   - A. `jenkins-cli`
   - B. `jenkins-tool`
   - C. `jenkins-admin`
   - D. `jenkins-manage`

   **Answer:** A. `jenkins-cli`

7. **What is the purpose of the Jenkins Pipeline feature?**
   - A. To automate the installation of Jenkins plugins
   - B. To define complex build and deployment workflows as code
   - C. To monitor Jenkins server performance
   - D. To manage Jenkins users and permissions

   **Answer:** B. To define complex build and deployment workflows as code

8. **Which authentication mechanism does Jenkins support for securing access to its web interface and API?**
   - A. OAuth
   - B. JWT
   - C. Basic Authentication
   - D. SAML

   **Answer:** C. Basic Authentication

9. **Which Jenkins plugin is commonly used for integrating Jenkins with version control systems like Git?**
   - A. Jenkins GitHub plugin
   - B. Jenkins Docker plugin
   - C. Jenkins Pipeline plugin
   - D. Jenkins Kubernetes plugin

   **Answer:** A. Jenkins GitHub plugin

10. **How can you define a Jenkins job as code using Jenkins Pipeline?**
    - A. By configuring job parameters in the Jenkins UI
    - B. By writing a Jenkinsfile in the root of the repository
    - C. By using the Jenkins declarative syntax in the job configuration
    - D. By running a script on the Jenkins agent

    **Answer:** B. By writing a Jenkinsfile in the root of the repository

These questions cover various aspects of Jenkins, including its purpose, features, configuration, plugins, and integration with other tools and systems. They aim to assess knowledge and understanding of Jenkins as a key component in CI/CD pipelines for automating software development processes.


Certainly! Let's dive deeper into Jenkins with some more multiple-choice questions (MCQs) covering advanced topics and specific aspects of Jenkins:

### More MCQs about Jenkins

1. **What is the difference between Jenkins Freestyle project and Jenkins Pipeline project?**
   - A. Freestyle projects support parallel execution, while Pipeline projects do not.
   - B. Pipeline projects are written in Groovy script, while Freestyle projects use a graphical UI for configuration.
   - C. Freestyle projects are suited for Docker container management, while Pipeline projects are not.
   - D. Pipeline projects have built-in support for version control systems, while Freestyle projects do not.

   **Answer:** B. Pipeline projects are written in Groovy script, while Freestyle projects use a graphical UI for configuration.

2. **Which Jenkins plugin is commonly used for defining and managing Jenkins Pipeline as code?**
   - A. Pipeline
   - B. GitHub
   - C. Docker
   - D. Kubernetes

   **Answer:** A. Pipeline

3. **What is the purpose of Jenkins agents (formerly known as slaves)?**
   - A. To manage Jenkins user permissions
   - B. To provide additional security layers for Jenkins servers
   - C. To execute Jenkins jobs on remote machines
   - D. To monitor Jenkins plugin performance

   **Answer:** C. To execute Jenkins jobs on remote machines

4. **Which Jenkins Pipeline directive is used to define a stage in the Jenkinsfile?**
   - A. `step`
   - B. `stage`
   - C. `task`
   - D. `node`

   **Answer:** B. `stage`

5. **Which Jenkins feature allows you to define shared configurations across multiple Jenkins jobs?**
   - A. Jenkins Pipeline
   - B. Jenkins Matrix Project
   - C. Jenkins Multi-Branch Project
   - D. Jenkins Configuration as Code (JCasC)

   **Answer:** D. Jenkins Configuration as Code (JCasC)

6. **Which Jenkins plugin enables integration with tools like Jira, Slack, or email notifications for reporting build statuses?**
   - A. Jenkins Pipeline
   - B. Jenkins GitHub plugin
   - C. Jenkins Blue Ocean
   - D. Jenkins Notification plugin

   **Answer:** D. Jenkins Notification plugin

7. **What is the purpose of Jenkins Blue Ocean?**
   - A. To provide a user-friendly interface for managing Jenkins pipelines and jobs
   - B. To automate the deployment of Docker containers
   - C. To manage Kubernetes clusters from within Jenkins
   - D. To visualize Jenkins job logs in real-time

   **Answer:** A. To provide a user-friendly interface for managing Jenkins pipelines and jobs

8. **Which Jenkins tool or plugin is used for performing code quality analysis and generating reports?**
   - A. Jenkins Checkstyle plugin
   - B. Jenkins Maven plugin
   - C. Jenkins SonarQube plugin
   - D. Jenkins Artifactory plugin

   **Answer:** C. Jenkins SonarQube plugin

9. **Which Jenkins feature allows you to define different configurations for different branches of the same repository?**
   - A. Jenkins Multibranch Pipeline
   - B. Jenkins Matrix Project
   - C. Jenkins Pipeline as Code
   - D. Jenkins Shared Libraries

   **Answer:** A. Jenkins Multibranch Pipeline

10. **How does Jenkins handle distributed builds across multiple nodes?**
    - A. By running all builds on the Jenkins Master node
    - B. By using Jenkins agents to distribute builds to different nodes
    - C. By using Docker containers for build isolation
    - D. By configuring load balancers for build distribution

    **Answer:** B. By using Jenkins agents to distribute builds to different nodes

These questions cover advanced features and concepts of Jenkins, including Jenkins Pipeline, Jenkins agents, plugins, integration with other tools, and best practices for configuring and managing CI/CD pipelines. They aim to assess a deeper understanding of Jenkins as a powerful automation server in software development workflows.

## Kubernets
Certainly! Let's dive deeper into Jenkins with some more multiple-choice questions (MCQs) covering advanced topics and specific aspects of Jenkins:

### More MCQs about Jenkins

1. **What is the difference between Jenkins Freestyle project and Jenkins Pipeline project?**
   - A. Freestyle projects support parallel execution, while Pipeline projects do not.
   - B. Pipeline projects are written in Groovy script, while Freestyle projects use a graphical UI for configuration.
   - C. Freestyle projects are suited for Docker container management, while Pipeline projects are not.
   - D. Pipeline projects have built-in support for version control systems, while Freestyle projects do not.

   **Answer:** B. Pipeline projects are written in Groovy script, while Freestyle projects use a graphical UI for configuration.

2. **Which Jenkins plugin is commonly used for defining and managing Jenkins Pipeline as code?**
   - A. Pipeline
   - B. GitHub
   - C. Docker
   - D. Kubernetes

   **Answer:** A. Pipeline

3. **What is the purpose of Jenkins agents (formerly known as slaves)?**
   - A. To manage Jenkins user permissions
   - B. To provide additional security layers for Jenkins servers
   - C. To execute Jenkins jobs on remote machines
   - D. To monitor Jenkins plugin performance

   **Answer:** C. To execute Jenkins jobs on remote machines

4. **Which Jenkins Pipeline directive is used to define a stage in the Jenkinsfile?**
   - A. `step`
   - B. `stage`
   - C. `task`
   - D. `node`

   **Answer:** B. `stage`

5. **Which Jenkins feature allows you to define shared configurations across multiple Jenkins jobs?**
   - A. Jenkins Pipeline
   - B. Jenkins Matrix Project
   - C. Jenkins Multi-Branch Project
   - D. Jenkins Configuration as Code (JCasC)

   **Answer:** D. Jenkins Configuration as Code (JCasC)

6. **Which Jenkins plugin enables integration with tools like Jira, Slack, or email notifications for reporting build statuses?**
   - A. Jenkins Pipeline
   - B. Jenkins GitHub plugin
   - C. Jenkins Blue Ocean
   - D. Jenkins Notification plugin

   **Answer:** D. Jenkins Notification plugin

7. **What is the purpose of Jenkins Blue Ocean?**
   - A. To provide a user-friendly interface for managing Jenkins pipelines and jobs
   - B. To automate the deployment of Docker containers
   - C. To manage Kubernetes clusters from within Jenkins
   - D. To visualize Jenkins job logs in real-time

   **Answer:** A. To provide a user-friendly interface for managing Jenkins pipelines and jobs

8. **Which Jenkins tool or plugin is used for performing code quality analysis and generating reports?**
   - A. Jenkins Checkstyle plugin
   - B. Jenkins Maven plugin
   - C. Jenkins SonarQube plugin
   - D. Jenkins Artifactory plugin

   **Answer:** C. Jenkins SonarQube plugin

9. **Which Jenkins feature allows you to define different configurations for different branches of the same repository?**
   - A. Jenkins Multibranch Pipeline
   - B. Jenkins Matrix Project
   - C. Jenkins Pipeline as Code
   - D. Jenkins Shared Libraries

   **Answer:** A. Jenkins Multibranch Pipeline

10. **How does Jenkins handle distributed builds across multiple nodes?**
    - A. By running all builds on the Jenkins Master node
    - B. By using Jenkins agents to distribute builds to different nodes
    - C. By using Docker containers for build isolation
    - D. By configuring load balancers for build distribution

    **Answer:** B. By using Jenkins agents to distribute builds to different nodes

These questions cover advanced features and concepts of Jenkins, including Jenkins Pipeline, Jenkins agents, plugins, integration with other tools, and best practices for configuring and managing CI/CD pipelines. They aim to assess a deeper understanding of Jenkins as a powerful automation server in software development workflows.

Certainly! Here are more multiple-choice questions (MCQs) that delve deeper into Kubernetes, covering additional aspects and advanced topics:

### More MCQs about Kubernetes

1. **What is the purpose of Kubernetes ConfigMap resource?**
   - A. To manage secrets and sensitive information
   - B. To define environment variables for Pods
   - C. To automatically scale Pods based on CPU usage
   - D. To manage persistent storage volumes

   **Answer:** B. To define environment variables for Pods

2. **Which Kubernetes object is used to ensure a specific number of identical Pods are running at all times, even after node failures?**
   - A. DaemonSet
   - B. StatefulSet
   - C. ReplicaSet
   - D. Job

   **Answer:** C. ReplicaSet

3. **In Kubernetes, how does a DaemonSet differ from a Deployment?**
   - A. DaemonSets manage stateful applications, while Deployments manage stateless applications.
   - B. DaemonSets ensure that exactly one Pod is running on each node, while Deployments manage multiple Pods per node.
   - C. DaemonSets deploy applications in a rolling update fashion, while Deployments deploy applications in a blue-green manner.
   - D. DaemonSets ensure that a copy of a Pod runs on every node, while Deployments manage the lifecycle of Pods based on a desired state.

   **Answer:** D. DaemonSets ensure that a copy of a Pod runs on every node, while Deployments manage the lifecycle of Pods based on a desired state.

4. **Which Kubernetes resource is used to allocate storage dynamically to Pods?**
   - A. PersistentVolume
   - B. PersistentVolumeClaim
   - C. StorageClass
   - D. ConfigMap

   **Answer:** C. StorageClass

5. **What is the purpose of Kubernetes StatefulSet?**
   - A. To manage stateless applications that can be scaled horizontally
   - B. To manage stateful applications that require stable and unique network identities, persistent storage, and ordered deployment and scaling
   - C. To manage periodic or batch workloads in Kubernetes
   - D. To manage auto-scaling of Pods based on CPU or memory usage

   **Answer:** B. To manage stateful applications that require stable and unique network identities, persistent storage, and ordered deployment and scaling

6. **Which Kubernetes component is responsible for scheduling Pods onto suitable nodes in the cluster?**
   - A. Kubernetes API Server
   - B. Kubernetes Scheduler
   - C. Kubernetes Controller Manager
   - D. Kubernetes Kubelet

   **Answer:** B. Kubernetes Scheduler

7. **What is the purpose of Kubernetes Ingress resource?**
   - A. To expose a service to the external world
   - B. To manage network policies for Pod communication within the cluster
   - C. To configure load balancing for services in Kubernetes
   - D. To monitor and log Kubernetes cluster events

   **Answer:** A. To expose a service to the external world

8. **Which Kubernetes component is responsible for running containers and providing the Kubernetes runtime environment on each node?**
   - A. Kubernetes API Server
   - B. Kubernetes Scheduler
   - C. Kubernetes Controller Manager
   - D. Kubernetes Kubelet

   **Answer:** D. Kubernetes Kubelet

9. **What is the primary role of Kubernetes HorizontalPodAutoscaler (HPA)?**
   - A. To automatically deploy Pods based on CPU usage
   - B. To monitor and manage Kubernetes cluster health
   - C. To horizontally scale the number of Pods based on metrics such as CPU or memory usage
   - D. To manage authentication and authorization in Kubernetes

   **Answer:** C. To horizontally scale the number of Pods based on metrics such as CPU or memory usage

10. **Which Kubernetes feature is used for managing network policies to control traffic between Pods in a cluster?**
    - A. Ingress
    - B. NetworkPolicy
    - C. Service
    - D. PodSecurityPolicy

    **Answer:** B. NetworkPolicy

These questions cover additional Kubernetes concepts such as ConfigMap, DaemonSet, StatefulSet, StorageClass, Ingress, scheduling, autoscaling, network policies, and the roles of various Kubernetes components. They aim to assess a comprehensive understanding of Kubernetes as a container orchestration platform used for deploying, managing, and scaling containerized applications in cloud-native environments.
