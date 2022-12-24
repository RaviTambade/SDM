## MVC Architecture
The MVC architecture pattern turns complex application development into a much more manageable process. It allows several developers to simultaneously work on the application.

### What is MVC?
MVC stands for model-view-controller. Here's what each of those components mean:
- Model: The backend that contains all the data logic
- View: The frontend or graphical user interface (GUI)
- Controller: The brains of the application that controls how data is displayed

<img src="/images/MVC3.png" />

The concept of MVCs was first introduced by Trygve Reenskaug, who proposed it as a way to develop desktop application GUIs.

Today the MVC pattern is used for modern web applications because it allows the application to be scalable, maintainable, and easy to expand.

### Why Should You Use MVC?
Three words: separation of concerns, or SoC for short.

The MVC pattern helps you break up the frontend and backend code into separate components. This way, it's much easier to manage and make changes to either side without them interfering with each other.

But this is easier said than done, especially when several developers need to update, modify, or debug a full-blown application simultaneously.

#### Model (data)
The model's job is to simply manage the data. Whether the data is from a database, API, or a JSON object, the model is responsible for managing it

#### Views (UI)
The view's job is to decide what the user will see on their screen, and how.

#### Controller (Brain)
The controller's responsibility is to pull, modify, and provide data to the user. Essentially, the controller is the link between the view and model.

Through getter and setter functions, the controller pulls data from the model and initializes the views.

If there are any updates from the views, it modifies the data with a setter function.

### MVC Frameworks
JavaScript has grown in popularity, and it's taken over the backend in recent years. More and more full-blown JavaScript applications have opted for the MVC architecture pattern in one way or another.

Frameworks come and go, but what has been constant are the concepts borrowed from the MVC architecture pattern.

Some of the early frameworks that applied these concepts were KnockoutJS, Django, and Ruby on Rails

The most attractive concept of the MVC pattern is separation of concerns.

Modern web applications are very complex, and making a change can sometimes be a big headache.

Managing the frontend and backend in smaller, separate components allows for the application to be scalable, maintainable, and easy to expand.