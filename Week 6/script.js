$(document).ready(function () {
    console.log("youre getting this far")
        //   var userChoice = button press
        //  var compChoice = random number between 0-1   
        /*  if computer choice
          
            0-.33 = rock
            
            .34-.66 = paper
            
            .67-1 = scissors
         */
    var bot;
    var userChoice;
    var test = function (choice1, choice2) {
        if (choice1 === choice2) {
            $('.result').text('you both lose!!!!');
            $('body').css('background-color',' red')
            return "you both lose!";
            
        }
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                $('.result').text('you WIN');
                $('body').css('background-color',' green')
                return "You win";
                
            }
            else {
                $('p').text('you lose!!!!');
                $('body').css('background-color',' red')
                return "you lose!";
                
            }
        }
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                $('p').text('you WIN');
                $('body').css('background-color',' green')
                return "you win";
                
            }
            else {
                if (choice2 === "scissors") {
                    $('p').text('you lose!!!!');
                    $('body').css('background-color',' red')
                    return "you lose";
                    
                }
            }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    $('p').text('you lose!!!!');
                    $('body').css('background-color',' red')
                    return "you lose";
                    
                }
                else {
                    if (choice2 === "paper") {
                        $('p').text('you WIN');
                        $('body').css('background-color',' green')
                        return "you win";
                        
                    }
                }
            }
        
    };

    function compChoice() {
        var computer = Math.random();
        if (computer < .33) {
            bot = "rock";
        }
        else if (computer > .66) {
            bot = "paper";
        }
        else {
            bot = "scissors";
        }
    };
    $('.rock').click(function () {
        userChoice = "rock";
        console.log("User Choice: " + userChoice);
        compChoice();
        console.log("Computer Choice: " + bot);
        test(userChoice, bot);
        console.log(test(userChoice, bot));
    });
    $('.paper').click(function () {
        userChoice = "paper";
        console.log("User Choice: " + userChoice);
        compChoice();
        console.log("Computer Choice: " + bot);
        test(userChoice, bot);
        console.log(test(userChoice, bot));
    });
    $('.scissors').click(function () {
        userChoice = "scissors";
        console.log("User Choice: " + userChoice);
        compChoice();
        console.log("Computer Choice: " + bot);
        test(userChoice, bot);
        console.log(test(userChoice, bot));
    });
});