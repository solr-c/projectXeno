
$(document).on("click", "#tagGenerator", function(){

    var inputTag = $("#tagMaker").val().trim();

    $.ajax({
        url: "api/tags",
        method: "PUT",
        tag_name: inputTag
    })
      .then(function(response){
        //   console.log(response);
          console.log("You made a new tag " + inputTag);
      });
});