 ## Software Design Principles
 
 In the design phase, the customer and business requirements and technical considerations all come together to formulate a product or a system.
 
 The design process comprises a set of principles, concepts and practices, which allow a software engineer to model the system or product that is to be built. This model, known as design model, is assessed for quality and reviewed before a code is generated and tests are conducted. The design model provides details about software data structures, architecture, interfaces and components which are required to implement the system. 


### Commonly followed design principles

- Software design should correspond to the analysis model: Often a design element corresponds to many requirements, therefore, we must know how the design model satisfies all the requirements represented by the analysis model.

- Choose the right programming paradigm: A programming paradigm describes the structure of the software system. Depending on the nature and type of application, different programming paradigms such as procedure oriented, object-oriented, and prototyping paradigms can be used. The paradigm should be chosen keeping constraints in mind such as time, availability of resources and nature of user’s requirements.

- Software design should be uniform and integrated: Software design is considered uniform and integrated, if the interfaces are properly defined among the design components. For this, rules, format, and styles are established before the design team starts designing the software.

- Software design should be flexible: Software design should be flexible enough to adapt changes easily. To achieve the flexibility, the basic design concepts such as abstraction, refinement, and modularity should be applied effectively.

- Software design should ensure minimal conceptual (semantic) errors: The design team must ensure that major conceptual errors of design such as ambiguousness and inconsistency are addressed in advance before dealing with the syntactical errors present in the design model.

- Software design should be structured to degrade gently: Software should be designed to handle unusual changes and circumstances, and if the need arises for termination, it must do so in a proper manner so that functionality of the software is not affected.

- Software design should represent correspondence between the software and real-world problem: The software design should be structured in such away that it always relates with the real-world problem.

- Software reuse: Software engineers believe on the phrase: ‘do not reinvent the wheel’. Therefore, software components should be designed in such a way that they can be effectively reused to increase the productivity.

- Designing for testability: A common practice that has been followed is to keep the testing phase separate from the design and implementation phases. That is, first the software is developed (designed and implemented) and then handed over to the testers who subsequently determine whether the software is fit for distribution and subsequent use by the customer. However, it has become apparent that the process of separating testing is seriously flawed, as if any type of design or implementation errors are found after implementation, then the entire or a substantial part of the software requires to be redone. Thus, the test engineers should be involved from the initial stages. For example, they should be involved with analysts to prepare tests for determining whether the user requirements are being met.

- Prototyping: Prototyping should be used when the requirements are not completely defined in the beginning. The user interacts with the developer to expand and refine the requirements as the development proceeds. Using prototyping, a quick ‘mock-up’ of the system can be developed. This mock-up can be used as a effective means to give the users a feel of what the system will look like and demonstrate functions that will be included in the developed system. Prototyping also helps in reducing risks of designing software that is not in accordance with the customer’s requirements.

### KISS (Keep it Simple, Stupid) - A Design Principle
Keep it simple, stupid (KISS) is a design principle which states that designs and/or systems should be as simple as possible. Wherever possible, complexity should be avoided in a system—as simplicity guarantees the greatest levels of user acceptance and interaction.

### DRY
DRY, which stands for 'don't repeat yourself,' is a principle of software development that aims at reducing the repetition of patterns and code duplication in favor of abstractions and avoiding redundancy.

### Hollywood Priciple
The essence of this principle is “don’t call us, we’ll call you”. As you know, this is a response you might hear after auditioning for a role in a Hollywood movie. And this is the same concept for the software Hollywood Principle too. The intent is to take care to structure and implement your dependencies wisely.

At its most basic level, the principle is about reducing the coupling in a software system. It gets back to the well known phrase in software development: loose coupling and high cohesion. You can keep classes loosely coupled by ensuring that you don’t have unnecessary references and you are referencing classes and other subsystems properly. Although the Hollywood Principle does not dictate anything about cohesion, it is an important aspect too. Cohesion is about keeping your classes true to their intent and not allowing their behavior to expand beyond its core purpose. Like high coupling, low cohesion doesn’t tend to cause systems to be unstable or not work properly, but will likely lead to difficulty in maintaining the software.

One of the most popular ways to implement, or obey, the Hollywood principle is to use events or callbacks. A well known pattern that follows the Hollywood principle is the observer pattern. This pattern allows one to observe the state of an object in a well defined and non obtrusive manner. It is typically implemented by injecting a callback object (observer) into the class to be observed (subject). The subject simply raises an event in all observers when its state changes. How the observer reacts to the event is outside the scope or care of the subject.


### SOLID 
The SOLID principles were developed by Robert C. Martin in a 2000 essay, “Design Principles and Design Patterns”, although the acronym was coined later by Michael Feathers. In his essay, Martin acknowledged that successful software will change and develop. As it changes, it becomes increasingly complex. Without good design principles, Martin warns that software becomes rigid, fragile, immobile, and viscous. The SOLID principles were developed to combat these problematic design patterns.


