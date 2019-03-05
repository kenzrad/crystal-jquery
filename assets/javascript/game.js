$(document).ready(function() {
    // Make our variables global to the runtime of our application
    var redGem = 0;
    var yellowGem = 0;
    var blueGem = 0;
    var purpleGem = 0;
    var numGem = 0;
    var targetGem = 0;

    function initializeGem () {
        redGem = (Math.floor(Math.random() * 10) + 1);
        yellowGem = (Math.floor(Math.random() * 10) + 1);
        blueGem = (Math.floor(Math.random() * 10) + 1);
        purpleGem = (Math.floor(Math.random() * 10) + 1);
        console.log(purpleGem);
        targetGem = (Math.floor(Math.random() * 90) + 10);
        
        $("#num-gem").empty();
        $("#purple-gem").val() = purpleGem;
        console.log($("#purple-gem").val());
    }

    // $(".gem-button").on("click", function() {
        
    // };

    initializeGem();
});