$(document).on('click', "#submitBtn", function() {

    Userpass = $("#regisPass-input").val().trim();
    Email = $("#regisEmail-input").val().trim();

    $.ajax({
        url: "/api/user",
        method: "GET",
        data: {
            password: Userpass,
            email: Email
        }
        .then(function(err, res){
           if (err) throw err;
           
           console.log(res);
        })
        
    });
});