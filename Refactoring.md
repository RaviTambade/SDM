
# Refactoring Code

Software developers often rely on a “quick and dirty” approach towards coding to facilitate fast shipping. However, when it comes to modifying the source code for enhancements, the complexity of the code makes it challenging to reiterate through it.

As a program is evolved, its complexity increases unless work is done to maintain or reduce it.
— Manny Lehman, Computer Science Researcher

Thousands of lines of code (KLOCs) and messy code structures make it non-understandable, leading to an increase in software maintenance costs. To manage the internal quality of the code, its restructuring is essential. The standard practice for this damage control is called code refactoring.

The code refactoring approach revolves around changing the design and structure of the code so that the software’s external behavior does not get affected. The objective of refactoring is to improve the design of existing code to make it clean and understandable.

Code refactoring is the process of modifying the code’s internal structure so that its external behavior does not get affected. It helps eliminate the poor design choices (anti-patterns) that make a code challenging to understand and maintain.


## What is the Purpose of Refactoring Code?

Code refactoring is done to:

* <b>Improve code quality </b>: implies cleaning up code and improving its structure to make it less complex and understandable
* <b>Maintain a good software architecture</b>: means to enhance the design of the source code to accelerate the delivery of the new product features
* <b>Minimize cruft </b>: implies minimizing the difference between the current source code and how it should actually be
* <b>Reduce technical debt</b>: means to reduce messy and unrefined code, which may otherwise lead to additional rework later

As a standard practice, unit tests are written before moving ahead with code refactoring. These unit tests are executed once before the refactoring and once after refactoring. This helps in validating that the external behavior of the software system is not interrupted along the process.


## Code Refactoring vs Code Optimization
Though similar to an extent, there is a difference between code refactoring and code optimization. Refer to the table below for a clearer understanding:


|Code Refactoring              | Code Optimization |
| :--------------------------- | :------------------------------------------------------------------------------------------------- |
| It helps make the code cleaner so that it is easier to read and understand|It helps in faster execution and compilation of thecode|
| Focuses on:                                                               |Focuses on:                                            |
|Changing the code structure                                                | Reducing memory consumption                           |
|Making the code cleaner and understandable                                 |  Reducing compiling time                              |


## Benefits of Code Refactoring

### 1. Easy Maintenance

When you have a cleaner and an organized code base, it becomes easy to add new functionalities and fix bugs. The development team can easily read through the code and identify the parts of the code that require modification. The upshot of it — lower maintenance costs.

### 2. Facilitates Faster Time to Market

Code refactoring accelerates the process of incremental and iterative development by minimizing the impediments on the way. This, in turn, helps in faster shipping and quick upgrades.

### 3. Reduces Code Rots

Code rot happens when the complexity of the code increases to the extent that it becomes harder to maintain. These code rots are similar to rust layers on the code. With frequent refactoring exercises, you can reduce the code rots to make the code cleaner and understandable.

### 4. Improves Code Readability

The purpose of refactoring is to transform a computer-understandable code into a human-understandable one. This helps improve readability, which, in turn, makes it easy to make changes even when the development team changes.

### 5. Promotes Collective Ownership

Collective ownership implies that any individual from the development team can make changes to the code to complete a task or enhance its structure. Code refactoring promotes collective ownership among the Agile development team and allows them to take design decisions that contribute towards maintaining code quality.

### 6. Reduces Memory Consumption

When all the inconsistencies and duplications from the code are removed, the lines of code get reduced. This, in turn, helps in reducing the memory consumption that an otherwise long source code occupies. Moreover, it also helps in improving the compilation speed.


