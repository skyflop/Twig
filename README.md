# Twig

Evaluación – Fullstack 

Code Challenge 

Front End Developer Test 

Please perform the following tasks to the best of your ability 

Give yourself at least a couple hours to complete the test 

  

Partially completed tests will still be reviewed and considered 

CSS 

How can you switch a css style when the screen size is below a certain size? 

		With the @media only screen rule 

What is the benefit of using stylesheets instead of inline styles? 

		That they will always be available and do not depend on the online 	 

status of a server 

Is there a way to manage CSS with variables and functions? 

		Yes, CSS has variables and functions, you can also create a PHP file and define the headers as CSS, using PHP functions and variables 

Review and update the following erroneous CSS: 

.button, input[type="submit"], button { 

   position: relative 

   display: inline-block; 

   padding-front: 0; 

   margin: 0; 

   border: none; 

   text-decoration: none; 

   text-align: center; 

   white-space: nowrap; 

   overflow: visible; 

   bgcolor: red; 

   text-transform: uppercase 

   font-color: #fZb034; 

   font-size: 18px; 

   font-family: 'FuturaBT-Book'; 

   line-height. 20px; 

   height: 20px; 

   -webkit-transition: color 0.2s ease-in-out; 

  transition: color 0.2s ease-in-out 

} 

 

 

    .button, input[type="submit"], button {  

        position: relative;  

        display: inline-block;  

        padding: 0;  

        margin: 0;  

        border: none;  

        text-decoration: none;  

        text-align: center;  

        white-space: nowrap;  

        overflow: visible;  

        background-color: red;  

        text-transform: uppercase; 

        color: #ffffff;  

        font-size: 18px;  

        font-family: 'FuturaBT-Book';  

        line-height: 20px;  

        height: 20px;  

        -webkit-transition: color 0.2s ease-in-out;  

        transition: color 0.2s ease-in-out; 

    } 

 

 

 

 

 

JavaScript 

 

 

What’s the difference between the following three “car” approaches? 

function Car(){} 

	A function is created with the name Car 

var car = Car(); 

	The function Car is called, by assigning it to the variable car 

var car = new Car(); 

	A blank object named Car is created. 

Explain what AJAX is and it’s advantages/disadvantages. 

	Advantage

		Better user experience, Ajax allows pages to be modified withoutreloading.  
        Resource optimization, by not reloading the page, the time involved in each transaction is reduced.  
        Less bandwidth usage.  
        High compatibility, Ajax is supported by almost all web platforms. 

    Disadvantage 

        SEO problems, search engines have difficulty analyzing code written in  
        JavaScript, the fact that no new URLs are generated with Ajax removes an important ranking factor. 
        The user may lose the ability to use the browser's back and forward buttons or add a page to favorites. 
        In functionalities such as a chat, it would consume too many server resources by making infinite requests in very short periods of time. 

 

Describe how event bubbling works in the context of clicking on the “Hello World” text: 

    <body> 
       <div id=”container”> 
           <span id=”textContainer”>Hello World</span> 
       </div> 
    </body> 

 

	The events are propagated from the innermost element, through the parents, so clicking on the text "Hello World" would first trigger the click on 	the <span> tag, then on the <div> tag and finally in the <body> tag 

 

Create a loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5. 

 

	for (i = 0; i < 100; i++) { 

              if (i >= 3) { 

                  if (i % 3 === 0 && i % 5 === 0) { 

                  console.log("fizzbuzz"); 

                  } else if (i % 3 === 0)  { 

                  console.log("fizz"); 

                  } else if (i % 5 === 0)  { 

                  console.log("buzz"); 

                  }  

              } 

           } 

 

 

Please fix the following erroneous JavaScript code. 

/** 

* Returns the header element. 

* 

* @return {(object|null)} The JQuery header element or null if the element does not exist 

*/ 

function getHeaderElement() { 

    // Get header element by its id.     

   header = $(“myHeader”); 

    if (header === null 

       && TypeOf header === undefined 

    ) { 

        console.log(‘header element exists!”); 

    } 

                console.log(“ 

                   header element does not exist! 

               “)) 

                return header 

            } 

 

 

 

 

 

 

		 

 

 

        /**  

        * Returns the header element.  

        *  

        * @return {(object|null)} The JQuery header element or null if the element does not exist  

        */  

        function getHeaderElement() {  

            // Get header element by its id.      

            header = $("myHeader");  

            if (header === null  && typeof header === 'undefined' ) {  

                console.log("header element exists!");  

            }  

            console.log("header element does not exist!"); 

            return header  

        } 

 

 

 

 

 

Twig 

Create a basic login form twig template that can be used on both an admin and player site. 

Inputs 

username 

password, 

submit button 

  

Template Variables 

submitButtonHTML = ‘<input type=”submit” value=”Log In”/>’ 

loginHeaderText = ‘Log In’ 

isAdminLogin = true or false 

totalSiteLogins = ‘0.00’ 

Criteria 

1. Display totalSiteLogins variable below the form formatted as an integer. 

    Ex: 2.00 should display as 2 

2. Display the loginHeaderText variable above form. 

3. If the template is being used on an admin site, display the text “ADMIN” prepended to 

   the loginHeaderText variable. This can be determined by the state of the isAdminLogin 

   variable. 

4. Use the submitButtonHTML variable to display the form submit button. 

5. The form does not have to be functional (no javascript or css necessary). 

 

 

Upon completing this challenge, please provide a link to a github repository containing your answers 

 

Note: If something is not clear, please make the necessary assumptions and document them as part of your responses. 
