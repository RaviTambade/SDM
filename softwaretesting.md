## Software Testing
Software Testing is the process of evaluating and verifying that a software product or application does what it is supposed to do. The benefits of testing include preventing bugs, reducing development costs and improving performance.  

### V model Software Testing:

Verification in Software Testing is a process of checking documents, design, code, and program in order to check if the software has been built according to the requirements or not. The main goal of verification process is to ensure quality of software application, design, architecture etc. The verification process involves activities like reviews, walk-throughs and inspection.

Validation in Software Engineering is a dynamic mechanism of testing and validating if the software product actually meets the exact needs of the customer or not. The process helps to ensure that the software fulfills the desired use in an appropriate environment. The validation process involves activities like unit testing, integration testing, system testing and user acceptance testing.

V Model is a highly disciplined SDLC model in which there is a testing phase parallel to each development phase. 
The V model is an extension of the waterfall model in which testing is done on each stage parallel with development in a sequential way. It is known as the Validation or Verification Model.

SDLC: SDLC is Software Development Life Cycle. 
	It is the sequence of activities carried out by Developers to design and develop high-quality software.

STLC: STLC is Software Testing Life Cycle. 
	It consists of a series of activities carried out by Testers methodologically to test your software product.

Problem with the Waterfall Model

Solution: The V Model

	The left side of the model is Software Development Life Cycle - SDLC
	The right side of the model is Software Test Life Cycle - STLC
	The entire figure looks like a V, hence the name V - model
	
### STLC Phases

There are following six major phases in every Software Testing Life Cycle Model (STLC Model):

	1.Requirement Analysis
	2.Test Planning
	3.Test case development
	4.Test Environment setup
	5.Test Execution
	6.Test Cycle closure


What is Entry and Exit Criteria in STLC?

Entry Criteria: 
		Entry Criteria gives the prerequisite items that must be completed before testing can begin.
Exit Criteria: 
		Exit Criteria defines the items that must be completed before testing can be concluded


1.Requirement Analysis
		
	Activities in Requirement Phase Testing
		1.Identify types of tests to be performed. 
		2.Gather details about testing priorities and focus.
		3.Prepare Requirement Traceability Matrix (RTM).
		4.Identify test environment details where testing is supposed to be carried out. 
		5.Automation feasibility analysis (if required).

	Deliverables of Requirement Phase Testing

		1.RTM (equirements Traceability Matrix)
			is a document that links requirements throughout the validation process. 
			The purpose of the Requirements Traceability Matrix is to ensure that all requirements defined for 
				a system are tested in the test protocols
		
		2.Automation feasibility report. (if applicable)

	
2.Test Planning
		
	Test Planning Activities
		1.Preparation of test plan/strategy document for various types of testing
		2.Test tool selection
		3.Test effort estimation
		4.Resource planning and determining roles and responsibilities.
		5.Training requirement
	
	Deliverables of Test Planning
		1.Test plan /strategy document.
		2.Effort estimation document.
	
3.Test case development

	Test Case Development Activities
		1.Create test cases, automation scripts (if applicable)
		2.Review and baseline test cases and scripts
		3.Create test data (If Test Environment is available)
	
	Deliverables of Test Case Development
		1.Test cases/scripts
		2.Test data	

4.Test Environment setup
	Test Environment Setup Activities
		1.Understand the required architecture, environment set-up and prepare hardware 
		   and software requirement list for the Test Environment.
		2.Setup test Environment and test data
		3.Perform smoke test on the build

	Deliverables of Test Environment Setup
		1.Environment ready with test data set up
		2.Smoke Test Results.

5.Test Execution
	Test Execution Activities
		1.Execute tests as per plan
		2.Document test results, and log defects for failed cases
		3.Map defects to test cases in RTM
		4.Retest the Defect fixes
		5.Track the defects to closure

	Deliverables of Test Execution
		1.Completed RTM with the execution status
		2.Test cases updated with results
		3.Defect reports


6.Test Cycle closure
	Test Cycle Closure Activities
		1.Evaluate cycle completion criteria based on Time, Test coverage, Cost,Software, Critical Business Objectives, Quality
		2.Prepare test metrics based on the above parameters.
		3.Document the learning out of the project
		4.Prepare Test closure report
		5.Qualitative and quantitative reporting of quality of the work product to the customer.
		6.Test result analysis to find out the defect distribution by type and severity.

	Deliverables of Test Cycle Closure
		1.Test Closure report
		2.Test metrics
        

KEY DIFFERENCE

Verification process includes checking of documents, design, code and program whereas Validation process includes testing and validation of the actual product.
Verification does not involve code execution while Validation involves code execution.
Verification uses methods like reviews, walkthroughs, inspections and desk-checking whereas Validation uses methods like black box testing, white box testing and non-functional testing.
Verification checks whether the software confirms a specification whereas Validation checks whether the software meets the requirements and expectations.
Verification finds the bugs early in the development cycle whereas Validation finds the bugs that verification can not catch.
Comparing validation and verification in software testing, Verification process targets on software architecture, design, database, etc. while Validation process targets the actual software product.
Verification is done by the QA team while Validation is done by the involvement of testing team with QA team.
Comparing Verification vs Validation testing, Verification process comes before validation whereas Validation process comes after verification.


