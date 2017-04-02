/*
Author: Rosanne Hu
Filename: searchcover.js
functionality: The purpose of this is listen to the browser and go through
the the parsed text and recognize the keywords given through user input
and determine whether or not we will cover it.
*/

//takes in the black listed words from the popup .js
//var triggers = blacklisted;//from
//the selector for the class containing post posts that
//we need to access
var triggers=["Jesslyn"]//blacklisted;
var k=0;
var idNames = [];




function searchFile(){
    //loop throught the triggers
    for(var i=0; i<triggers.length;i++){
    //looks through the .5pbx.userContent div and finds all the divs
    //containing the word(returns array of selectors)

    var arrays = $(".fbUserContent._5pcr:contains(" + triggers[i] +")");
    for(var j=0;j<arrays.length;j++){
      $(arrays[i]).attr("id","cwarn" +k);//give each element a unique id
      idNames.push(arrays[i]);
      k++;//unique names for each element
      var $div = $(idNames[i]);
      $div.find("._3x-2").hide();//working
      $div.find("._3b-9").hide();
      $div.find("._5pbx.userContent").hide().before("<button id='blocker_" + k + "' class='blocker'>"+"CW:"+triggers[i]+"!</button>");//working
      $("#blocker_" + k).click(function() {
        $div.find("._3x-2").show();//working
        $div.find("._3b-9").show();
        $div.find("._5pbx.userContent").show();
        $(this).remove();
      })
      //get the height make a div
    }
    }

    //i need to put a pointer to the elemtn
    //if element
    //give the specific paragarph an id and set visibility hidden
    //on page put a div on top. and when
    //sibiling element htat is a paragtaph that i am inserting
    //when click on the element div that we have than we can but
    //puts all the paragraphs into dictionary with tags
  }
