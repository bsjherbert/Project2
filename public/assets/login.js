
var userData = {};

$(document).ready(function () {
    
    $("#newUser").click(function (event){
        event.preventDefault()
        userData.email = $("#emailInput").val()
        userData.password = $("#passwordInput").val()
        console.log(userData)
        $.post("/api/users",userData, function (results) {
            window.location.href = "/"
        })
    });
});