<h2>Popular Code Refactoring Techniques</h3>
<p>There are several types of refactoring in software engineering. Some of which include:</p>
<h3>1. Composing Method</h3>
<p>The objective of this technique is to trim down long and non-understandable methods and eliminate code duplications. </p>
<p>Here is the list of different types of composing methods:</p>
<div>
<table  style="border: 1px solid black; border-collapse: collapse;" cellpadding="0" cellspacing="0" align="center" bgcolor="#fff" border="0" width="100%">
<tr>
<th><strong><center>Code Refactoring Technique</center></strong> </th>
<th><strong><center>Objective</center></strong></th>
<th><strong><center>Solution</center></strong></th>
</tr>
<tr>
<td><strong>1. Extract Method</strong></td>
<td>Group together an isolated code fragment</td>
<td>
<p>Move the code fragment to a new method</p>
<p>Replace the old code with a “call to new method&#8221;</p>
</td>
</tr>
<tr>
<td><strong>2. Inline Method</strong></td>
<td>To keep the methods that have an understandable and readable body</td>
<td>
<p>Replace the call to the method portion with the method’s content itself</p>
<p>Also, delete the method later</p>
</td>
</tr>
<tr>
<td><strong>3. Replace Method with Method Object</strong></td>
<td>To eliminate a long and complicated method where local variables are unidentifiable</td>
<td>
<p>Convert the method into a separate class. This will turn the local variables into the fields of the class</p>
<p>Break down the method into several simply understandable methods within the same class</p>
</td>
</tr>
<tr>
<td><strong>4. Remove Assignments to Parameters</strong></td>
<td>Deal with values assigned to a parameter inside a method</td>
<td>
<p>Use a local variable in place of a parameter</p>
</td>
</tr>
</table>
</div>
<h3>2. Moving Features Between Objects</h3>
<p>The purpose of moving features among objects is to deal with distributed functionality within different classes. This technique helps in transporting functionality among well-defined classes and in hiding implementation details from the public eye. </p>
<div>
<table  style="border: 1px solid black; border-collapse: collapse;" cellpadding="0" cellspacing="0" align="center" bgcolor="#fff" border="0" width="100%">
<tr>
<th><strong><center>Code Refactoring Technique</center></strong> </th>
<th><strong><center>Objective</center></strong></th>
<th><strong><center>Solution</center></strong></th>
</tr>
<tr>
<td><strong>1. Move Method</strong></td>
<td>To lower down the method usage in other classes as compared to its own class</td>
<td>
<p>Create a new method in the new class that uses that method the most</p>
<p>Move the method code from the old class to the new one</p>
<p>Turn the old method code as a reference to the new method, or you can even remove it completely</p>
</td>
</tr>
<tr>
<td><strong>2. Remove Middle Man</strong></td>
<td>To deal with classes that have many methods</td>
<td>
<p>Delete the methods</p>
<p>Force the class to call the end methods directly</p>
</td>
</tr>
<tr>
<td><strong>3. Extract Class</strong></td>
<td>To remove the workload of the class that does the work of two classes</td>
<td>
<p>Create a new class</p>
<p>Shift the functionality and related methods to a new class</p>
</td>
</tr>
<tr>
<td><strong>4. Introduce Foreign Method</strong></td>
<td>To deal with a utility class that does not contain the method needed</td>
<td>
<p>Add the method to a client class</p>
<p>Add the object of the utility class to the new method as an argument</p>
</td>
</tr>
</table>
</div>
<h3>3. Dealing with Generalization</h3>
<p>Generalization helps in abstraction that helps in encapsulation and data hiding. It applies to bulk code. </p>
<p>Here are some of the techniques that help in generalization.</p>
<div>
<table class="blog-table three-column" style="border: 1px solid black; border-collapse: collapse;" cellpadding="0" cellspacing="0" align="center" bgcolor="#fff" border="0" width="100%">
<tr>
<th><strong><center>Code Refactoring Technique</center></strong> </th>
<th><strong><center>Objective</center></strong></th>
<th><strong><center>Solution</center></strong></th>
</tr>
<tr>
<td><strong>1. Pull-Up Field</strong></td>
<td>To deal with classes that share the same field</td>
<td>
<p>Extract the code from a subclass and add it to the superclass to eliminate duplications</p>
</td>
</tr>
<tr>
<td><strong>2. Pull-Down Field</strong></td>
<td>To implement the behavior of a superclass among different superclasses</td>
<td>
<p>Extract the code from a superclass and adds it to a subclass</p>
</td>
</tr>
<tr>
<td><strong>3. Extract Subclass</strong></td>
<td>To distribute and generalize the usage of the features of class</td>
<td>
<p>Create subclasses and use the feature there</p>
</td>
</tr>
<tr>
<td><strong>4. Collapse Hierarchy</strong></td>
<td>To eliminate the similarity of functionality between a subclass and a superclass</td>
<td>
<p>Merge the subclass and the superclass</p>
</td>
</tr>
</table>
</div>
<h3>4. Simplifying Conditional Expressions</h3>
<p>Conditional expressions can get complicated over time in context to logic and understandability. </p>
<p>These are some code refactoring techniques that help simplify these conditional expressions:</p>
<div>
<table  style="border: 1px solid black; border-collapse: collapse;" cellpadding="0" cellspacing="0" align="center" bgcolor="#fff" border="0" width="100%">
<tr>
<th><strong><center>Code Refactoring Technique</center></strong> </th>
<th><strong><center>Objective</center></strong></th>
<th><strong><center>Solution</center></strong></th>
</tr>
<tr>
<td><strong>1. Decompose Conditional</strong></td>
<td>To deal with a complex conditional expression</td>
<td>
<p>Decompose the complex conditionals into separate, identifiable methods</p>
</td>
</tr>
<tr>
<td><strong>2. Remove Control Flag</strong></td>
<td>To eliminate a boolean variable that acts as a control flag for different boolean expressions</td>
<td>
<p>In place of that variable, consider using &#8211; break, continue, or return</p>
</td>
</tr>
<tr>
<td><strong>3. Introduce Null Object</strong></td>
<td>To reduce the frequency of methods that return null</td>
<td>
<p>In place of null, let the condition return a null object that showcases default behavior</p>
</td>
</tr>
<tr>
<td><strong>4. Introduce Assertion</strong></td>
<td>Remove expressions that return assumption-driven values</td>
<td>
<p>Replace all the assumptions and insert assertion conditions for validating a result</p>
</td>
</tr>
</table>
</div>
<h3>5. Simplifying Method Calls</h3>
<p>The objective is to simplify method calls and the interaction between classes. </p>
<p>Some of the code refactoring techniques for simplifying method calls include:</p>
<div>
<table  style="border: 1px solid black; border-collapse: collapse;" cellpadding="0" cellspacing="0" align="center" bgcolor="#fff" border="0" width="100%">
<tr>
<th><strong><center>Code Refactoring Technique</center></strong> </th>
<th><strong><center>Objective</center></strong></th>
<th><strong><center>Solution</center></strong></th>
</tr>
<tr>
<td><strong>1. Rename Method</strong></td>
<td>To name a method in a way that conveys its intent</td>
<td>
<p>Rename methods in a way that it conveys what it does, i.e., it’s objective</p>
</td>
</tr>
<tr>
<td><strong>2. Hide Method</strong></td>
<td>To hide a method that is not used within other classes but only within its own class</td>
<td>
<p>Make the method private</p>
</td>
</tr>
<tr>
<td><strong>3. Replace Exception with Test</strong></td>
<td>To avoid using an exception where a simple test would be enough</td>
<td>
<p>Impose a condition test in place of an exception</p>
</td>
</tr>
<tr>
<td><strong>4. Add/Remove Parameter</strong></td>
<td>
<p>Add parameter when a method does not have enough data to execute an action</p>
<p>Remove a parameter when it is not used along the method’s body</p>
</td>
<td>
<p><strong>Add</strong>: You need to create a new parameter for passing new information</p>
<p><strong>Remove</strong>: You need to eliminate the unused parameter permanently</p>
</td>
</tr>
</table>
</div>
<h2>Code Refactoring in Agile Development: Best Practices</h2>
<p>Here are some of the code refactoring best practices:</p>
<h3>1. Allocate Hours for Refactoring Every Sprint Cycle</h3>
<p>It is always easier to maintain the code quality alongside development. Refactor code on the fly, i.e., refactor small chunks of code along with other sprint activities like fixing bugs and adding new user stories. This reduces the effort the team puts in refactoring large chunks of code.</p>
<p>The product owner should promote refactoring practice from the very beginning and good practice to commit to refactoring is through allocating specific hours for the job.If a team decides to commit 10 hours of the sprint towards refactoring, this gradually becomes standard practice. </p>
<h3>2. Mark Comments in the Product Backlog</h3>
<p>Developers know when a code smell (a code characteristic that indicates problems with the code) sweeps in the code. So, whenever the development team takes a shortcut or consciously introduces complexity to facilitate fast delivery, they can add notes to that product backlog item and estimate “when will they refactor it.” </p>
<p>This acts as a reminder and helps in returning to the item later on in the product&#8217;s lifetime. </p>
<h3>3. Run Frequent Tests</h3>
<p>Unit testing should be an integral part of code refactoring as it helps validate the proper functioning of the source code. That is why it is essential to run tests — before refactoring, in-between refactoring, and after refactoring. </p>
<p>You can also consider automating tests at this stage for the team’s convenience.</p>
<h3>4. Leverage Refactoring Tools for Automation</h3>
<p>There are many off-the-shelf code refactoring tools available in the market that can help automate the code refactoring process. Some examples of such tools include — Visual Studio Intellicode, Eclipse IDE, Rider, and SonarQube. </p>
<p>Using these code refactoring tools helps run code refactoring alongside development, which further helps in speeding up time to market. </p>
<h3>5. Don’t Add Features or Fix Bugs</h3>
<p>When the team is actively refactoring the code, try not to mix it with other activities such as adding features or fixing bugs. The sprint should be divided strategically where the team contributes 60% of their time for adding new user stories, 20% of their time to fixing bugs, and the other 20% for code refactoring. </p>
<h2>The KPIs of Code Refactoring</h2>
<p>How do you know whether you have done a decent job at refactoring? Here are some KPIs to keep track of:</p>

