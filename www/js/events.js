$(document).ready(function() {
    $(".insert_key").bind("touchstart click", function() {
        app.insertToInput(this.innerHTML);
    });

    $(".equals_key").bind("touchstart click", function() {
        var currInput = document.getElementById("sigfig_input");
        currInput.value = eval(currInput.value);
    });
    
    //clear the display
    (function() {
        console.log("Clearing the display element");
        document.getElementById("sigfig_input").value = "";
    })()
});
