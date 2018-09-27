var triviaGame = function() {
    // define game defaults
    var wins = 0;
    var losses = 0;
    var time = 30;
    var numberofCorrect = 0;

    var questionOne = {
            question: "What most recent team was succeeded by the Sacramento Kings in 1985?",
            answers: [
                "Rochester Seagrams", "Kansas City Kings", "Cincinatti Royals",
            ],
            correctAnswer: "Kansas City Kings"
        }

        var questionTwo = {
                question: "In what year were the Sacramento Kings Established?",
                answers: [
                    "1985", "1928", "1979"
                ],
                correctAnswer: "1985"
            }

            var questionThree = {
                question: "What Kings player is still invested in the team and its sponsoring Arena?",
                answers: [
                    "Mike Bibby", "Chris Webber", "Vlade Divac"
                ],
                correctAnswer: "Vlade Divac"
            }

    var panel = $('<div>');

    panel.append("<h2>" + questionOne.question + "</h2>");
    for (var j = 0; j < questionOne.answers.length; j++) {
        panel.append("<input type='radio' name='question-1" +
            "' value='" + questionOne.answers[j] + "''>" + questionOne.answers[j]);
    };

    panel.append("<h2>" + questionTwo.question + "</h2>");
    for (var i = 0; i < questionTwo.answers.length; i++) {
        panel.append("<input type='radio' name='question-2" +
            "' value= '" + questionTwo.answers[i] + "''>" + questionTwo.answers[i]);
    }

    panel.append("<h2>" + questionThree.question + "<h2>");
    for (var k = 0; k < questionThree.answers.length; k++) {
        panel.append("<input type='radio' name='question-3" +
            "' value= '" + questionThree.answers[k] + "''>" + questionThree.answers[k]);
    }

    $(".questOne").append(panel);

    var submit = $("<button>Check</button>");

    submit.on("click", function() {
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questionOne.correctAnswer) {
                numberofCorrect++;
            }
            
        });console.log(numberofCorrect)
    });
    
    $(".other").append(submit);

    


    var resetGame = function() {
            time = 30;

        }
        // check answer input to answer value keys
    var answerCheck = function() {

    }


    // set intervals
    var timeCount = function() {

        }
        // win or gameover
    var winCondition = function() {

    }
    // this.resetGame();
}
triviaGame();