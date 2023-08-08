# Software Modeling
Software models are ways of expressing a software design. Usually some sort of abstract language or pictures are used to express the software design.

## Analysis Modeling

 Analysis Model is a technical representation of the system.Analysis model operates as a link between the <b>System Description</b> and the  <b>Design Model</b>.
In the analysis model, information, functions and the behaviour of the system is defined and these are translated into the architecture, interface and component level design in the 'Design Modeling'.

The analysis model must achieve three primary objectives: 
* To describe what the customer requires
* To establish a basis for the creation of a software design
* To define a set of requirements that can be validated once the software is built.

<img src="/images/Modeling/01_AnalysisModeling.PNG" />

At the core of the model lies the data dictionary—a repository that contains descriptions of all data objects consumed or produced by the software. Three different diagrams surround the the core. The entity relation diagram (ERD) depicts relationships between data objects. The ERD is the notation that is used to conduct the data modeling activity. The attributes of each data object noted in the ERD can be described using a data object description.

### Data Flow Diagram (DFD)
DFD serves two purposes: 
* To provide an indication of how data are transformed as they move through the system and 
* To depict the functions (and subfunctions) that transform the data flow. 

The DFD provides additional information that is used during the analysis of the information domain and serves as a basis for the modeling of function. A description of each function presented in the DFD is contained in a Process Specification (PSPEC).

### State Transition Diagram (STD):
It indicates how the system behaves as a consequence of external events. To accomplish this, the STD represents the various modes of behavior (called states) of the system and the manner in which transitions are made from state to state. The STD serves as the basis for behavioral modeling. Additional information about the control aspects of the software is contained in the control specification (CSPEC).

## Data Modelling

In the ever-changing business landscape, companies are becoming more reliant on their data than defining the Business Use Case ever before. With a greater reliance on data, it’s essential that businesses become aware of these two concepts: <b>Data Modeling and Data Architecture</b>. Ultimately, implementing data modeling and data architecture into business operations will prove to be a worthwhile investment as they help to create more Data-Driven Operations and stronger data infrastructures for the company.

### What is Data Modeling?
As companies aim to run a more data-driven operation, cleaning and modeling the data is often the first step. The focus in data modeling is on the selection and organization of the data, rather than on how you will eventually use the data.

Your data is the key to wise business decisions. And your data model is the key to that data. 

A data model will enable your organization to understand, analyze, and communicate around your data assets. It serves as a single source of truth, helping you make sure there is consistency in things like rules, language, and default values.

Blow are examples of Data Modeling:
* Entity types
* Attributes
* Naming conventions
* Relationships
* Rules

Data modeling will help you create relational tables and procedures and provide you with a clear picture of your base data. A smart and well-structured data model will help you identify data gaps and redundant data points.

### The 3 Levels of Data Modeling

#### 1.Conceptual Level Data Model
A conceptual data model focuses on what data should be in the system. Data architects are often involved in creating this model, but the input from relevant business stakeholders is fundamental. The purpose of the conceptual data model is to organize and define business concepts and rules.

#### 2.Logical Level Data Model
The logical data model defines how to implement the system, regardless of what DBMS (Database Management System) you will eventually use. This model is often created by data architects, working closely with business analysts and the relevant business stakeholders. The logical level is where you develop a technical map of all the rules and data structures.

#### 3.Physical Level Data Model
Once there is clarity regarding what data should be in the system, and how to treat that data, it's time for the physical data model. This is the model describing how to implement the system in the specific Database Management System. This is often where database analysts and developers enter the process, to drive the implementation. 

Creating a data model may appear time-consuming, but rest assured that this is time well spent. Going forward, it will make upgrading and maintenance of your databases and IT infrastructure quicker, easier, and cheaper. 

### What Is Data Architecture?
While data modeling focuses on the representation of the data, data architecture is more concerned with what tools and platforms to use for storing and analyzing the data. The data architect is the one choosing and implementing your tech stack to create an ecosystem based on your organizational structure and business goals. 

Following are the questions of Data Architecture. 

* Should you migrate to the Cloud? 
* What security concerns do you need to address? 
* What tools and platforms do you need? 

Without proper data architecture, things tend to grow increasingly chaotic over time as you add new tools and tech solutions on an ad-hoc basis. Letting this go on without a clear structure will mean not only a loss in productivity and control but usually also high costs. 

<img src="/images/Modeling/DataArchitecture.jpg" />

Below are some examples of what data architecture concerns:

* Cloud Storage
* Hardware Virtualization
* Hosting
* Encryption
* Infrastructure
* Data processing

Data architecture forms an integral part of the overall enterprise architecture, defining the structure and operation of the whole organization. The mission of the data architect is enabling stakeholders to access business-critical data – regardless of where it originally comes from – and make it easy for them to use and understand it from their unique perspectives.

### Data Modeling vs Data Architecture: Key Differences 
While data modeling and data architecture share some similarities, there are also some key differences. The following are five key differences between data modeling and data architecture.

