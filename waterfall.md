# Waterfall Model

<img src="/images/waterfallmodel.png"/>

Waterfall model was the first model which was widely used in the software industry.
It is divided into phases and the output of one phase becomes the input of the next phase. It is mandatory for a phase to be completed before the next phase starts. In short, there is no overlapping in the Waterfall model Each phase of the waterfall model is quite precise and well-defined.  

In waterfall, the development of one phase starts only when the previous phase is complete. Because of this nature,Since the phases fall from a higher level to a lower level, like a waterfall, It’s named the waterfall mode.

### The activities involved in different phases are as follows:

<table >
<thead>
<tr c>
<th >S.No</th><th >Phase</th><th >Activities Performed</th><th >Deliverables</th>
</tr>
</thead>
<tbody ">
<tr>
<td>1</td><td>Requirement Analysis</td><td>1. Capture all the requirements.<br/>
2. Do brainstorming and walkthrough to understand the requirements.<br/>
3. Do the requirements feasibility test to ensure that the requirements are testable or not.<br/>
</td><td>RUD ( Requirements Understanding Document)</td>
</tr>
<tr>
<td>2</td><td>System Design</td><td>1. As per the requirements, create the design<br/>
2. Capture the hardware / software requirements.<br/>
3. Document the designs<br/>
</td><td>HLD ( High Level Design document)<br/>
<br/>
LLD (Low level design document)<br/>
</td>
</tr>
<tr>
<td>3</td><td>Implementation</td><td >1. As per the design create the programes / code<br/>
2. Integrate the codes for the next phase.<br/>
3. Unit testing of the code<br/>
</td><td>Programs<br/>
Unit test cases and results<br/>
</td>
</tr>
<tr>
<td>4</td><td>System Testing</td><td>1. Integrate the unit tested code and test it to make sure if it works as expected. 2. Perform all the testing activities (Functional and non functional) to make sure that the system meets the requirements.<br/>
3. In case of any anomaly, report it. <br/>
4. Track your progress on testing through tools like traceability metrics, ALM<br/>
5. Report your testing activities. <br/>
</td><td>Test cases<br/>
Test reports<br/>
Defect reports<br/>
Updated matrices.<br/>
</td>
</tr>
<tr>
<td >5</td><td>System Deployment</td><td>1. Make sure that the environment is up<br/>
2. Make sure that there are no sev 1 defects open.<br/>
3. Make sure that the test exit criteria are met. <br/>
4. Deploy the application in the respective environment.<br/>
5. Perform a sanity check in the environment after the application is deployed to ensure the application does not break. <br/>
</td><td>User Manual<br/>
<br/>
Environment definition / specification<br/>
</td>
</tr>
<tr>
<td >6</td><td >System maintenance </td><td>1. Make sure that the application is up and running in the respective environment.<br/>
2. Incase user encounters and defect, make sure to note and fix the issues faced.<br/>
3. Incase any issue is fixed; the updated code is deployed in the environment. <br/>
4.The application is always enhanced to incorporate more features, update the environment with the latest features<br/>
</td><td>User Manual<br/>
<br/>
List of production tickets<br/>
<br/>
List of new features implemented.<br/>
</td>
</tr>
</tbody>
</table>
