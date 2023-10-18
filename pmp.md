# Planning & Management of Software Projects

### What is a Project?
A project is a planned activity that involves non-routine tasks and has a clearly defined beginning and an end.

<b>Project characteristics</b>:
- Specific objectives are to be met
- Specific resources are assigned for use on the project
- A schedule should be met 

### Software Project Management 
- Concerned with activities involved in ensuring that software is delivered on time and on schedule and in accordance with the requirements of the organisations developing and procuring the software. 
- Project management is needed because software development is always subject to budget and schedule constraints that are set by the organisation developing the software. 

### The Iron Triangle 
<img src="/images/PMP/01_IronTriangle.jpg" />
Iron Triangle in project management shows in graphical form how all projects have certain constraints — normally these are cost, time and scope (thus the name “triple constraints”) with quality as a central theme. For a project to be successful, these three factors need to be balanced. There are other variations of Iron Triangle based on project type where constraints might be different based on industry type, but the concept remains the same. If you break Iron Triangle by making a change to one constraint, other two needs to be adjusted accordingly otherwise quality will suffer.

### Measuring Project Success
The three constraints in Iron Triangle also serves as measurement scale of project’s success or failure.

- <b>Time</b>
	- Whether the project was completed on time estimated during the planning phase. 
	- This is the best guess based on the number/availability of resources, experience of resources involved, complexity of the project, dependencies, obstacles etc.
- <b>Cost</b>
	- Whether the project was completed within the allocated budget. 
	- In software development, the cost is mainly a manpower cost which can be measured in persons/month.
- <b>Scope</b>
	- Whether all the planned features were implemented or not.
- <b>Quality</b>
	- This is one factor that can be hard to decide on as Quality as it can be defined in several ways.


### Software Management Distinctions
- The product is intangible. 
- Software cannot be seen or touched. Software project managers cannot see progress by simply looking at the artefact that is being constructed. 
- Many software projects are 'one-off' projects.
- Large software projects are usually different in some ways from previous projects. Even managers who have lots of previous experience may find it difficult to anticipate problems. 
- Software processes are variable and organization specific. 
- We still cannot reliably predict when a particular software process is likely to lead to development problems. 

### Management Activities

- <b>Project Planning</b>
	Project managers are responsible for planning. estimating and scheduling project development and assigning people to tasks. 

- <b>Reporting & Controlling</b>
Project managers are usually responsible for reporting on the progress of a project to customers and to the managers of the company developing the software. 

- <b>Risk Management</b>
Project managers assess the risks that may affect a project, monitor these risks and take action when problems arise

### Management Activities 

- <b>People Management</b>:
	Project managers have to choose people for their team and establish ways of working that leads to effective team performance 
- <b>Project Planning</b>:
	Project planning involves breaking down the work into parts and assign these to project team members, anticipate problems that might arise and prepare tentative solutions to those problems. 
	The project plan, which is created at the start of a project, is used to communicate how the work will be done to the project team and customers, and to help assess progress on the project. 

### Project Planning Stages 

- At the proposal stage, when you are bidding for a contract to develop or provide a software system.
- During the project startup phase, when you have to plan who will work on the project, how the project will be broken down into increments, how resources will be allocated across your company, etc. 
- Periodically throughout the project, when you modify your plan in the light of experience gained and information from monitoring the progress of the work. 

### Plan-Driven Development 

- Plan-driven or plan-based development is an approach to software engineering where the development process is planned in detail. 
- Plan-driven development is based on engineering project management techniques and is the ‘traditional’ way of managing large software development projects
- A project plan is created that records the work to be done, who will do it, the development schedule and the work products. 
- Managers use the plan to support project decision making and as a way of measuring progress. 

#### Plan-Driven Development – Pros and Cons 

- The arguments in favor of a plan-driven approach are that early planning allows organizational issues (availability of staff, other projects, etc.) to be closely taken into account, and that potential problems and dependencies are discovered before the project starts, rather than once the project is underway.
- The principal argument against plan-driven development is that many early decisions have to be revised because of changes to the environment in which the software is to be developed and used.


#### Project Plans 
In a plan-driven development project, a project plan sets out the resources available to the project, the work breakdown and a schedule for carrying out the work. 
- <b>Plan Sections</b>
	- Introduction
	- Project organization
	- Risk analysis
	- Hardware and software resource requirements
	- Work breakdown
	- Project schedule
	- Monitoring and reporting mechanisms

### Project Plan Supplements

Plan                    | Description
--------------------    | --------------------------------------------------------------------------------------
Quality plan            | Describes the quality procedures and standards that will be used in a project.
Validation plan         | Describes the approach, resources, and schedule used for system validation.
Configuration management| Describes the configuration management procedures and structures to be used.
Maintenance plan        | Predicts the maintenance requirements, costs, and effort.
Staff development plan 	| Describes how the skills and experience of the project team members will be developed.
			

### The Planning Process 

- Project planning is an iterative process that starts when you create an initial project plan during the project startup phase.
- Plan changes are inevitable. As more information about the system and the project team becomes available during the project, you should regularly revise the plan to reflect requirements, schedule and risk changes. 
- Changing business goals also leads to changes in project plans. As business goals change, this could affect all projects, which may then have to be re-planned. 

### Project Scheduling

- Project scheduling is the process of deciding how the work in a project will be organized as separate tasks, and when and how these tasks will be executed. 
- You estimate the calendar time needed to complete each task, the effort required and who will work on the tasks that have been identified. 
- You also have to estimate the resources needed to complete each task, such as the disk space required on a server, the time required on specialized hardware, such as a simulator, and what the travel budget will be

### Project Scheduling Activities 

- Split project into tasks and estimate time and resources required to complete each task. 
- Organize tasks concurrently to make optimal use of workforce. 
- Minimize task dependencies to avoid delays caused by one task waiting for another to complete.
- Dependent on project managers intuition and experience. 

### Milestones and Deliverables

- <b>Milestones</b> are points in the schedule against which you can assess progress, for example, the handover of the system for testing. 
- <b>Deliverables</b> are work products that are delivered to the customer, e.g. a requirements document for the system.

### Scheduling Problems 

- Estimating the difficulty of problems and hence the cost of developing a solution is hard. 
- Productivity is not proportional to the number of people working on a task. 
- Adding people to a late project makes it later because of communication overheads. 
- The unexpected always happens. Always allow contingency in planning. 


## Activity Bart Chart
<img src="/images/PMP/02_ActivityBarChart.jpg" />

## Staff Allocation Chart
<img src="/images/PMP/03_StaffAllocationChart.jpg" />

## Agile Planning
- Agile methods of software development are iterative approaches where the software is developed and delivered to customers in increments.
- Unlike plan-driven approaches, the functionality of these increments is not planned in advance but is decided during the development. 
- The decision on what to include in an increment depends on progress and on the customer’s priorities.
- The customer’s priorities and requirements change so it makes sense to have a flexible plan that can accommodate these changes. 

### Agile Planning Stages
- Release planning, which looks ahead for several months and decides on the features that should be included in a release of a system. 
- Iteration planning, which has a shorter term outlook, and focuses on planning the next increment of a system.
- This is typically 2-4 weeks of work for the team.

### Story-Based Planning 
- The system specification in XP is based on user stories that reflect the features that should be included in the system. 
- The project team read and discuss the stories and rank them in order of the amount of time they think it will take to implement the story. 
- Release planning involves selecting and refining the stories that will reflect the features to be implemented in a release of a system and the order in which the stories should be implemented. 
- Stories to be implemented in each iteration are chosen, with the number of stories reflecting the time to deliver an iteration (usually 2 or 3 weeks).