$(document).ready(function () {
    //Selects a random number in the Random Number Generator Box
    //Number is between 19 and 120

    var random = Math.floor((Math.random() * 120) + 19);

    //Declares the random variable number in the box

    $("#ranNumGen").text(random);

    //Selects a random number for each designated gemstone
    //Random number is between 1 and 12 

    var emerald1 = Math.floor((Math.random() * 12) + 1);
    var diamond1 = Math.floor((Math.random() * 12) + 1);
    var ruby1 = Math.floor((Math.random() * 12) + 1);
    var sapphire1 = Math.floor((Math.random() * 12) + 1);

    var yourScore = 0;
    var wins = 0;
    var losses = 0;

    $("#numWins").text(wins);
    $("#numLosses").text(losses);

    //Resets the game
    function reset() {

        random = Math.floor((Math.random() * 120) + 19);

        $("#ranNumGen").text(random);

        yourScore = 0;

        $("#scoreGen").text(yourScore);


        emerald1 = Math.floor((Math.random() * 12) + 1);
        diamond1 = Math.floor((Math.random() * 12) + 1);
        ruby1 = Math.floor((Math.random() * 12) + 1);
        sapphire1 = Math.floor((Math.random() * 12) + 1);

    }

    //adds the wins to yourScore
    function tada() {
        alert("Shiver me timbers, You win, Freebooter!");
        wins++;
        $('#numWins').text(wins);
        reset();

    }
    //adds the losses to the userTotal
    function loser() {
        alert("Sail ho! ye lose!");
        losses++;
        $('#numLosses').text(losses);
        reset();

    }
    //sets up click for gemstones

    function jewelClick(jewel) {
        yourScore = yourScore + jewel;
        console.log("New yourScore= " + yourScore);
        $('#scoreGen').text(yourScore);

        //sets win/lose conditions
        if (yourScore == random) {
            tada();
            event.stopPropagation();
        }

        else if (yourScore > random) {
            loser();
            event.stopPropagation();

        }
    }

    $(".jewel").on("click", function () {
        var clickedJewel = $(this).attr("id");
        console.log(clickedJewel);
        if (clickedJewel === "emerald") {
            jewelClick(emerald1);
        }
        if (clickedJewel === "diamond") {
            jewelClick(diamond1);
        }
        if (clickedJewel === "ruby") {
            jewelClick(ruby1);
        }
        if (clickedJewel === "sapphire") {
            jewelClick(sapphire1);
        }




    })



    // $("#emerald").on('click', function () {
    //     yourScore = yourScore + emerald1;
    //     console.log("New yourScore= " + yourScore);
    //     $('#scoreGen').text(yourScore);
    //     //sets win/lose conditions
    //     if (yourScore == random) {
    //         tada();
    //     }
    //     else if (yourScore > random) {
    //         loser();
    //     }

    // })
    // $("#diamond").on('click', function () {
    //     yourScore = yourScore + diamond1;
    //     console.log("New yourScore= " + yourScore);
    //     $('#scoreGen').text(yourScore);
    //     //sets win/lose conditions
    //     if (yourScore == random) {
    //         tada();
    //     }
    //     else if (yourScore > random) {
    //         loser();
    //     }
    // })
    // $("#ruby").on('click', function () {
    //     yourScore = yourScore + ruby1;
    //     console.log("New yourScore= " + yourScore);
    //     $('#scoreGen').text(yourScore);
    //     //sets win/lose conditions
    //     if (yourScore == random) {
    //         tada();
    //     }
    //     else if (yourScore > random) {
    //         loser();
    //     }
    // })
    // $("#sapphire").on('click', function () {
    //     yourScore = yourScore + sapphire1;
    //     console.log("New yourScore= " + yourScore);
    //     $('#scoreGen').text(yourScore);
    //     //sets win/lose conditions
    //     if (yourScore == random) {
    //         tada();
    //     }
    //     else if (yourScore > random) {
    //         loser();
    //     }
    // })
});