SOLID is a popular set of design principles that are used in object-oriented software development. SOLID is an acronym that stands for five key design principles: 
- single responsibility principle
- Open-closed principle
- Liskov substitution principle
- Interface segregation principle
- Dependency inversion principle. 

All five are commonly used by software engineers and provide some important benefits for developers.

The broad goal of the SOLID principles is to reduce dependencies so that engineers change one area of software without impacting others. Additionally, they’re intended to make designs easier to understand, maintain, and extend. Ultimately, using these design principles makes it easier for software engineers to avoid issues and to build adaptive, effective, and agile software.

While the principles come with many benefits, following the principles generally leads to writing longer and more complex code. This means that it can extend the design process and make development a little more difficult. However, this extra time and effort is well worth it because it makes software so much easier to maintain, test, and extend.

Following these principles is not a cure-all and won’t avoid design issues. That said, the principles have become popular because when followed correctly, they lead to better code for readability, maintainability, design patterns, and testability. In the current environment, all developers should know and utilize these principles.

#### Single Responsibility Principle
Robert Martin summarizes this principle well by mandating that, “a class should have one, and only one, reason to change.” Following this principle means that each class only does one thing and every class or module only has responsibility for one part of the software’s functionality. More simply, each class should solve only one problem.

Single responsibility principle is a relatively basic principle that most developers are already utilizing to build code. It can be applied to classes, software components, and microservices.

Utilizing this principle makes code easier to test and maintain, it makes software easier to implement, and it helps to avoid unanticipated side-effects of future changes.

To ensure that you’re following this principle in development, consider using an automated check on build to limit the scope of classes. This check is not a foolproof way to make sure that you’re following single responsibility principle, but it can be a good way to make sure that classes are not violating this principle.

#### Open-Closed Principle
The idea of open-closed principle is that existing, well-tested classes will need to be modified when something needs to be added. Yet, changing classes can lead to problems or bugs. Instead of changing the class, you simply want to extend it. With that goal in mind, Martin summarizes this principle, “You should be able to extend a class’s behavior without modifying it.”

Following this principle is essential for writing code that is easy to maintain and revise. Your class complies with this principle if it is:

Open for extension, meaning that the class’s behavior can be extended; and
Closed for modification, meaning that the source code is set and cannot be changed.
At first glance, these two criteria seem to be inherently contradictory, but when you become more comfortable with it, you’ll see that it’s not as complicated as it seems. The way to comply with these principles and to make sure that your class is easily extendable without having to modify the code is through the use of abstractions. Using inheritance or interfaces that allow polymorphic substitutions is a common way to comply with this principle. Regardless of the method used, it’s important to follow this principle in order to write code that is maintainable and revisable.


####  Liskov Substitution Principle
Of the five SOLID principles, the Liskov Substitution Principle is perhaps the most difficult one to understand. Broadly, this principle simply requires that every derived class should be substitutable for its parent class. The principle is named for Barbara Liskov, who introduced this concept of behavioral subtyping in 1987. Liskov herself explains the principle by saying:

What is wanted here is something like the following substitution property: if for each object O1 of type S there is an object O2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when O1 is substituted for O2 then S is a subtype of T.

While this can be a difficult principle to internalize, in a lot of ways it’s simply an extension of open-closed principle, as it’s a way of ensuring that derived classes extend the base class without changing behavior.

Following this principle helps to avoid unexpected consequences of changes and avoids having to open a closed class in order to make changes. It leads to easy extensions of software, and, while it might slow down the development process, following this principle during development can avoid lots of issues during updates and extensions.

#### Interface Segregation Principle
The general idea of interface segregation principle is that it’s better to have a lot of smaller interfaces than a few bigger ones. Martin explains this principle by advising, “Make fine grained interfaces that are client-specific. Clients should not be forced to implement interfaces they do not use.”

For software engineers, this means that you don’t want to just start with an existing interface and add new methods. Instead, start by building a new interface and then let your class implement multiple interfaces as needed. Smaller interfaces mean that developers should have a preference for composition over inheritance and for decoupling over coupling. According to this principle, engineers should work to have many client-specific interfaces, avoiding the temptation of having one big, general-purpose interface.

#### Dependency Inversion Principle
This principle offers a way to decouple software modules. Simply put, dependency inversion principle means that developers should “depend on abstractions, not on concretions.” Martin further explains this principle by asserting that, “high level modules should not depend upon low level modules. Both should depend on abstractions.” Further, “abstractions should not depend on details. Details should depend upon abstractions.”

One popular way to comply with this principle is through the use of a dependency inversion pattern, although this method is not the only way to do so. Whatever method you choose to utilize, finding a way to utilize this principle will make your code more flexible, agile, and reusable.


Implementing SOLID design principles during development will lead to systems that are more maintainable, scalable, testable, and reusable. In the current environment, these principles are used globally by engineers. As a result, to create good code and to use design principles that are competitive while meeting industry standards, it’s essential to utilize these principles.

While implementing these principles can feel overwhelming at first, regularly working with them and understanding the differences between code that complies with the principles and code that does not will help to make good design processes easier and more efficient.