* Data modeling focuses on the representation of the data while data architecture is concerned with what tools and platforms to use for storing and analyzing it.
* Data modeling is all about the accuracy of data while data architecture is about the infrastructure housing that data.
* Data modeling is concerned with the reliability of the data, while data architecture is concerned with keeping the data safe.
* A data model is an attempted representation of reality, while data architecture is a framework of systems and logistics.
* A data model represents a limited set of business concepts and how they relate to one another. Data architecture covers the data infrastructure of the entire organization.

The following information outlines additional differences between these two concepts.

* Entities and Rules vs Solutions and Tools
Data modeling is about the relationship between data entities. It creates rules for these relations and links and outputs based on these rules.  

* Data architecture, on the other hand, looks at the entire database, and the tools and solutions needed to store process, and analyze the data. This also includes hardware and administration. 

* Business Concepts vs Infrastructure
The purpose of a data model is to create as accurate a representation as possible of the business concepts and how they relate to one another. That is what a model is; it's an attempted representation of reality.  

Data architecture is concerned with the data infrastructure of the entire organization, in which the data models exist. It is an all-encompassing framework of systems and logistics, where the data models are an essential component. 

* Reliability vs Security
Data modeling is all about the accuracy of data. What data points to use? How to make sure the data is clean, up to date, and accurately represented? If we use a house as an analogy, the Data Modeler is concerned with the inhabitants of the house: the data points. What to name them, how to make sure they are who they say they are, and how they should interact with each other.

Data architecture is about building the house itself. Data architecture has a strong focus on how to keep the data safe. How to store it? What parts need to be encrypted? Who has access to what system, and what passwords and security systems are required? Those are the focus areas of the Data Architect. 

## Functional Modelling

Functional Modelling gives the process perspective of the object-oriented analysis model and an overview of what the system is supposed to do. It defines the function of the internal processes in the system with the aid of Data Flow Diagrams (DFDs). It depicts the functional derivation of the data values without indicating how they are derived when they are computed, or why they need to be computed.


### Data Flow Diagrams
Functional Modelling is represented through a hierarchy of DFDs. The DFD is a graphical representation of a system that shows the inputs to the system, the processing upon the inputs, the outputs of the system as well as the internal data stores. DFDs illustrate the series of transformations or computations performed on the objects or the system, and the external controls and objects that affect the transformation.

Rumbaugh et al. have defined DFD as, “A data flow diagram is a graph which shows the flow of data values from their sources in objects through processes that transform them to their destinations on other objects.”

A data flow diagram (DFD) is a visual representation of the information flow through a process or system. DFDs help you better understand process or system operation to discover potential problems, improve efficiency, and develop better processes. They range from simple overviews to complex, granular displays of a process or system.

* DFDs became popular in the 1970s and have maintained their widespread use by being easy to understand. Visually displaying how a process or system works can hold people’s attention and explain complex concepts better than blocks of text can, so DFDs are able to help almost anyone grasp a system’s or process’ logic and functions.

* There are two types of DFDs — logical and physical. Logical diagrams display the theoretical process of moving information through a system, like where the data comes from, where it goes, how it changes, and where it ends up.

* Physical diagrams show you the practical process of moving information through a system, like how your system’s specific software, hardware, files, employees, and customers influences its flow of information.

* You can either use logical or physical diagrams to describe the same flow of information or you can use them in conjunction to understand a process or system on a more granular level. But, before you can use a DFD to understand your system or process’ flow of information, you need to know the standard notations or symbols used to describe it.


* Professionals in various industries, like software engineering, IT, ecommerce, and product management & design, can use DFDs to better understand, refine, or implement a new system or process.


### Data Flow Diagram Symbols

Data Flow Diagram symbols are standardized notations, like rectangles, circles, arrows, and short-text labels, that describe a system or process’ data flow direction, data inputs, data outputs, data storage points, and its various sub-processes.

Four main elements of a DFD — external entity, process, data store, and data flow.

<img src="/images/Modeling/DFD/01_ProcessExample.jpg" />


- External Entity
An external entity, which are also known as terminators, sources, sinks, or actors, are an outside system or process that sends or receives data to and from the diagrammed system. They’re either the sources or destinations of information, so they’re usually placed on the diagram’s edges. External entity symbols are similar across models except for Unified, which uses a stick-figure drawing instead of a rectangle, circle, or square.



- Process
Process is a procedure that manipulates the data and its flow by taking incoming data, changing it, and producing an output with it. A process can do this by performing computations and using logic to sort the data, or change its flow of direction. Processes usually start from the top left of the DFD and finish on the bottom right of the diagram.

- Data Store
Data stores hold information for later use, like a file of documents that’s waiting to be processed. Data inputs flow through a process and then through a data store while data outputs flow out of a data store and then through a process.

- Data Flow
Data flow is the path the system’s information takes from external entities through processes and data stores. With arrows and succinct labels, the DFD can show you the direction of the data flow.

<img src="/images/Modeling/DFD/1_DFD.jpg" />

