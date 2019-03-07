$(document).ready(function() {
    // Make our variables global to the runtime of our application
    var redGem = 0;
    var yellowGem = 0;
    var blueGem = 0;
    var purpleGem = 0;
    var numGem = 0;
    var targetGem = 0;
    var numArray = [1,2,3,4,5,6,7,8,9,10];

    function initializeGem () {
        $("#num-gem").attr("style", "visibility: show");
        $("#red-gem").attr("style", "visibility: show");
        $("#yellow-gem").attr("style", "visibility: show");
        $("#blue-gem").attr("style", "visibility: show");
        $("#purple-gem").attr("style", "visibility: show");
        $("#target-gem").attr("style", "visibility: show");
        $("#message").attr("style", "visibility: hidden");


        redGem = (Math.floor(Math.random() * 9) + 1);
        yellowGem = (Math.floor(Math.random() * 9) + 1);
        blueGem = (Math.floor(Math.random() * 9) + 1);
        purpleGem = (Math.floor(Math.random() * 9) + 1);
        targetGem = (Math.floor(Math.random() * 90) + 10);

        $("#num-gem").empty();
        $("#red-gem").val(redGem);
        $("#yellow-gem").val(yellowGem);
        $("#blue-gem").val(blueGem);
        $("#purple-gem").val(purpleGem);
        $("#target-gem").text(targetGem);

        console.log($("#red-gem").val());
        console.log($("#yellow-gem").val());
        console.log($("#blue-gem").val());
        console.log($("#purple-gem").val());
        console.log($("#target-gem").text());
    }

    initializeGem();

    $("#red-gem").on("click", function() {
        numGem += redGem;
        $("#num-gem").text(numGem);
        console.log(numGem);
        checkNum();
    });

    $("#yellow-gem").on("click", function() {
        numGem += yellowGem;
        $("#num-gem").text(numGem);
        console.log(numGem);
        checkNum();
    });

    $("#blue-gem").on("click", function() {
        numGem += blueGem;
        $("#num-gem").text(numGem);
        console.log(numGem);
        checkNum();
    });

    $("#purple-gem").on("click", function() {
        numGem += purpleGem;
        $("#num-gem").text(numGem);
        console.log(numGem);
        checkNum();
    });

    function checkNum() {
        if (numGem === targetGem) {
            console.log("You win!");
            youWin();
        }
        else if (numGem > targetGem) {
            console.log("You lose!");
            youLose();
        }
        else if (numGem < targetGem) {
            console.log("Still under");
        }
    }

    function youWin() {
        $("#num-gem").attr("style", "visibility: hidden");
        $("#red-gem").attr("style", "visibility: hidden");
        $("#yellow-gem").attr("style", "visibility: hidden");
        $("#blue-gem").attr("style", "visibility: hidden");
        $("#purple-gem").attr("style", "visibility: hidden");
        $("#target-gem").attr("style", "visibility: hidden");
        $("#message").attr("style", "visibility: show");
        $("#message").text("Clever girl!");
        $("#message").on("click", function() {
            initializeGem();
        });
    };

    function youLose() {
        $("#num-gem").attr("style", "visibility: hidden");
        $("#red-gem").attr("style", "visibility: hidden");
        $("#yellow-gem").attr("style", "visibility: hidden");
        $("#blue-gem").attr("style", "visibility: hidden");
        $("#purple-gem").attr("style", "visibility: hidden");
        $("#target-gem").attr("style", "visibility: hidden");
        $("#message").attr("style", "visibility: show");
        $("#message").text("NO DUMB DUMB!");    
        $("#message").on("click", function() {
            initializeGem();
        });
    }

});