//Run search baised on title
$("#titleSearch").on("click", function() {
  $("#searched").empty();
  // $(".carousel-inner").empty();
  $("#search-content").empty();
    var inputTitle = $("#titleInput").val().trim();
    console.log(inputTitle);
   var myKey = "AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4";
    var queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + inputTitle + 
    "&filter=free-ebooks&orderBy=relevance&maxResults=10&langRestrict=en&key=" + myKey;
    

    // tells user what they searched for
    $("#searched").append(inputTitle);
    $.ajax({
      url: queryUrl,
      method: "GET",
      prettyPrint: true
    })
      .then(function(response) {
        var results = response.items.length;
        
        console.log(results);
        console.log(response);

        for (let i = 0; i < results; i++) {

          //makes each gif a ivdividual div with the class name of book-div
          const bookDiv = $("<div>");
          bookDiv.attr({
            class: "book-div",
            // class: "carousel-item",
            // width: "500px"
          });

          

          var saveBookIcon = $("<img>");
            saveBookIcon.attr({
              class: "saveBook",
              src: "images/save-book.png",
              width: "55px",
              height: "40px",
              book_name: response.items[i].volumeInfo.title,
              book_id: response.items[i].id
              // data: {
              //   name: response.items[i].volumeInfo.title,
              //   id: response.items[i].id
              // }
            });
        
          // first base link to book info **still needs work**--only displays json data for book
          // var infolink =("<a href=" + response.items[i].selfLink + "> Book link</a>");
          // var infolink = bookSelfLink(response);
          let bookId = response.items[i].id;
          let infolink =('<button class=book-link data-link="https://www.googleapis.com/books/v1/volumes/"' + bookId + 
          '"?key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4">Book Link</button>');
          // infolink.href="https://www.googleapis.com/books/v1/volumes/" + bookId + 
          //   "?key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4";

          // //gets author value for result
          // var author = response.items[i].volumeInfo.authors;

          // //creates a p tag tied to the authors name who wrote book
          // var authorName = $("<p class=author-names>").text("Author(s) name: " + author);

          //get book cover inmage from json
          response.items[i].volumeInfo.imageLinks ? 
            bookCover = response.items[i].volumeInfo.imageLinks.thumbnail : 
            bookCover = "images/bookDefault.jpg";
          //displays book cover on page
          var bookImage = $("<img src='" + bookCover + "'>");
          //setting attributes for size and lableing for each image
          bookImage.attr({
            class: "book-info",
            height: "300px",
            width: "250px",
          });
          
          response.items[i].searchInfo ? 
          snippit = response.items[i].searchInfo.textSnippet : 
          snippit = "There is no short discription for this book";    

          var snippitPrint = $("<p class=snip>").text(snippit);     
          

            
          // attaches textsnippit to book div
          bookDiv.prepend(snippitPrint);   

          // attaches first base link to book info **still needs work**
          bookDiv.prepend(infolink);

          // ave book to personal db icon
          bookDiv.prepend(saveBookIcon);

          //displays a still of the book cover
          bookDiv.prepend(bookImage);

          //attaches author name to the end of the div
          // bookDiv.prepend(authorName);
          
          // attaches all pulled info into a content pool div
          $("#search-content").append(bookDiv);
          // $(".carousel-inner").append(bookDiv);

        }
        
      });

  });



// checker to see everything in book div quickly
  $(document).on("click", "book-div", function() {
  
    console.log(this);
  
  });




  // takes in all users selected tags and puts them into query
  var tagList = ["money", "power"];
  console.log(tagList);
  var activeTagList = ["food", "camping", "grilling", "tents"];
  console.log(activeTagList);

  console.log("inactive:  " + tagList);
  console.log("active:  " + activeTagList);



