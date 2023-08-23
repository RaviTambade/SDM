## Software Testing

<img src="/images/SWTesting/SoftwareTest.jpg" />

We should always check what we do as it is said that <b> We are humans and we are bound to make mistake.</b>

No software is perfect. We may maximize our efforts to ensure we get as much information about the product’s quality as possible. We focus on the areas that carry the most potential for business risk. Quality is a shared responsibility.

Software testing is the act of examining the artifacts and the behavior of the software under test by validation and verification. 
Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation. 

The benefits of testing include: 
* Preventing bugs
* Reducing development costs 
* Improving performance

Software Testing focus on:
* Disclosing the current risks and problems.
* Reporting what is being tested and how well or poorly it’s being done when considering the context and any constraints like a lack of time.
* Reporting what is not being tested

### Essentials of Software Testing

* We should always assume that our work can contain mistakes.
* Mistakes can come from bad assumptions and blind spots.
* It is better that someone else checks our work and as we might make same mistakes in checking our work.
* If the developer of the system checks the work he will fail to highlight the flaws in his work.
* Another person is more likely to detect our flaws.
* Most important in Testing is, it is not a post development activity. Testing should start as the development starts.

### V model Software Testing:

<img src="/images/SWTesting/vmodel.png" />
<ul>
<li>Verification process includes checking of documents, design, code and program whereas Validation process includes testing and validation of the actual product.</li>
<li>Verification uses methods like reviews, walkthroughs, inspections and desk-checking whereas Validation uses methods like black box testing, white box testing and non-functional testing.</li>
<li>Verification checks whether the software confirms a specification whereas Validation checks whether the software meets the requirements and expectations.</li>
<li>Verification finds the bugs early in the development cycle whereas Validation finds the bugs that verification can not catch.</li>
<li>Comparing validation and verification in software testing, Verification process targets on software architecture, design, database, etc. while Validation process targets the actual software product.</li>
Verification is done by the QA team while Validation is done by the involvement of testing team with QA team.</li>
<li>Comparing Verification vs Validation testing, Verification process comes before validation whereas Validation process comes after verification.</li>
</ull>

V Model is a highly disciplined SDLC model in which there is a testing phase parallel to each development phase. 
The V model is an extension of the waterfall model in which testing is done on each stage parallel with development in a sequential way. It is known as the Validation or Verification Model.

### Software Testing Life Cycle(STLC)
It Consists of a series of activities carried out by Testers methodologically to test your software product.
<img src="/images/SWTesting/stlc.png" />

### Six major phases in STLC Model
* Requirement Analysis
* Test Planning
* Test case development
* Test Environment setup
* Test Execution
* Test Cycle closure

### 1.Requirement Analysis
		
Activities in Requirement Phase Testing:
* Identify types of tests to be performed. 
* Gather details about testing priorities and focus.
* Prepare Requirement Traceability Matrix (RTM).
* Identify test environment details where testing is supposed to be carried out. 
* Automation feasibility analysis (if required).

Deliverables:
* RTM (Requirements Traceability Matrix)
It is  a document that links requirements throughout the validation process. The purpose of the Requirements Traceability Matrix is to ensure that all requirements defined for a system are tested in the test protocols
		
* Automation feasibility report. (if applicable)

	
### 2.Test Planning
		
Activities:
* Preparation of test plan/strategy document for various types of testing
* Test tool selection
* Test effort estimation
* Resource planning and determining roles and responsibilities.
* Training requirement
	
Deliverables:
* Test plan /strategy document.
* Effort estimation document.
	
### 3.Test case development

Activities
* Create test cases, automation scripts (if applicable)
* Review and baseline test cases and scripts
* Create test data (If Test Environment is available)
	
Deliverables
* Test cases/scripts
* Test data	

###  4.Test Environment setup
Activities:
* Understand the required architecture, environment set-up and prepare hardware 
		   and software requirement list for the Test Environment.
* Setup test Environment and test data
* Perform smoke test on the build

Deliverables:
* Environment ready with test data set up
* Smoke Test Results.

###  5.Test Execution
Activities:
* Execute tests as per plan
* Document test results, and log defects for failed cases
* Map defects to test cases in RTM
* Retest the Defect fixes
* Track the defects to closure

Deliverables of Test Execution
* Completed RTM with the execution status
* Test cases updated with results
* Defect reports