STLC Phases:

1.Requirement Analysis
	Activities:
		1.Identify types of tests to be performed.
		2.Gather details about testing priorities and focus.
		3.Identify test environment details where testing is supposed to be carried out. 
		4.Automation Testing is really required
	outcome:
		RTM document(Requirements Traceability Martrix)
		Report for Automation testing need
								
2.Test Planning
	Activities:
		1.Preparation of test plan/strategy document for various types of testing
		2.Test tool selection
		3.Test effort estimation
		4.Resource planning and determining roles and responsibilities.
		5.Training requirement
	 outcome:
		 Test plan / startegy Document
		 Estimation 
		
3.Test case development
	Activities:
		1.Create test cases, automation scripts (if applicable)
		2.Review and baseline test cases and scripts
		3.Create test data (If Test Environment is available)
	outcome:
		Testcase
		Test data
						
4.Test Environment setup
	  Activity
		1.Understand the required architecture, 
				environment set-up and prepare hardware 
		   		and software requirement list for the Test Environment.
		2.Setup Enviornment and as well test data
		3.Test Exeuction pre Acitivities.
	outcome:
		report of readiness of enivornment Check List
		Test Result;
						
5.Test Execution:
	Activities:
		1.Execute tests as per plan
		2.Document test results, and log defects for failed cases
		3.Map defects to test cases in RTM
		4.Retest the Defect fixes
		5.Track the defects to closure				
	outcome:
		test execution status
						
6.Test Cycle closure

	Activities:
		1.Evaluate cycle completion criteria based on Time, Test coverage, 
							      Cost,Software,Critical Business Objectives, 
							      Quality
		2.Prepare test metrics based on the above parameters.
		3.Document the learning out of the project
		4.Prepare Test closure report
		5.Qualitative and quantitative reporting of quality of the work product to the customer.
		6.Test result analysis to find out the defect distribution by type and severity.


### Test Plan

A Test Plan is a detailed document that describes the test strategy, objectives, schedule, estimation, deliverables, and resources required to perform testing for a software product. 
Test Plan helps us determine the effort needed to validate the quality of the application under test. 
The test plan serves as a blueprint to conduct software testing activities as a defined process, which is minutely monitored and controlled by the test manager.

What is the Importance of Test Plan?

Follow the seven steps below to create a test plan as per IEEE 829
1.Analyze the product
2.Design the Test Strategy
3.Define the Test Objectives
4.Define Test Criteria
5.Resource Planning
6.Plan Test Environment
7.Schedule & Estimation
8.Determine Test Deliverables


Step 1) Analyze the product
	You should research clients and the end users to know their needs and expectations from the application
		Who will use the website?
		What is it used for?
		How will it work?
		What are software/ hardware the product uses?

Step 2) Develop Test Strategy
	A Test Strategy document, is a high-level document, which is usually developed by Test Manager. 
	This document defines:
		The project’s testing objectives and the means to achieve them
		Determines testing effort and costs


Step 3) Define Test Objective
	To define the test objectives, you should do 2 following steps
		1.List all the software features (functionality, performance, GUI…) which may need to test.
		2.Define the target or the goal of  the test based on  above features


What is test plan template?

TEST PLAN TEMPLATE is a detailed document that describes the test strategy, objectives, schedule, estimation and deliverables, and resources required for testing. Test Plan helps us determine the effort needed to validate the quality of the application under test. The test plan serves as a blueprint to conduct software testing activities as a defined process which is minutely monitored and controlled by the test manager.

Creating a Test Plan is mandatory to ensure success of your Software testing project.

Help people outside the test team such as developers, business managers, customers understand the details of testing.
Test Plan guides our thinking. It is like a rule book, which needs to be followed.
Important aspects like test estimation, test scope, Test Strategy are documented in Test Plan, so it can be reviewed by Management Team and re-used for other projects.



### Test Case
Test Case : 1

Description:  Check the results on entering valid user Id and Password
Test Steps:   1.Enter Email Address
	      2.Enter password
	      3.Click Sign In

Test Data:
	    Email: ravi.tambade@transflower.in
	    password: tfl@7867

Expected Result:
	   Login should be successfull

Actual Result:
	    Login was successful

Pass/Fail:
	   Pass

____________________________________________________________________________________________________________________________________________


Test Case : 2
Description:  Check the results on entering invalid user id and password
Test Steps:   1.Enter  Invalid Email Address
	      2.Enter  Invalid password
	      3.Click Sign In

Test Data:
	    Email: ravi.jadhav@transflower.in
	    password: t56564

Expected Result:
	   Login should be falied

Actual Result:
	    Login should be falied

Pass/Fail:
	   passed


_______________________________________________________________________________________________________________________________________________________________________

#### While drafting a test case to include the following information:

