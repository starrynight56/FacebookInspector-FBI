/*
Author: Rosanne Hu
Filename: searchcover.js
functionality: The purpose of this is listen to the browser and go through
the the parsed text and recognize the keywords given through user input
and determine whether or not we will cover it.
*/

//takes in the black listed words from the popup .js
var triggers = blacklisted;//from
//the selector for the class containing post posts that
//we need to access
var postclass = '_5pbx userContent';
var selectors = {};
var triggers;
var k=0;




function searchFile(){
    //loop throught the triggers
    for(var i=0; i<triggers.length;i++){
    //looks through the .5pbx.userContent div and finds all the divs
    //containing the word(returns array of selectors)
    trigger++;
    var arrays = $( "._5pbx.userContent" ).find("p:contains(triggers[i])");
    for(var j=0;j<arrays.length;j++){
      $(arrays[i]).id= "cwarn" +k;
      k++;
    }
    }

    for(var i=0; i<)
    //i need to put a pointer to the elemtn
    //if element
    //give the specific paragarph an id and set visibility hidden
    //on page put a div on top. and when
    //sibiling element htat is a paragtaph that i am inserting
    //when click on the element div that we have than we can but
    selectors[triggers[i]](arrays);
    //puts all the paragraphs into dictionary with tags
  }

}
