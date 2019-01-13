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