/*
Author: Rosanne Hu
Filename: searchcover.js
functionality: The purpose of this is listen to the browser and go through
the the parsed text and recognize the keywords given through user input
and determine whether or not we will cover it.
*/

//takes in the black listed words from the popup .js
var triggers = ["cats"];
//the selector for the class containing post posts that
//we need to access
var postclass = '_5pbx userContent';
var selectors = {};




function searchFile(){
    //loop throught the triggers
    for(var i=0; i<triggers.length;i++){
    //looks through the .5pbx.userContent div and finds all the divs
    //containing the word(returns array of selectors)
    selectors[triggers[i]]($( "._5pbx.userContent" ).find("p:contains(triggers[i])"));
    //puts all the paragraphs into dictionary with taga
    

  }

}
