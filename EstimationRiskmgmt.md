# Software Project Estimation & Risk Management

## Estimation techniques

Organizations need to make software effort and cost estimates. 
There are two types of technique that can be used to do this:

* 1.Experience-based techniques: 
The estimate of future effort requirements is based on the manager’s experience of past projects and the application domain.Essentially, the manager makes an informed judgment of what the effort requirements are likely to be.


* 2.Algorithmic cost modeling:
In this approach, a formulaic approach is used to compute the project effort based on estimates of product attributes, such as size, and process characteristics, such as experience of staff involved.


### Experience-Based Approaches 

* Experience-based techniques rely on judgments based on experience of past projects and the effort expended in these projects on software development activities.
* Typically, you identify the deliverables to be produced in a project and the different software components or systems that are to be developed.
* You document these in a spreadsheet, estimate them individually and compute the total effort required.
* It usually helps to get a group of people involved in the effort estimation and to ask each member of the group to explain their estimate.

### Algorithmic Cost Modelling

Cost is estimated as a mathematical function of product, project and process attributes whose values are estimated by project managers: 

Effort = A × Size B × M

* A is an organisation-dependent constant
* B reflects the  disproportionate effort for large projects
* M is a multiplier reflecting product, process and people attributes

<p>The most commonly used product attribute for cost estimation is code size.</p>
<p>Most models are similar but they use different values for A, B and M</p>

### Estimate Uncertainty
<img src="/images/PMP/04_Estimate_Uncertainty.jpg" />


### The COCOMO 2 Model

* Constructvie Cost Model (COCOMO)
* An empirical model based on project experience. 
* Well-documented, ‘independent’ model which is not tied to a specific software vendor. 
* Long history from initial version published in 1981 (COCOMO-81) through various instantiations to COCOMO 2.
* COCOMO 2 takes into account different approaches to  software development, reuse, etc

### COCOMO estimation models
<img src="/images/PMP/05_COCOMOEstimation.jpg" />

### Project Duration And Staffing

As well as effort estimation, managers must estimate the calendar time required to 
* Complete a project
* When staff will be required.

Calendar time can be estimated using a COCOMO 2 formula

## TDEV = 3 × (PM)(0.33+0.2*(B-1.01))

* PM is the effort computation
* B  is the exponent computed as discussed above (B is 1 for the early prototyping model).

This computation predicts the nominal schedule for the project.
The time required is independent of the number of people working on the project. 

### Effort vs. Schedule 

Pay attention to the terms used:
* Use HOURS when talking about effort
* Use DAYS when talking about schedule
* Do not mix estimated efforts and calendar time!!! 

### Software Pricing

* Estimates are made to discover the cost, to the developer, of producing a software system. 
* You take into account, hardware, software, travel, training and effort costs.
* There is not a simple relationship between the development cost and the price charged to the customer.
* Broader organisational, economic, political and business considerations influence the price charged

### Risk Management

Risk management is concerned with identifying risks and drawing up plans to minimise their effect on a project.
* A risk is a probability that some adverse circumstance will occur.
* Project risks affect schedule or resources. 
* Product risks affect the quality or performance of the software being developed.
* Business risks affect the organisation developing or procuring the software.

### The Risk Management Process

* <b>Risk Identification</b> : Identify project, product and business risks.
* <b>Risk Analysis</b> : Assess the likelihood and consequences of these risks.
* <b>Risk Planning</b> : Draw up plans to avoid or minimise the effects of the risk.
* <b>Risk Monitoring</b> : Monitor the risks throughout the project.

### Examples of Common Project, Product,and Business risks
<img src="/images/PMP/06_ExamplesOfRisks.jpg" />

### CASE Tools
* CASE tools are set of software application programs, which are used to automate SDLC activities. 
* CASE tools are used by software project managers, analysts and engineers to develop software system.

There are number of CASE tools available to simplify various stages of Software Development Life Cycle such as:
* Analysis tools
* Design tools
* Project management tools
* Database Management tools
* Documentation tools,etc.

Use of CASE tools accelerates the development of project to produce desired result and helps to uncover flaws before moving ahead with next stage in software development.


### CASE Tools
<img src="/images/PMP/07_CASEtools.png" />

* Upper Case Tools - Upper CASE tools are used in planning, analysis and design stages of SDLC.
* Lower Case Tools - Lower CASE tools are used in implementation, testing and maintenance.
* Integrated Case Tools - Integrated CASE tools are helpful in all the stages of SDLC, from Requirement gathering to Testing and documentation.


### Risk Identification 

May be a team activities or based on the individual project manager’s experience. 

A checklist of common risks may be used to identify risks in a project:
* Technology risks
* People risks
* Organisational risk
* Requirements risks
* Estimation risks

### Risk Analysis

* Assess probability and seriousness of each risk. 
* Probability may be very low, low, moderate, high or very high. 
* Risk consequences might be catastrophic, serious, tolerable or insignificant

### Risk Planning 

Consider each risk and develop a strategy to manage that risk.
 
* <b>Avoidance strategies</b> :The probability that the risk will arise is reduced.
* <b>Minimisation strategies</b>:The impact of the risk on the project or product will be reduced;
* <b>Contingency plans</b>:If the risk arises, contingency plans are plans to deal with that risk; 

### Risk Monitoring

* Assess each identified risks regularly to decide whether or not it is becoming less or more probable.
* Also assess whether the effects of the risk have changed.
* Each key risk should be discussed at management progress meetings

### Managing People 

* People are an organisation’s most important assets.
* The tasks of a manager are essentially people-oriented.
* Unless there is some understanding of people, management will be unsuccessful.
* Poor people management is an important contributor to project failure. 

### Teamwork

* Most software engineering is a group activity.
* The development schedule for most non-trivial software projects is such that they cannot be completed by one person working alone.
* A good group is cohesive and has a team spirit. 
* The people involved are motivated by the success of the group as well as by their own personal goals.
* Group interaction is a key determinant of group performance.
* Flexibility in group composition is limited Managers must do the best they can with available people. 

### Selecting Group Members

A manager or team leader’s job is to create a cohesive group and organize their group so that they can work together effectively. 
This involves: 
* Creating a group with the right balance of technical skills and personalities
* Organizing that group so that the members work together effectively. 


### Assembling A Team

* May not be possible to appoint the ideal people to work on a project.
* Project budget may not allow for the use of highly-paid staff.
* Staff with the appropriate experience may not be available.
* An organisation may wish to develop employee skills on a software project. 
* Managers have to work within these constraints especially when there are shortages of trained staff.

### Group Organization

* Small software engineering groups are usually organised informally without a rigid structure.
* For large projects, there may be a hierarchical structure where different groups are responsible for different subprojects.
* Agile development is always based around an informal group on the principle that formal structure inhibits information exchange

### Group Communications 

* Good communications are essential for effective group working.
* Information must be exchanged on the status of work, design decisions and changes to previous decisions.
* Good Communications also strengthens group cohesion as it promotes understanding.