###  6.Test Cycle closure
Activities:
* Evaluate cycle completion criteria based on Time, Test coverage, Cost,Software, Critical Business Objectives, Quality
* Prepare test metrics based on the above parameters.
* Document the learning out of the project
* Prepare Test closure report
* Qualitative and quantitative reporting of quality of the work product to the customer.
* Test result analysis to find out the defect distribution by type and severity.

Deliverables
* Test Closure report
* Test metrics
        
## Test Plan
A Test Plan is a detailed document that describes the test strategy, objectives, schedule, estimation, deliverables, and resources required to perform testing for a software product. Test Plan helps us determine the effort needed to validate the quality of the application under test. The test plan serves as a blueprint to conduct software testing activities as a defined process, which is minutely monitored and controlled by the test manager.

Follow the seven steps below to create a test plan as per IEEE 829
1.	Analyze the product
2.	Design the Test Strategy
3.	Define the Test Objectives
4.	Define Test Criteria
5.	Resource Planning
6.	Plan Test Environment
7.	Schedule & Estimation
8.	Determine Test Deliverables


### Test Plan Template
TEST PLAN TEMPLATE is a detailed document that describes the test strategy, objectives, schedule, estimation and deliverables, and resources required for testing. Test Plan helps us determine the effort needed to validate the quality of the application under test. The test plan serves as a blueprint to conduct software testing activities as a defined process which is minutely monitored and controlled by the test manager.

Creating a Test Plan is mandatory to ensure success of your Software testing project.

Help people outside the test team such as developers, business managers, customers understand the details of testing.
Test Plan guides our thinking. It is like a rule book, which needs to be followed.
Important aspects like test estimation, test scope, Test Strategy are documented in Test Plan, so it can be reviewed by Management Team and re-used for other projects.



### Test Case

* A TEST CASE is a set of actions executed to verify a particular feature or functionality of your software application. 
* A Test Case contains test steps, test data, precondition, postcondition developed for specific test scenario to verify any requirement. 
* The test case includes specific variables or conditions, using which a testing engineer can compare expected and actual results to determine whether a software product is functioning as per the requirements of the customer.

#### Examples of Test Cases

Test Case 1: Check results on entering valid User Id & Password
Test Case 2: Check results on entering Invalid User ID & Password
Test Case 3: Check response when a User ID is Empty & Login Button is pressed, and many more



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

* 1.The description of what requirement is being tested
* 2.The explanation of how the system will be tested
* 3.The test setup like a version of an application under test, software, data files, operating system, hardware, security access, physical or logical date, time of day, prerequisites such as other tests and any other setup information pertinent to the requirements being tested
* 4.Inputs and outputs or actions and expected results
* 5.Any proofs or attachments
* 6.Use active case language
* 7.Test Case should not be more than 15 steps
* 8.An automated test script is commented with inputs, purpose and expected results
* 9.The setup offers an alternative to pre-requisite tests
* 10.With other tests, it should be an incorrect business scenario order

#### Examples of  Usability Test Cases
* 1.Web page content should be correct without any spelling or grammatical errors
* 2.All fonts should be same as per the requirements.
* 3.All the text should be properly aligned.
* 4.All the error messages should be correct without any spelling or grammatical errors and the error message should match with the field label.
* 5.Tool tip text should be there for every field.
* 6.All the fields should be properly aligned.
* 7.Enough space should be provided between field labels, columns, rows, and error messages.
* 8.All the buttons should be in a standard format and size.
* 9.Home link should be there on every single page.
* 10.Disabled fields should be grayed out.
* 11.Check for broken links and images.
* 12.Confirmation message should be displayed for any kind of update and delete operation.
* 13.Check the site on different resolutions (640 x 480, 600×800 etc.?)
* 14.Check the end user can run the system without frustration.
* 15.Check the tab should work properly.
* 16.Scroll bar should appear only if required.
* 17.If there is an error message on submit, the information filled by the user should be there.
* 18.Title should display on each web page
* 19.All fields (Textbox, dropdown, radio button, etc) and buttons should be accessible by keyboard shortcuts and the user should be able to perform all operations by using keyboard.
* 20.Check if the dropdown data is not truncated due to the field size. Also, check whether the data is hardcoded or managed via administrator.

### Conclusion
Software testing is an important part of the software development process. It is not a single activity that takes place after code implementation, but is part of each stage of the lifecycle. A successful test strategy will begin with consideration during requirements specification. Testing details will be fleshed through high and low level system designs, and testing will be carried out by developers and separate test groups after code implementation.

As with the other activities in the software lifecycle, testing has its own unique challenges. As software systems become more and more complex, the importance of effective, well planned testing efforts will only increase.