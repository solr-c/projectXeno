// Get references to page elements
var $activeTags = $("#active-tags");
var $tagPool = $("#tag-pool");
var $tagGenerator = $("#tagGenerator");
var $inputTag = $("#tagMaker").val().trim();
var $tagSearch = $("#tag-search");
//////////////////////
var $exampleDescription = $("#example-description");
//////////////
var $inputTitle = $("#titleInput").val().trim();
var $exampleList = $("#example-list");


var tagList = ["money", "power"];
  console.log(tagList);

var activeTagList = ["food", "camping", "grilling", "tents"];
  console.log(activeTagList);


require("dotenv").config();

var keys = require("./keys.js");


// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(response) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      prettyPrint: true,
      data: JSON.stringify(response)
    });
  },
  termQuery: function() {
    
    $("#searched").empty();
    $("#search-content").empty();

    var tagpool= activeTagList.join("+");
    var myKey = "AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4";
    // var envKey = process.env.serverKey;**--not running on server atm
    var queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + tagpool +
    "&filter=ebooks&orderBy=relevance&maxResults=30&langRestrict=en&key=" + myKey;

    return $.ajax({
      url: queryUrl,
      type: "GET",
      prettyPrint: true
    })
    .then(function(response) {
      var results = response.items.length;
      
      console.log(results);
      console.log(response);
    
      for(i = 0; i < results; i++){

         //makes each gif a ivdividual div with the class name of book-div
         var bookDiv = $("<div>");
         bookDiv.attr({
           class: "book-div",
           // width: "500px"
         });

         // icon on if book has been saved by user or not 
        //  **still needs work**--make if else statements to change look baised if it has been saved to db or not
         var saveBookIcon = $("<img>");
            saveBookIcon.attr({
              src: "assets/images/save-book.png",// this will be an object that holds if else to src change
              width: "55px",
              height: "40px"
            });

         // first base link to book info **still needs work**--only displays json data for book
        var infolink =("<a href=" + response.items[i].selfLink + "> Book link</a>");
        // var infolink = bookSelfLink(response);

        //gets author value for result
        var author = response.items[i].volumeInfo.authors;
        //creates a p tag tied to the authors name who wrote book
        var authorName = $("<p class=author-names>").text("Author(s) name: " + author);

        //get book cover image from json
        response.items[i].volumeInfo.imageLinks ? 
          bookCover = response.items[i].volumeInfo.imageLinks.thumbnail : 
          bookCover = "assets/images/bookDefault.jpg";
        //displays book cover on page
        var bookImage = $("<img src='" + bookCover + "'>");
        //setting attributes for size and lableing for each image
        bookImage.attr({
          class: "book-info",
          height: "300px",
          width: "250px",
        });       


        // commented out because it messes up querys need to make if elese statements to give default responeses
        var snippit = response.items[i].searchInfo.textSnippet;
        // var cleansnip = snippit.trim();
        var snippitPrint = $("<p>").text(snippit);     
        response.items[i].searchInfo.textSnippet ? 
            snippit = response.items[i].volumeInfo.imageLinks.thumbnail : 
            snippit = "There is no short discription for this book";     

        // attaches textsnippit to book div
        bookDiv.prepend(snippitPrint);    

        // attaches first base link to book info **still needs work**
        bookDiv.prepend(infolink);

        // icon on if book has been saved by user or not it attached to div
        bookDiv.prepend(saveBookIcon);

        //displays a still of the book cover
        bookDiv.prepend(bookImage);
        //attaches author name to the end of the div
        bookDiv.prepend(authorName);
        
        // attaches all pulled info into a content pool div
        $("#search-content").append(bookDiv);
        
      }
    });

  },
  // **still needs work**--not connected to db and routes not worked on yet
  deleteExample: function(id) {
    return $.ajax({
      url: "api/users/:id/tags/" + id,
      type: "DELETE",
      prettyPrint: true
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    $("#tag-pool").empty();
    $("#active-tags").empty();

    var $examples = data.map(function(example) {

      
      // Loop through the array of active tags, then generate buttons for each tag name in the array
      for(i=0; i<activeTagList.length; i++){

        var newTagAct = $("<button class=tagButton active=true tag=" + activeTagList[i] + ">").text(activeTagList[i]);
      
        var deleteMe = $("<img>");
          deleteMe.attr({
            class: "delIcon",
            src: "assets/images/deleteMe.jpg",
            height: "15px",
            width: "15px",
            margin: "2px"
          });
  
          var tagDiv = $("<div class=tag-div>");
  
          tagDiv.append(newTagAct);
          tagDiv.append(deleteMe);
         
         //put new button at the end othe other buttons
         $("#active-tags").append(tagDiv);
     
      }

      // Loop through the array of unused tags, then generate buttons for each tag name in the array
      for(i=0; i<tagList.length; i++){
        var newTag = $("<button class=tagButton active=false tag=" + tagList[i] + ">").text(tagList[i]);
     
        //attach the attribute of data-person to Person
        //  newTag.attr(people[i]);
   
         var deleteMeAgain = $("<img>");
           deleteMeAgain.attr({
             class: "delIcon",
             src: "assets/images/deleteMe.jpg",
             height: "15px",
             width: "15px",
             margin: "2px"
           });
         
         var tagDivAgain = $("<div class=tag-div>");
   
         tagDivAgain.append(newTag);
         tagDivAgain.append(deleteMeAgain);
        
        //put new button at the end othe other buttons
        $("#tag-pool").append(tagDivAgain);
    
      }

      return example;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $inputTag,
  };

  tagList.push($inputTag);

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  // **commented out**-- this is due to unsure if code is needed or not
  // $exampleText.val("");
  // $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var tag = $(this).attr('tag');

  if($(this).attr('active') == "false") {
    var falseTagIndex = tagList.indexOf(tag);
    tagList.splice(falseTagIndex, 1);

    console.log(tagList, activeTagList);
    refreshExamples();
    
  }else{
    var trueTagIndex = activeTagList.indexOf(tag);
    activeTagList.splice(trueTagIndex, 1);
    
    console.log(tagList, activeTagList);
    refreshExamples();
  }


  // from blog class
  // This function figures out which post we want to delete and then calls
  // deletePost
  // function handlePostDelete() {
  //   var currentPost = $(this)
  //     .parent()
  //     .parent()
  //     .data("post");
  //   deletePost(currentPost.id);
  // }

  // **commented out**--not setup with db yet so unkown if this is still needed
  // API.deleteExample(idToDelete).then(function() { 
  //   refreshExamples();
  // });
};


// Add event listeners to the tag generate and delete buttons
$tagGenerator.on("click", handleFormSubmit);
$(document).on("click", ".delIcon", handleDeleteBtnClick);