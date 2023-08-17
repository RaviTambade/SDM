# Programming VS Coding VS Development

<hr/>

## What is Programming?

Programming is logic. Programming is thinking.  

Programming is making decisions, or telling the computer what decisions to make under different circumstances. Once you've clicked the red button, you can program a computer/browser to access data and make a network request.

Let us program:
```
If an email supplied by a user isn’t following the conventional format 
    (i.e it misses the ‘@’ and ‘.com’), 
    display an error message. 
Else, 
    take the email and check if it already exists in the database. 
If it already exists, 
    display a customized message to the user. 
Else, 
    store the email in the database and display a success message.

```

Programming makes use of your critical thinking skills and ability to solve logical problems. It all about thinking up and creating the network of possible decisions a computer

In fact, you can do programming in English because it has nothing to do with any particular language.


## What is Coding?

I will call coding a subset of programming. Coding encompasses the following topics and activities:

* Programming languages
* A language's syntax and how it differs from other language's syntax
* Code arrangement
* Code optimization
* Debugging
* Writing and running tests
* Creating and using libraries and frameworks

You can be a programmer without being a coder, but you cannot be a coder without being a programmer.

While a programmer simply has to think and build a logical framework of decisions for the application, a coder has to implement that logic with a particular programming language in a standard, efficient way.

A coder has to become familiar with code syntax and be up-to-date with newer and recommend ways of writing code.

A coder has to be good at technical tasks like testing, debugging, and so on.


Code is simply the language a machine understands. To implement an application, you have to take the set of instructions created by a programmer and make it understandable by the machine. That is the act of coding.

Using the same example of email validation and storage, let's implement that logic in JavaScript code:


```

let database = ['test1@gmail.com', 'test2@gmail.com', 'test3@gmail.com'];

function validateEmail() {
    let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    let emailAddress = document.getElementbyID('emailFld').value;
    if (!emailAddress.match(regexEmail)) {
        document.getElementbyID('myAlert').innerHTML = "Invalid Email!";
    } else if (database.includes(emailAddress)) {
        document.getElementbyID('myAlert').innerHTML = "Email exists!";
      else {
        database.push(emailAddress);
        document.getElementbyID('myAlert').innerHTML = "Successful!";
        return true;
      }
}
    
document.getElementById("myBtn").addEventListener("click", validateEmail);

```
Now we have coded that programming logic for a web browser to execute. In other words, we have programmed the browser engine to make decisions. This wouldn't have been possible without writing code.  


## What is Software Development?

According to Wikipedia, software development is:

"the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.

Software development is a process of writing and maintaining the source code, but in a broader sense, it includes all that is involved between the conception of the desired software through to the final manifestation of the software, sometimes in a planned and structured process.

Therefore, software development may include research, new development, prototyping, modification, reuse, re-engineering, maintenance, or any other activities that result in software products."

As you can see from the above extensive definition, development is bigger than just programming and coding. It’s all about creating a solution to a real life problem by building an application which solves that problem, maintaining that application, marketing it, researching mays to optimize it, and so on.

Development has to take into consideration the end user, DevOps (a portmanteau of “development” and “operations”), team management, and many other things.

A developer analyzes everything that is required to create a proposed application and also oversees that development process.

A great example of a software developer would be a technical startup founder.  

They conceive an application as a software product which will be a valuable service to people in real life. They undertake the process of bringing that conception to life, including the actual programming and coding of the application.

Then they oversee the maintenance of the application. They might even fund research to improve the performance and efficiency of their company's service and so on.

Development is the full package.
