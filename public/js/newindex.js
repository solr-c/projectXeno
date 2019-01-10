
$(document).on("click", "#tagGenerator", function(){

    var inputTag = $("#tagMaker").val().trim();

    console.log("You made a new tag on the html side..   " + inputTag);
    $.ajax({
        url: "/tags",
        method: "POST",
        data: {tag_name: inputTag}, //looks good so far in console log
        // contentType : "application/json",
        // data : JSON.stringify(inputTag)
    })
      .then(function(err, response){
          if(err) throw err;
          else
          console.log(response);
          console.log("You made a new tag " + inputTag);
      });

    //   $.ajax({
    //       url: "/user/:id/tags",
    //       method: "POST",
    //       where: {
    //         id: response.params.id
    //       },
    //       data: {tag_name: inputTag}
    //   }).then(function(err, res){
    //       if (err) throw err;
    //       console.log(res);
    //       console.log(data);
    //   });
      
});




$(document).on("click", ".saveBook", function(){

    var bookName = $(this).attr("book_name");
    var bookID = $(this).attr("book_id");

   
    $.ajax({
        url: "/books",
        method: "POST",
        data: {
            book_name: bookName,
            book_apiId: bookID
        }
    }).then(function(err, res){
        if (err) throw err;
        console.log(res);
        console.log(data);

    });

    // $.ajax({
    //     url: "/user/:id/books",
    //     method: "POST",
    //     where: {
    //         id: req.params.id
    //       },
    //     data:{
    //         mybooks: bookID,
    //     }
    // }).then(function(err, res){
    //     if (err) throw err;
    //     console.log(res);
    //     console.log(data);
    // });

});


$(document).on("click", "#poolDump", function() {

    console.log("pool dump click");
    $.ajax({
        url: "/tags",
        method: "GET",
    }).then(function(err, res){
        if (err) throw err;
        console.log(res);
    });
});