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

    //Declares the wins and losses variables and keeps track

    $("#numWins").text(wins);
    $("#numLosses").text(losses);

    //Resets the game
    function reset() {
        random = Math.floor((Math.random() * 120) + 19);
        $("ranNumGen").text(random);

        emerald1 = Math.floor((Math.random() * 12) + 1);
        diamond1 = Math.floor((Math.random() * 12) + 1);
        ruby1 = Math.floor((Math.random() * 12) + 1);
        sapphire1 = Math.floor((Math.random() * 12) + 1);

        yourScore = 0;

        $("#scoreGen").text(yourScore);

    }

    //adds the wins to yourScore
    function tada() {
        alert("You won!");
        wins++;
        $('#numWins').text(wins);
        reset();

    }
    //addes the losses to the userTotal
    function loser() {
        alert("You lose!");
        losses++;
        $('#numLosses').text(losses);
        reset();

    }
    //sets up click for gemstones
    $("#emerald").on('click', function () {
        yourScore = yourScore + emerald1;
        console.log("New yourScore= " + yourScore);
        $('#scoreGen').text(yourScore);
        //sets win/lose conditions
        if (yourScore == random) {
            tada();
        }
        else if (yourScore > random) {
            loser();
        }

    })
    $("#diamond").on('click', function () {
        yourScore = yourScore + diamond1;
        console.log("New yourScore= " + yourScore);
        $('#scoreGen').text(yourScore);
        //sets win/lose conditions
        if (yourScore == random) {
            tada();
        }
        else if (yourScore > random) {
            loser();
        }
    })
    $("#ruby").on('click', function () {
        yourScore = yourScore + ruby1;
        console.log("New yourScore= " + yourScore);
        $('#scoreGen').text(yourScore);
        //sets win/lose conditions
        if (yourScore == random) {
            tada();
        }
        else if (yourScore > random) {
            loser();
        }
    })
    $("#sapphire").on('click', function () {
        yourScore = yourScore + sapphire1;
        console.log("New yourScore= " + yourScore);
        $('#scoreGen').text(yourScore);
        //sets win/lose conditions
        if (yourScore == random) {
            tada();
        }
        else if (yourScore > random) {
            loser();
        }
    })
});