<h3>1. Easy to Understand</h3>
<p>If you share the code with a fellow developer, they can easily understand what the code does and the other technicalities related to it.</p>
<h3>2. The Code Length is Finite</h3>
<p>If the code is clear, concise, and manageable — you can consider the code refactoring drill as a success. In simple words, the code should not be a never-ending scrolling activity that is full of duplications.</p>
<h3>3. Supports Limited Number of Classes</h3>
<p>The more the number of classes, the more are the chances of increased complexities and mess. If the number of classes is limited and manifests understandability, the refactoring practice is heading the right way. </p>
<h3>4. It Passes Unit Tests</h3>
<p>If the code passes the unit tests before and after refactoring, you can consider code refactoring a success.</p>
<h2>Conclusion</h2>
<p>Code refactoring is part of software development, where efforts are put to refine, clean, and polish code to make it readable and understandable. The clear objective is to write code that is human-centric over system-centric. </p>
<p>This write-up covers everything about code refactoring, such as its benefits, techniques, best practices, and KPIs. For successful and easy iterative and incremental development in Agile, making code understandable is one essential task. It not only helps reduce technical debt but also helps ensure faster time to market. </p>
<p>The goal of the Agile Development team should be to — <b> Code</b>. <b>Test</b>. <b>Fix Bugs</b>. <b>Refactor</b>. <b>Repeat</b>! </p>
