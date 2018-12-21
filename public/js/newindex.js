
$(document).on("click", "#tagGenerator", function(){

    var inputTag = $("#tagMaker").val().trim();

    console.log("You made a new tag on the html side..   " + inputTag);
    $.ajax({
        url: "api/tags",
        method: "POST",
        data: {tag_name: inputTag} //looks good so far in console log
        // contentType : "application/json",
        // data : JSON.stringify(inputTag)
    })
      .then(function(err, response){
          if(err) throw err;
          else
          console.log(response);
          console.log("You made a new tag " + inputTag);
      });
});


$(document).on("click", ".book-link", function(){

    var LinkId = $(this).data("link");

    $.ajax({
        url: "api/user",
        method: "POST",
        data: {mybooks: LinkId}
    })
      .then(function(err, response){
          if (err) throw err;
          else
          console.log(response);
          console.log("you added a new book to your library with the id of" + LinkId);
      })
})