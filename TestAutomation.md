# Automation Testing

<img src="/images/SWTesting/TestAutomation.webp" />
Ten years ago, smartphones, internet, and cloud computing were still in their nascent stages. Applications were standalone and restricted to desktops. But today, the demand for scalable and easily upgradable software products has increased manifolds. there has been a shift from standalone applications to distributed applications. These applications can interact and integrate with other systems. Project scale and size has increased. timelines for projects have shrunk. Now development needs to be more flexible, collaborative and agile. subsequently, product managers are now more open and willing to automate development and testing for efficiency.


Test automation in an agile environment allows for testing product features and functions in a real-time environment. for instance, it is now possible to test a feature in agile development in a distributed team by creating thousands of virtual users. Thus test automation balances agile development by enabling a scalable and flexible test environment for creating quality products through much deeper insights into errors than manual testing.


Automation Testing or Test Automation is a software testing technique that performs using special automated testing software tools to execute a test case suite.On the contrary, Manual Testing is performed by a human sitting in front of a computer carefully executing the test steps. The automation testing software can also enter test data into Application Under Test(AUT), compare expected and actual results and generate detailed test reports. Software Test Automation demands considerable investments of money and resources.

## Why Test Automation?

* Manual Testing of all workflows, all fields, all negative scenarios is time and money consuming
* It is difficult to test for multilingual sites manually
* Test Automation in software testing does not require Human intervention. You can run automated test unattended (overnight)
* Test Automation increases the speed of test execution
* Automation helps increase Test Coverage
* Manual Testing can become boring and hence error-prone.


## Which Test Cases to Automate?

The following category of test cases are suitable for automation:
* High Risk - Business Critical test cases
* Test cases that are repeatedly executed
* Test Cases that are very tedious or difficult to perform manually
* Test Cases which are time-consuming
	
The following category of test cases are not suitable for automation:
* Test Cases that are newly designed and not executed manually at least once
* Test Cases for which the requirements are frequently changing
* Test cases which are executed on an ad-hoc basis.

### Automated Testing Process:
	
1.	Test Tool Selection
2.	Define scope of Automation
3.	Planning, Design and Development
4.	Test Execution
5.	Maintenance


### Test tool selection

<p>Test Tool selection largely depends on the technology the Application Under Test(AUT) is built on.</p>
1.	<b>Define the scope of Automation</b>
		<ol>
			<li>The features that are important for the business</li>
			<li>Scenarios which have a large amount of data</li>
			<li>Common functionalities across applications</li>
			<li>Technical feasibility</li>
			<li>The extent to which business components are reused</li>
			<li>The complexity of test cases</li>
			<li>Ability to use the same test cases for cross-browser testing</li>
		</ol>

2.	<b>Planning, Design, and Development</b>
		<ol>
		<li>Automation tools selected</li>
		<li>Framework design and its features</li>
		<li>In-Scope and Out-of-scope items of automation</li>
		<li>Automation testbed preparation</li>
		<li>Schedule and Timeline of scripting and execution</li>
		<li>Deliverables of Automation Testing</li>
		</ol>


3.	<b>Test Execution</b>
	* Automation Scripts are executed during this phase.</li>
	* The scripts need input test data before there are set to run.</li>
	* Once executed they provide detailed test reports.</li>
	

### Benefits of Automation Testing
* 70% faster than the manual testing
* Wider test coverage of application features
* Reliable in results
* Ensure Consistency
* Saves Time and Cost
* Improves accuracy
* Human Intervention is not required while execution
* Increases Efficiency
* Better speed in executing tests
* Re-usable test scripts
* Test Frequently and thoroughly
* More cycle of execution can be achieved through automation
* Early time to market


#### Types of Automated Testing
* Smoke Testing
* Unit Testing
* Integration Testing
* Regression Testing
* Black Box Testing
* White Box Testing
* Gray Box Testing

### Automation Testing Tools
*	Testim
*	LambdaTest
*	Selenium
		 It is a software testing tool used for Regression Testing. 
		 It is an open source testing tool that provides playback and recording facility for Regression Testing.


### Framework for Automation

* Maintaining consistency of Testing</li>
* Improves test structuring</li>
* Minimum usage of code</li>
* Less Maintenance of code</li>
* Improve re-usability</li>
* Non Technical testers can be involved in code</li>
* The training period of using the tool can be reduced</li>
* Involves Data wherever appropriate</li>

### Unit Testing


When we talk about test cases, we mostly mean unit tests. It is incorrect to assume that the unit we want to test is always a function. The unit, or unit of work, is a logical unit that constitutes single behavior. This unit should be able to be invoked via a public interface and should be testable independently.

Thus, a unit test can perform the following functions:
* It tests a single logical function
* It can run without a specific order of execution
* It takes care of its own dependencies and mock data
* It always returns the same result for the same input
* It should be self-explanatory, maintainable, and readable


## Integration Testing
Once all the components or modules are working independently, then we need to check the data flow between the dependent modules is known as integration testing.

### Guidelines for Integration Testing

1.	We go for the integration testing only after the functional testing is completed on each module of the application.
2.	We always do integration testing by picking module by module so that a proper sequence is followed, and also we don't miss out on any integration scenarios.
3.	First, determine the test case strategy through which executable test cases can be prepared according to test data.
4.	Examine the structure and architecture of the application and identify the crucial modules to test them first and also identify all possible scenarios.
5.	Design test cases to verify each interface in detail.
6.	Choose input data for test case execution. Input data plays a significant role in testing.
6.	If we find any bugs then communicate the bug reports to developers and fix defects and retest.
7.	Perform positive and negative integration testing.