window.onload = function() {

    //  Creating the div elements with JS 

    var newDivs = function() {

        //  using body as a selector of the actual body element in the HTML
        var main = document.querySelector('html');

        bg = function() {
                main.backgroundImage = "url('/Users/foundation/Desktop/Game/TriviaGame/assets/images/BG.jpg')";
                bg.setAttribute('height', '1080px');
                bg.setAttribute('wieght', '720px')
            }
            //  within the body document we are creating four divs to hold the main content segments for the page
            // var headerDiv = document.createElement('div');
            // headerDiv.setAttribute('class', 'headerDiv');

        var triviaDiv = document.createElement('div');
        triviaDiv.setAttribute('class', 'triviaDiv');

        var timerDiv = document.createElement('div');
        timerDiv.setAttribute('class', 'timerDiv');

        var statsDiv = document.createElement('div');
        statsDiv.setAttribute('class', 'statsDiv');

        var resultDiv = document.createElement('div');
        resultDiv.setAttribute('class', 'resultDiv');

        // var footerDiv = document.createElement('div');
        // footerDiv.setAttribute('class', 'footerDiv');

        //  setting p elements, text, and radio buttons inside the trivia div

        // var headerText = document.createElement('h1');
        // headerText.setAttribute('text', 'music');
        // headerText.setAttribute('class', 'headerText');
        // headerDiv.appendChild(headerText);

        var pQuest = document.createElement('p');
        pQuest.innerText = 'Which artists perform this song?';
        // pQuest.setAttribute('data-question', 'f');
        //pEl.dataset.answer === radioEl.value
        triviaDiv.appendChild(pQuest);

        var pAns = document.createElement('p');
        pAns.innerText = 'The Beatles';
        // pAns.setAttribute('data-answer', 'false');
        triviaDiv.appendChild(pAns);

        var radioEl = document.createElement('input');
        radioEl.setAttribute('type', 'radio');
        // radioEl.setAttribute('data-answer', 'false');
        radioEl.setAttribute('name', 'questOneNames');
        radioEl.setAttribute('id', 'Beatles');
        radioEl.value = 'beatles';
        pAns.appendChild(radioEl);

        var pAnsTwo = document.createElement('p');
        pAnsTwo.innerText = 'Los Lobos';
        // pAnsTwo.setAttribute('data-answer', 'true');
        triviaDiv.appendChild(pAnsTwo);

        var radioElTwo = document.createElement('input');
        radioElTwo.setAttribute('type', 'radio');
        // radioElTwo.setAttribute('data-answer', 'true');
        radioElTwo.setAttribute('name', 'questOneNames');
        radioElTwo.setAttribute('id', 'Lobos');
        radioEl.value = 'lobos';
        pAnsTwo.appendChild(radioElTwo);


        var pQuestTwo = document.createElement('p');
        pQuestTwo.innerText = 'Whos lyrics are these?';
        triviaDiv.appendChild(pQuestTwo);

        var pAnsThree = document.createElement('p');
        pAnsThree.innerText = 'Drake';
        // pAnsThree.setAttribute('data-answer', 'true');
        triviaDiv.appendChild(pAnsThree);

        var radioElThree = document.createElement('input');
        radioElThree.setAttribute('type', 'radio');
        radioElThree.setAttribute('name', 'questTwoNames');
        radioElThree.setAttribute('id', 'Drake');
        radioElThree.value = 'drake';
        pAnsThree.appendChild(radioElThree);

        var pAnsFour = document.createElement('p');
        pAnsFour.innerText = 'J. Cole';
        // pAnsFour.setAttribute('data-answer', 'true');
        triviaDiv.appendChild(pAnsFour);

        var radioElFour = document.createElement('input');
        radioElFour.setAttribute('type', 'radio');
        radioElFour.setAttribute('name', 'questTwoNames');
        radioElFour.setAttribute('id', 'J. Cole');
        radioElFour.value = 'jcole';
        pAnsFour.appendChild(radioElFour);

        var pQuestThree = document.createElement('p');
        pQuestThree.innerText = 'Which of these is a music octave?';
        triviaDiv.appendChild(pQuestThree);

        var pAnsFive = document.createElement('p');
        pAnsFive.innerText = 'Dynamic';
        // pAnsFive.setAttribute('data-answer', 'false');
        triviaDiv.appendChild(pAnsFive);

        var radioElFive = document.createElement('input');
        radioElFive.setAttribute('type', 'radio');
        radioElFive.setAttribute('name', 'questThreeNames');
        radioElFive.setAttribute('id', 'Dynamic');
        radioElFive.value = 'dynamic'
        pAnsFive.appendChild(radioElFive);

        var pAnsSix = document.createElement('p');
        pAnsSix.innerText = 'Alto';
        // pAnsSix.setAttribute('data-answer', 'true');
        triviaDiv.appendChild(pAnsSix);

        var radioElSix = document.createElement('input');
        radioElSix.setAttribute('type', 'radio');
        radioElSix.setAttribute('name', 'questThreeNames');
        radioElSix.setAttribute('id', 'Alto');
        radioElSix.value = 'alto';
        pAnsSix.appendChild(radioElSix);

        var pQuestFour = document.createElement('p');
        pQuestFour.innerText = 'Are vinyls obsolete?';
        triviaDiv.appendChild(pQuestFour);

        var pAnsSeven = document.createElement('p');
        pAnsSeven.innerText = 'Yes'
            // pAnsSeven.setAttribute('data-answer', 'false');
        triviaDiv.appendChild(pAnsSeven);

        var radioElSeven = document.createElement('input');
        radioElSeven.setAttribute('type', 'radio');
        radioElSeven.setAttribute('name', 'questFourNames');
        radioElSeven.setAttribute('id', 'Yes');
        radioElSeven.value = 'yes';
        pAnsSeven.appendChild(radioElSeven);

        var pAnsEight = document.createElement('p');
        pAnsEight.innerText = 'No';
        // pAnsEight.setAttribute('data-answer', 'true');
        triviaDiv.appendChild(pAnsEight);

        var radioElEight = document.createElement('input');
        radioElEight.setAttribute('type', 'radio');
        radioElEight.setAttribute('name', 'questFourNames');
        radioElEight.setAttribute('id', 'No');
        radioElEight.value = 'no';
        pAnsEight.appendChild(radioElEight);

        var submitBtn = document.createElement('input');
        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('name', 'btn');
        submitBtn.setAttribute('value', 'submit');
        submitBtn.setAttribute('id', 'submitButton');
        triviaDiv.appendChild(submitBtn);

        //  adding .value to your radio elements, if statements to see if radio elements value is equal to the answer selected

        // function answerCheck() {
        //     var answers = {
        //         questOneNames: 'lobos',
        //         questTwoNames: 'jcole',
        //         questThreeNames: 'Alto',
        //         pQuestFour: 'no'
        //     }



        //     // CORBIN MADE THIS - NO TOUCH :) 
        //     var formNames = [...new Array(document.forms[0].length)].map((_, i) => document.forms[0][i]).reduce((prev, el) => prev.includes(el.name) ? prev : [...prev, el.name], []);
        //     for (var i = 0; i < formNames.length; i++) {
        //         var formName = formNames[i];
        //         var formVal = document.forms[0][formName] ? document.forms[0][formName].value : null;
        //         var correct = 0;
        //         var wrong = 0;
        //         if (answers[formName] === formVal) {
        //             // This answer is right
        //             correct++;
        //         } else {
        //             // this answer is wrong
        //             wrong++;
        //         }
        //     }




        //     for (var i = 0; i < document.forms[0].length; i++) {
        //         console.log(document.forms[0][i].value)
        //     }
        // }


        // answerCheck();


        main.appendChild(triviaDiv);
        main.appendChild(timerDiv);
        main.appendChild(statsDiv);
        main.appendChild(resultDiv);

    }

    newDivs();



    // Work on the timeOut/setInterval code for the timerDiv


    // Display timer



    // Work on a counter that will populate a new page that displays results once timer has reached 0




}