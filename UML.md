
## UML Diagrams

UML stands for Unified Modeling Language. It’s a rich language to model software solutions, application structures, system behavior and business processes.

There are two main categories; structure diagrams and behavioral diagrams


#### Structure Diagrams
- Class Diagram
- Component Diagram
- Deployment Diagram
- Object Diagram
- Package Diagram
- Profile Diagram
- Composite Structure Diagram

### Behavioral Diagrams
- Use Case Diagram
- Activity Diagram
- State Machine Diagram
- Sequence Diagram
- Communication Diagram
- Interaction Overview Diagram
- Timing Diagram


#### Class Diagram
Class diagrams are the main building block of any object-oriented solution. It shows the classes in a system, attributes, and operations of each class and the relationship between each class.
 
In most modeling tools, a class has three parts. Name at the top, attributes in the middle and operations or methods at the bottom. In a large system with many related classes, classes are grouped together to create class diagrams. Different relationships between classes are shown by different types of arrows.
 <img src="/images/UML/class-diagram.jpg"/>

#### Component Diagram
A component diagram displays the structural relationship of components of a software system. These are mostly used when working with complex systems with many components. Components communicate with each other using interfaces. The interfaces are linked using connectors. The image below shows a component diagram.

 <img src="/images/UML/component-diagram.jpg"/>

#### Deployment Diagram
A deployment diagram shows the hardware of your system and the software in that hardware. Deployment diagrams are useful when your software solution is deployed across multiple machines with each having a unique configuration. Below is an example deployment diagram.

 <img src="/images/UML/deloyment-diagram.jpg"/>

#### Object Diagram
Object Diagrams, sometimes referred to as Instance diagrams are very similar to class diagrams. Like class diagrams, they also show the relationship between objects but they use real-world examples.

They show what a system will look like at a given time. Because there is data available in the objects, they are used to explain complex relationships between objects.
 <img src="/images/UML/object-diagram.jpg"/>


#### Package Diagram
As the name suggests, a package diagram shows the dependencies between different packages in a system.
 <img src="/images/package-diagram.jpg"/>

#### Composite Structure Diagram
 <img src="/images/UML/composite-structure-diagram.jpg"/>


#### Use Case Diagram
 Use case diagrams give a graphic overview of the actors involved in a system, different functions needed by those actors and how these different functions interact.
  <img src="/images/UML/use-case-diagram.jpg"/>



 #### Activity Diagram
Activity diagrams represent workflows in a graphical way. They can be used to describe the business workflow or the operational workflow of any component in a system. Sometimes activity diagrams are used as an alternative to State machine diagrams


#### State Machine Diagram
State machine diagrams are similar to activity diagrams, although notations and usage change a bit. They are sometimes known as state diagrams or state chart diagrams as well. These are very useful to describe the behavior of objects that act differently according to the state they are in at the moment. 

#### Sequence Diagram

Sequence diagrams in UML show how objects interact with each other and the order those interactions occur. It’s important to note that they show the interactions for a particular scenario. The processes are represented vertically and interactions are shown as arrows. 

#### Communication Diagram
Communication diagrams are similar to sequence diagrams, but the focus is on messages passed between objects. The same information can be represented using a sequence diagram and different objects.


#### Interaction Overview Diagram
Interaction overview diagrams are very similar to activity diagrams. While activity diagrams show a sequence of processes, Interaction overview diagrams show a sequence of interaction diagrams.

They are a collection of interaction diagrams and the order they happen. As mentioned before, there are seven types of interaction diagrams, so any one of them can be a node in an interaction overview diagram.

#### Timing Diagram
Timing diagrams are very similar to sequence diagrams. They represent the behavior of objects in a given time frame. If it’s only one object, the diagram is straightforward. But, if there is more than one object is involved, a Timing diagram is used to show interactions between objects during that time frame.