///////////// Tag search funtion 
  $("#tag-search").on("click", function(){
    console.log($(this));
    $("#searched").empty();
    // $(".carousel-inner").empty();
    $("#search-content").empty();
    

    var tagpool= activeTagList.join("+");
    console.log(tagpool);
    
    queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + tagpool +
    "&filter=ebooks&orderBy=relevance&maxResults=30&langRestrict=en&key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4";
    console.log(queryUrl);
    $.ajax({
      url: queryUrl,
      method: "GET",
      prettyPrint: true
    })
      .then(function(response) {
        var results = response.items.length;
        
        console.log(results);
        console.log(response);
      
        for(let i = 0; i < results; i++){

           //makes each gif a ivdividual div with the class name of book-div
           const bookDiv = $("<div>");
           bookDiv.attr({
             class: "book-div",
             // class: "carousel-item",
             // width: "500px"
           });

           var saveBookIcon = $("<img>");
            saveBookIcon.attr({
              class: "saveBook",
              src: "images/save-book.png",
              width: "55px",
              height: "40px",
              book_name: response.items[i].volumeInfo.title,
              book_id: response.items[i].id
              // data: {
              //   name: response.items[i].volumeInfo.title,
              //   id: response.items[i].id
              // }
            });


          bookId = response.items[i].id;
           // first base link to book info **still needs work**--only displays json data for book
           infolink =("<button class=book-link data-link=https://www.googleapis.com/books/v1/volumes/" + bookId + 
           "?key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4>Book Link</button>");
          
          // //gets author value for result
          // var author = response.items[i].volumeInfo.authors;
          // //creates a p tag tied to the authors name who wrote book
          // var authorName = $("<p class=author-names>").text("Author(s) name: " + author);

          //get book cover image from json
          response.items[i].volumeInfo.imageLinks ? 
            bookCover = response.items[i].volumeInfo.imageLinks.thumbnail : 
            bookCover = "assets/images/bookDefault.jpg";
          //displays book cover on page
          bookImage = $("<img src='" + bookCover + "'>");

          //setting attributes for size and lableing for each image
          bookImage.attr({
            class: "book-info",
            height: "300px",
            width: "250px",
          });       

          
          response.items[i].searchInfo ? 
          snippit = response.items[i].searchInfo.textSnippet : 
          snippit = "There is no short discription for this book";    

          var snippitPrint = $("<p class=snip>").text(snippit);     
          

            
          // attaches textsnippit to book div
          bookDiv.prepend(snippitPrint);  

          // attaches first base link to book info **still needs work**
          bookDiv.prepend(infolink);
          // bookDiv.prepend(newLink);

          bookDiv.prepend(saveBookIcon);

          //displays a still of the book cover
          bookDiv.prepend(bookImage);
          //attaches author name to the end of the div
          // bookDiv.prepend(authorName);
          
          // attaches all pulled info into a content pool div
          $("#search-content").append(bookDiv);
          // $(".carousel-inner").append(bookDiv);
          
        }
      });
  });

  $(document).on("click", ".subject", function(){
    $("#searched").empty();
    // $(".carousel-inner").empty();
    $("#search-content").empty();
    let sub= $(this).attr("sub");
    console.log(sub);

    tagpool= activeTagList.join("+");
    console.log(tagpool);

    queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + tagpool + "+" + "subject:" + sub+ "/" +
    "&filter=ebooks&orderBy=relevance&maxResults=30&langRestrict=en&key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4";

    console.log(queryUrl);
    $.ajax({
      url: queryUrl,
      method: "GET",
      prettyPrint: true
    })
      .then(function(response) {
        var results = response.items.length;
        
        console.log(results);
        console.log(response);
      
        for(let i = 0; i < results; i++){

           //makes each gif a ivdividual div with the class name of book-div
           const bookDiv = $("<div>");
           bookDiv.attr({
             class: "book-div",
             // class: "carousel-item",
             // width: "500px"
           });


          bookId = response.items[i].id;
           // first base link to book info **still needs work**--only displays json data for book
           infolink =("<button class=book-link data-link=https://www.googleapis.com/books/v1/volumes/" + bookId + 
           "?key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4>Book Link</button>");
          
          // //gets author value for result
          // var author = response.items[i].volumeInfo.authors;
          // //creates a p tag tied to the authors name who wrote book
          // var authorName = $("<p class=author-names>").text("Author(s) name: " + author);

          var saveBookIcon = $("<img>");
            saveBookIcon.attr({
              class: "saveBook",
              src: "images/save-book.png",
              width: "55px",
              height: "40px",
              book_name: response.items[i].volumeInfo.title,
              book_id: response.items[i].id
              // data: {
              //   name: response.items[i].volumeInfo.title,
              //   id: response.items[i].id
              // }
            });

          //get book cover image from json
          response.items[i].volumeInfo.imageLinks ? 
            bookCover = response.items[i].volumeInfo.imageLinks.thumbnail : 
            bookCover = "assets/images/bookDefault.jpg";
          //displays book cover on page
          bookImage = $("<img src='" + bookCover + "'>");

          //setting attributes for size and lableing for each image
          bookImage.attr({
            class: "book-info",
            height: "300px",
            width: "250px",
          });       

          
          response.items[i].searchInfo ? 
          snippit = response.items[i].searchInfo.textSnippet : 
          snippit = "There is no short discription for this book";    

          var snippitPrint = $("<p class=snip>").text(snippit);     
          

            
          // attaches textsnippit to book div
          bookDiv.prepend(snippitPrint);  

          // attaches first base link to book info **still needs work**
          bookDiv.prepend(infolink);
          // bookDiv.prepend(newLink);

          bookDiv.prepend(saveBookIcon);

          //displays a still of the book cover
          bookDiv.prepend(bookImage);

          //attaches author name to the end of the div
          // bookDiv.prepend(authorName);
          
          // attaches all pulled info into a content pool div
          $("#search-content").append(bookDiv);
          // $(".carousel-inner").append(bookDiv);
          
        }
      });
  
  });

  function renderButtons() {

    // empty current tag buttons to prevent repetes
    $("#tag-pool").empty();
    $("#active-tags").empty();

    // Loop through the array of active tags, then generate buttons for each tag name in the array
    for(i=0; i<activeTagList.length; i++){
      var newTagAct = $("<button class=tagButton active=true tag=" + activeTagList[i] + ">").text(activeTagList[i]);
      
      var deleteMe = $("<img active=true tag=" + tagList[i] + ">");
        deleteMe.attr({
          class: "delIcon",
          src: "images/deleteMe.jpg",
          height: "15px",
          width: "15px",
          margin: "2px"
        });

        var tagDiv = $("<div class=tag-div>");

        tagDiv.append(newTagAct);
        tagDiv.append(deleteMe);
        tagDiv.attr({
          display: "inline-block"
        });
       
       //put new button at the end othe other buttons
       $("#active-tags").append(tagDiv);
      
       
     }


    // Loop through the array of unused tags, then generate buttons for each tag name in the array
    for(i=0; i<tagList.length; i++){
     var newTag = $("<button class=tagButton active=false tag=" + tagList[i] + ">").text(tagList[i]);
     
     //attach the attribute of data-person to Person
     //  newTag.attr(people[i]);

      var deleteMeAgain = $("<img active=false tag=" + tagList[i] + ">");
        deleteMeAgain.attr({
          class: "delIcon",
          src: "images/deleteMe.jpg",
          height: "15px",
          width: "15px",
          margin: "2px",
        });
      
      var tagDivAgain = $("<div class=tag-div>");

      tagDivAgain.append(newTag);
      tagDivAgain.append(deleteMeAgain);
     
     //put new button at the end othe other buttons
     $("#tag-pool").append(tagDivAgain);
     
      
    }
  }

  $(document).on("click", ".delIcon", function(){
    var tag = $(this).attr('tag');
    console.log(this);

    if($(this).attr('active') == "false") {
      var falseTagIndex = tagList.indexOf(tag);
      tagList.splice(falseTagIndex, 1);
      console.log(falseTagIndex);
      renderButtons();
      
    }else{
      var trueTagIndex = activeTagList.indexOf(tag);
      activeTagList.splice(trueTagIndex, 1);
      console.log(trueTagIndex);
      renderButtons();
    }
  });
    
  ////////////// special book info link ////////////////////
  $(document).on("click", ".book-link", function(){

    $("#search-content").empty();
   
    var bookId = $(this).data("link");

    queryUrl = bookId;
    
    $.ajax({
      url: queryUrl,
      method: "GET",
      prettyPrint: true
    })
      .then(function(response) {
        console.log(response);
        $("#searched").empty();
        

        const bookDiv = $("<div>");
          bookDiv.attr({
            class: "book-div",
            height: "auto",
            width: "auto"
          });

          for(i=0; i< response.volumeInfo.categories.length; i++){

            var categoryItem = $("<p>" + response.volumeInfo.categories[i] + "</p>");

            bookDiv.append(categoryItem);

          }

          var descript = $("<p>" + response.volumeInfo.description + "</p>");
          bookDiv.append(descript);

          //get book cover image from json
          response.volumeInfo.imageLinks ? 
            bookCover = response.volumeInfo.imageLinks.thumbnail : 
            bookCover = "images/bookDefault.jpg";

          //displays book cover on page
          var bookImage = $("<img src='" + bookCover + "'>");

          // //gets author value for result
          var author = response.volumeInfo.authors;

          var saveBookIcon = $("<img>");
            saveBookIcon.attr({
              class: "saveBook",
              src: "images/save-book.png",
              width: "55px",
              height: "40px",
              book_name: response.items[i].volumeInfo.title,
              book_id: response.items[i].id
              // data: {
              //   name: response.volumeInfo.title,
              //   id: response.id
              // }
            });

          // //creates a p tag tied to the authors name who wrote book
          var authorName = $("<p class=author-names>").text("Author(s) name: " + author);

          bookDiv.prepend(bookImage);

          bookDiv.prepend(saveBookIcon);

          //attaches author name to the end of the div
          bookDiv.prepend(authorName);
          
          // attaches all pulled info into a content pool div
          $("#search-content").append(bookDiv);
          // $(".carousel-inner").append(bookDiv);
  });
});



  // generates new tag button 
  $("#tagGenerator").on("click", function(){
    //take in value of make new tag maker bar
    var inputTag = $("#tagMaker").val().trim();
    // check that info came in right
    console.log(inputTag);
    // put the string into the tagList array
    tagList.push(inputTag);
    // check to see updated arry
    console.log(tagList);
    
    // generate new buttons to replace the old ones that were deleted in the line above
    renderButtons();
  });

  // moves tag between unused and active tags 
$(document).on("click", ".tagButton", function() {
    
    var tag = $(this).attr('tag');

    if($(this).attr('active') == "false") {
      var falseTagIndex = tagList.indexOf(tag);
      tagList.splice(falseTagIndex, 1);
      activeTagList.push(tag);
      console.log(tagList, activeTagList);
      renderButtons();
      
    }else{
      var trueTagIndex = activeTagList.indexOf(tag);
      activeTagList.splice(trueTagIndex, 1);
      tagList.push(tag);
      console.log(tagList, activeTagList);
      renderButtons();
    }
});

  
renderButtons();