.The description of what requirement is being tested
2.The explanation of how the system will be tested
3.The test setup like a version of an application under test, software, data files, operating system, hardware, security access, physical or logical date, time of day, prerequisites such as other tests and any other setup information pertinent to the requirements being tested
4.Inputs and outputs or actions and expected results
5.Any proofs or attachments
6.Use active case language
7.Test Case should not be more than 15 steps
8.An automated test script is commented with inputs, purpose and expected results
9.The setup offers an alternative to pre-requisite tests
10.With other tests, it should be an incorrect business scenario order

#### Examples of  Usability Test Cases
1.Web page content should be correct without any spelling or grammatical errors
2.All fonts should be same as per the requirements.
3.All the text should be properly aligned.
4.All the error messages should be correct without any spelling or grammatical errors and the error message should match with the field label.
5.Tool tip text should be there for every field.
6.All the fields should be properly aligned.
7.Enough space should be provided between field labels, columns, rows, and error messages.
8.All the buttons should be in a standard format and size.
9.Home link should be there on every single page.
10.Disabled fields should be grayed out.
11.Check for broken links and images.
12.Confirmation message should be displayed for any kind of update and delete operation.
13.Check the site on different resolutions (640 x 480, 600×800 etc.?)
14.Check the end user can run the system without frustration.
15.Check the tab should work properly.
16.Scroll bar should appear only if required.
17.If there is an error message on submit, the information filled by the user should be there.
18.Title should display on each web page
19.All fields (Textbox, dropdown, radio button, etc) and buttons should be accessible by keyboard shortcuts and the user should be able to perform all operations by using keyboard.
20.Check if the dropdown data is not truncated due to the field size. Also, check whether the data is hardcoded or managed via administrator.



### Automation Testing
Automation Testing or Test Automation is a software testing technique that performs 
	using special automated testing software tools to execute a test case suite. 
	On the contrary, Manual Testing is performed by a human sitting in front of a computer carefully executing the test steps.


	The automation testing software can also enter test data into the System Under Test, compare expected and actual results and 
		generate detailed test reports. 

Software Test Automation demands considerable investments of money and resources.

#### Why Test Automation?

	Manual Testing of all workflows, all fields, all negative scenarios is time and money consuming
	It is difficult to test for multilingual sites manually
	Test Automation in software testing does not require Human intervention. You can run automated test unattended (overnight)
	Test Automation increases the speed of test execution
	Automation helps increase Test Coverage
	Manual Testing can become boring and hence error-prone.


#### Which Test Cases to Automate?

	High Risk - Business Critical test cases
	Test cases that are repeatedly executed
	Test Cases that are very tedious or difficult to perform manually
	Test Cases which are time-consuming
	
	The following category of test cases are not suitable for automation:

		Test Cases that are newly designed and not executed manually at least once
		Test Cases for which the requirements are frequently changing
		Test cases which are executed on an ad-hoc basis.

#### Automated Testing Process:
	
	Step 1) Test Tool Selection
	Step 2) Define scope of Automation
	Step 3) Planning, Design and Development
	Step 4) Test Execution
	Step 5) Maintenance



#### Test tool selection
	Test Tool selection largely depends on the technology the Application Under Test is built on

	Define the scope of Automation
		The features that are important for the business
		Scenarios which have a large amount of data
		Common functionalities across applications
		Technical feasibility
		The extent to which business components are reused
		The complexity of test cases
		Ability to use the same test cases for cross-browser testing

	Planning, Design, and Development
		Automation tools selected
		Framework design and its features
		In-Scope and Out-of-scope items of automation
		Automation testbed preparation
		Schedule and Timeline of scripting and execution
		Deliverables of Automation Testing


	Test Execution
		Automation Scripts are executed during this phase. 
		The scripts need input test data before there are set to run. 
		Once executed they provide detailed test reports.

	
	Framework for Automation
		Maintaining consistency of Testing
		Improves test structuring
		Minimum usage of code
		Less Maintenance of code
		Improve re-usability
		Non Technical testers can be involved in code
		The training period of using the tool can be reduced
		Involves Data wherever appropriate
		
	Benefits of Automation Testing
		70% faster than the manual testing
		Wider test coverage of application features
		Reliable in results
		Ensure Consistency
		Saves Time and Cost
		Improves accuracy
		Human Intervention is not required while execution
		Increases Efficiency
		Better speed in executing tests
		Re-usable test scripts
		Test Frequently and thoroughly
		More cycle of execution can be achieved through automation
		Early time to market

#### Types of Automated Testing
		Smoke Testing
		Unit Testing
		Integration Testing
		Functional Testing
		Keyword Testing
		Regression Testing
		Data Driven Testing
		Black Box Testing

#### How to Choose an Automation Tool?
		Environment Support
		Ease of use
		Testing of Database
		Object identification
		Image Testing
		Error Recovery Testing
		Object Mapping
		Scripting Language Used
		Support for various types of test - including functional, test management, mobile, etc...
		Support for multiple testing frameworks
		Easy to debug the automation software scripts
		Ability to recognize objects in any environment
		Extensive test reports and results
		Minimize training cost of selected tools


#### Automation Testing Tools
		Testim
		LambdaTest
		Selenium
		 It is a software testing tool used for Regression Testing. 
		 It is an open source testing tool that provides playback and recording facility for Regression Testing.

    