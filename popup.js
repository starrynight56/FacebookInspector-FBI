// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.  
 */


function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  // chrome.tabs.query(queryInfo, function(tabs) {
  //   // chrome.tabs.query invokes the callback with a list of tabs that match the
  //   // query. When the popup is opened, there is certainly a window and at least
  //   // one tab, so we can safely assume that |tabs| is a non-empty array.
  //   // A window can only have one active tab at a time, so the array consists of
  //   // exactly one tab.
  //   var tab = tabs[0];

  //   // A tab is a plain object that provides information about the tab.
  //   // See https://developer.chrome.com/extensions/tabs#type-Tab
  //   var url = tab.url;

  //   // tab.url is only available if the "activeTab" permission is declared.
  //   // If you want to see the URL of other tabs (e.g. after removing active:true
  //   // from |queryInfo|), then the "tabs" permission is required to see their
  //   // "url" properties.
  //   console.assert(typeof url == 'string', 'tab.url should be a string');

  //   callback(url);
  // });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

/**
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */

 var blacklisted=[];
 var whitelisted=[];
//actual function that submits data to array when "submit" is clicked.
$('#submitx').click(submitx);
$('#show').click(show)  ;
 function submitx() {
  var newblacklisted;
  var newwhitelisted;
    newblacklisted=$("#blacklist").val();// get the text input from the user
    // split the string to get the input the string
    newblacklisted = newblacklisted.split(/[ ,]+/);
    newwhitelisted=$("#whitelist").val();// get the text input from the user
    // split the string to get the input the string
    newwhitelisted = newwhitelisted.split(/[ ,]+/);
    //add to a new array that we make of all blacklisted/whitelisted words
    for(var i = 0; i<newblacklisted.length; i++){
      blacklisted.push(newblacklisted[i]);
    }
    for(var i = 0; i<newwhitelisted.length; i++){
      whitelisted.push(newwhitelisted[i]);
    }
    //remove words that the user wants to take out of the black listed/whitlisted list
    newblacklisted=$("#rmblacklist").val();
    newblacklisted = newblacklisted.split(/[ ,]+/);
    newwhitelisted=$("#rmwhitelist").val();
    newwhitelisted = newwhitelisted.split(/[ ,]+/);

    for(var i = 0; i<newblacklisted.length; i++){
      //x contains the index
      var x = match(blacklisted,newblacklisted[i])
      if(x >-1){
        //takes out the word and places everything in a new array
        blacklisted.splice(x,1);//splice mutates array, does not return anything
      }
    }

    for(var i = 0; i<newwhitelisted.length; i++){
      var x = match(whitelisted,newwhitelisted[i])
      if(x >-1){
        whitelisted.splice(x,1);//splice mutates array, does not return anything
      }
    }
    //COMMENTED OUT BECAUSE IT DOES NOT EXIST; NEED TO ADD BACK LATER searchFile();
}

function show(){
  //toString method will already print out the array
  alert(blacklisted.toString());
  alert(whitelisted.toString());
}

//toString function
// function toString()
//finds the index at which the word occurs in the list
function match(list,string) {
  var l = list;
  var s = string;
  for(var i = 0; i<l.length; i++){
    if(l[i]===s){
      return i;
    }
  }
    return -1;
}

