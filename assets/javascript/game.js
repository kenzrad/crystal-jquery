$(document).ready(function() {
    var redGem = 0;
    var yellowGem = 0;
    var blueGem = 0;
    var purpleGem = 0;
    var numGem = 0;
    var targetGem = 0;
    var won = 0;
    var lost= 0;
    var crystalClick = 1;
    var crystalScore = 0;

    $("#ins-div").attr("style", "visibility: hide");
    $("#ins-button").click(function() {
        $('#ins-div').slideToggle("slide");
    });

    $("#click-score").text("Efficiency: " + crystalScore);

    initializeGem();


    function initializeGem () {
        $("#crystal-div").attr("style", "visibility: show");
        $("#message-div").attr("style", "display: none");
        $('#ins-cont').attr("style", "visibility: show");
        numGem = 0;
        crystalClick = 1;


        Array.prototype.shuffle = function() {
            var input = this;
             
            for (var i = input.length-1; i >=0; i--) {
             
                var randomIndex = Math.floor(Math.random()*(i+1)); 
                var itemAtIndex = input[randomIndex]; 
                 
                input[randomIndex] = input[i]; 
                input[i] = itemAtIndex;
            }
            return input;
        }
         
        var tempArray = [1,2,3,4,5,8,10,-2,50]
        tempArray.shuffle();
         
        // and the result is...
        console.log(tempArray);    

        redGem = tempArray[0];
        yellowGem = tempArray[1];
        blueGem = tempArray[2];
        purpleGem = tempArray[3];
        targetGem = (Math.floor(Math.random() * 90) + 10);

        $("#num-gem").text(numGem);
        $("#red-gem").val(redGem);
        $("#yellow-gem").val(yellowGem);
        $("#blue-gem").val(blueGem);
        $("#purple-gem").val(purpleGem);
        $("#target-gem").text(targetGem);
        $("#lost-score").text("Lost: " + lost);
        $("#won-score").text("Won: " + won);
    }


    $("#red-gem").on("click", function() {
        numGem += redGem;
        $("#num-gem").text(numGem);
        console.log(numGem);
        checkNum();
        crystalClick++;
    });


    $("#yellow-gem").on("click", function() {
        numGem += yellowGem;
        $("#num-gem").text(numGem);
        console.log(numGem);
        checkNum();
        crystalClick++;
    });


    $("#blue-gem").on("click", function() {
        numGem += blueGem;
        $("#num-gem").text(numGem);
        console.log(numGem);
        checkNum();
        crystalClick++;
    });


    $("#purple-gem").on("click", function() {
        numGem += purpleGem;
        $("#num-gem").text(numGem);
        console.log(numGem);
        checkNum();
        crystalClick++;
    });


    function checkNum() {
        if (numGem === targetGem) {
            console.log("You win!");
            youWin();
            resetView();
        }
        else if (numGem > targetGem) {
            console.log("You lose!");
            youLose();
            resetView();
        }
        else if (numGem < targetGem) {
            console.log("Still under");
        }
    }


    function resetView() {
        $("#crystal-div").attr("style", "visibility: hidden");
        $("#message-div").attr("style", "display: show");
        $('#ins-cont').attr("style", "visibility: hidden");
    };


    function youWin() {
        won++;

        if ((crystalScore > crystalClick) && (crystalScore != 0)) {
            crystalScore = crystalClick;
            $("#message").text("Optimum Crystal Status Achieved!");   
            $("#message-sub").text("Your efficiency was score was " + crystalClick + ", which pleases the Crystal Collector!");
            $("#click-score").text("Efficiency: " + crystalScore);
        }
        
        else if (crystalScore === 0) {
            crystalScore = crystalClick;
            $("#message").text("Clever girl!");   
            $("#message-sub").text("Your efficiency score was " + crystalClick + ".");
            $("#click-score").text("Efficiency: " + crystalScore);
        }

        else {
            crystalScore = crystalClick;
            $("#message").text("Not the most efficient, but it'll do!");   
            $("#message-sub").text("Your efficiency was score was " + crystalClick + " clicks.");
        }

        $("#message-div").on("click", function() {
            initializeGem();
        });
    };


    function youLose() {
        $("#message").text("NO DUMB DUMB!!");   
        $("#message-sub").text("You have disappointed the Crystal Collector.");   
        lost++;
        $("#message-div").on("click", function() {
            initializeGem();
        });
    };


});