Before you start mapping out data flow diagrams you need to follow four best practices to create a valid DFD.

1. Each process should have at least one input and one output.

2. Each data store should have at least one data flow in and data flow out.

3. A system’s stored data must go through a process.

4. All processes in a DFD must link to another process or data store.

<img src="/images/Modeling/DFD/02_DataFlowExample.jpg" />


### DFD Level 1
<img src="/images/Modeling/DFD/2_Level1DFD.jpg" />

### DFD Level 2
<img src="/images/Modeling/DFD/3_Level2DFD.jpg" />


### Logical Data Flow Diagram
<img src="/images/Modeling/DFD/4_LogicalDataFlowDiagram.jpg" />

### Physical Data Flow Diagram

<img src="/images/Modeling/DFD/5_PhysicalDFDExample.jpg" />

##ER Diagrams (Entity-Relationship Model)

Entity-Relationship Model is a structural diagram model. An ER diagram contains connectors and symbols. It’s called an Entity Relationship Diagram because we are referring to entities within the system scope and their relationships.

An entity is referred to as an object. For example: students, products, companies and relationships are among these objects. When we say relationships we’re referring to how these objects are related to each other.

<img src="/images/Modeling/ER_Diagrams/01_ERDComponents.jpg" />

### How to Generate an ER Diagram
* Confirm the purpose of the ERD model. Try to separate the levels of abstraction, so that on each abstraction you know what each level is missing.
* Create your entities and the relationships between them. Start with three tables and then try to separate them if you’re getting repetitive data.
* If you started with three tables you can easily end up with five tables or more. This means you can access information more easily after separating them. Believe me, it’s easier to filter information with primary and foreign keys than with 100 columns holding the same information.
* Give your entities columns and name the attributes that you need for each of them.
* Finally set up your attributes, give them specific data types and set up your primary keys and foreign keys. Also, don’t forget for each data type to set up their restrictions and requirements.

<img src="/images/Modeling/ER_Diagrams/02_ERDBookStore.webp" />



# UML Diagrams

- UML stands for Unified Modeling Language. 
- It’s a rich language to model software solutions, application structures, system behavior and business processes.

 <img src="/images/Modeling/UML/01_UML-Diagram-types.png"/>




## Class Diagram
Class diagrams are the main building block of any object-oriented solution. It shows the classes in a system, attributes, and operations of each class and the relationship between each class.
 
In most modeling tools, a class has three parts. Name at the top, attributes in the middle and operations or methods at the bottom. In a large system with many related classes, classes are grouped together to create class diagrams. Different relationships between classes are shown by different types of arrows.
 <img src="/images/Modeling/UML/04_Class-diagram.jpg"/>

## Component Diagram
A component diagram displays the structural relationship of components of a software system. These are mostly used when working with complex systems with many components. Components communicate with each other using interfaces. The interfaces are linked using connectors. The image below shows a component diagram.

 <img src="/images/Modeling/UML/06_Component-Diagram.png"/>

## Deployment Diagram
A deployment diagram shows the hardware of your system and the software in that hardware. Deployment diagrams are useful when your software solution is deployed across multiple machines with each having a unique configuration. Below is an example deployment diagram.

 <img src="/images/Modeling/UML/07_Deployment-Diagram.png"/>

## Object Diagram
Object Diagrams, sometimes referred to as Instance diagrams are very similar to class diagrams. Like class diagrams, they also show the relationship between objects but they use real-world examples.
They show what a system will look like at a given time. Because there is data available in the objects, they are used to explain complex relationships between objects.
 <img src="/images/Modeling/UML/03_Object-Diagram.png"/>


## Package Diagram
As the name suggests, a package diagram shows the dependencies between different packages in a system.
 <img src="/images//Modeling/UML/05_Package-Diagram.jpg" />

## Composite Structure Diagram
 <img src="/images/Modeling/UML/Composite-Structure-Diagram.jpg"/>


## Use Case Diagram
 Use case diagrams give a graphic overview of the actors involved in a system, different functions needed by those actors and how these different functions interact.
  <img src="/images/Modeling/UML/01_Use-Case-Diagram.png" />


 ## Activity Diagram
Activity diagrams represent workflows in a graphical way. They can be used to describe the business workflow or the operational workflow of any component in a system. Sometimes activity diagrams are used as an alternative to State machine diagrams
 <img src="/images/Modeling/UML/08_Activity-Diagram-for-Login.png"/>


## State Machine Diagram
State machine diagrams are similar to activity diagrams, although notations and usage change a bit. They are sometimes known as state diagrams or state chart diagrams as well. These are very useful to describe the behavior of objects that act differently according to the state they are in at the moment. 
 <img src="/images/Modeling/UML/09_State-Machine-Diagram.jpg" />


## Sequence Diagram

Sequence diagrams in UML show how objects interact with each other and the order those interactions occur. It’s important to note that they show the interactions for a particular scenario. The processes are represented vertically and interactions are shown as arrows. 
 <img src="/images/Modeling/UML/02_Sequence-Diagram.jpg"/>