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