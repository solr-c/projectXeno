
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

      $.ajax({
          url: "api/user/:id/tags",
          method: "POST",
          data: {tag_name: inputTag}
      }).then(function(err, res){
          if (err) throw err;
          console.log(res);
          console.log(data);
      })
});

// working user posting to db
$(document).on("click", "#submitBtn", function(){

    var Username = $("#regisUserName-input").val().trim();
    var Userpass = $("#regisPass-input").val().trim();
    var Firstname = $("#regisFirstName-input").val().trim();
    var Lastname = $("#regisLastName-input").val().trim();
    var Email = $("#regisEmail-input").val().trim();

    $.ajax({
        url: "api/user",
        method: "POST",
        data: {
            firstname: Firstname,
            lastname: Lastname,
            username: Username,
            email: Email,
            mybooks: [],
            mytags: [],
            password: Userpass 
        }
    })
      .then(function(err, response){
          if (err) throw err;
          else
          console.log(response);
          console.log(data);
      });
});

$(document).on("click", ".saveBook", function(){

    var bookName = $(this).attr("book_name");
    var bookID = $(this).attr("book_id");

    $.ajax({
        url: "api/user/:id/books",
        method: "POST",
        data:{
            mybooks: bookID,
        }
    }).then(function(err, res){
        if (err) throw err;
        console.log(res);
        console.log(data);
    });

    $.ajax({
        url: "api/books",
        method: "POST",
        data: {
            book_name: bookName,
            book_apiId: bookID
        }
    }).then(function(err, res){
        if (err) throw err;
        console.log(res);
        console.log(data);

    })
});
