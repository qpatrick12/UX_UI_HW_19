console.log ("hello");

$(document).ready(function()
{
    $("#toggle").on("click", function(){
        $("#dropdown").slideToggle();
    });
});
