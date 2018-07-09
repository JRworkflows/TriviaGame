window.onload = function() {
    console.log('working?');

    //  Creating the div elements with JS 

    var newDivs = function() {

            //  using body as a selector of the actual body element in the HTML
            var body = document.querySelector('body');

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
            pQuest.setAttribute('data-question', 'f');
            //pEl.dataset.answer === radioEl.value
            triviaDiv.appendChild(pQuest);

            var pAns = document.createElement('p');
            pAns.innerText = 'The Beatles';
            pAns.setAttribute('data-answer', 'false');
            triviaDiv.appendChild(pAns);

            var radioEl = document.createElement('input');
            radioEl.setAttribute('type', 'radio');
            radioEl.setAttribute('data-answer', 'false');
            radioEl.setAttribute('text', 'The Beatles');
            pAns.appendChild(radioEl);

            var pAnsTwo = document.createElement('p');
            pAnsTwo.innerText = 'Los Lobos';
            pAnsTwo.setAttribute('data-answer', 'true');
            triviaDiv.appendChild(pAnsTwo);

            var radioEl = document.createElement('input')
            radioEl.setAttribute('type', 'radio')
            radioEl.setAttribute('data-answer', 'true')
            radioEl.setAttribute('text', 'Los Lobos');
            pAnsTwo.appendChild(radioEl);


            var pQuestTwo = document.createElement('p');
            pQuestTwo.innerText = 'Whos lyrics are these?';
            triviaDiv.appendChild(pQuestTwo);

            var pAnsThree = document.createElement('p');
            pAnsThree.innerText = 'Drake';
            pAnsThree.setAttribute('data-answer', 'true');
            triviaDiv.appendChild(pAnsThree);

            var radioEl = document.createElement('input')
            radioEl.setAttribute('type', 'radio');
            pAnsThree.appendChild(radioEl);

            var pAnsFour = document.createElement('p');
            pAnsFour.innerText = 'J. Cole';
            pAnsFour.setAttribute('data-answer', 'true');
            triviaDiv.appendChild(pAnsFour);

            var radioEl = document.createElement('input')
            radioEl.setAttribute('type', 'radio');
            pAnsFour.appendChild(radioEl);

            var pQuestThree = document.createElement('p');
            pQuestThree.innerText = 'Which of these is a music octave?';
            triviaDiv.appendChild(pQuestThree);

            var pAnsFive = document.createElement('p');
            pAnsFive.innerText = 'Dynamic';
            pAnsFive.setAttribute('data-answer', 'false');
            triviaDiv.appendChild(pAnsFive);

            var radioEl = document.createElement('input')
            radioEl.setAttribute('type', 'radio');
            pAnsFive.appendChild(radioEl);

            var pAnsSix = document.createElement('p');
            pAnsSix.innerText = 'Alto';
            pAnsSix.setAttribute('data-answer', 'true');
            triviaDiv.appendChild(pAnsSix);

            var radioEl = document.createElement('input')
            radioEl.setAttribute('type', 'radio');
            pAnsSix.appendChild(radioEl);

            var pQuestFour = document.createElement('p');
            pQuestFour.innerText = 'Are vinyls obsolete?';
            triviaDiv.appendChild(pQuestFour);

            var pAnsSeven = document.createElement('p');
            pAnsSeven.innerText = 'Yes'
            pAnsSeven.setAttribute('data-answer', 'false');
            triviaDiv.appendChild(pAnsSeven);

            var radioEl = document.createElement('input')
            radioEl.setAttribute('type', 'radio');
            pAnsSeven.appendChild(radioEl);

            var pAnsEight = document.createElement('p');
            pAnsEight.innerText = 'No';
            pAnsEight.setAttribute('data-answer', 'true');
            triviaDiv.appendChild(pAnsEight);

            var radioEl = document.createElement('input');
            radioEl.setAttribute('type', 'radio');
            pAnsEight.appendChild(radioEl);








            body.appendChild(triviaDiv);
            body.appendChild(timerDiv);
            body.appendChild(statsDiv);
            body.appendChild(resultDiv);





        }
        // Creating elements inside the triviaDiv
    var triviaDiv = function() {


        // document.getElementsByClassName('triviaDiv').append('p').createTextNode('Is this your kind of song?').setAttribute('class', 'questOne');
        // document.getElementsByClassName('questOne').append('INPUT').setAttribute('type', 'radio');
        // document.getElementsByClassName('triviaDiv').append('p').createTextNode('Are these good lyrics?').setAttribute('class', 'questTwo');
        // document.getElementsByClassName('triviaDiv').append('p').createTextNode('Is this too old?').setAttribute('class', 'questThree');
        // document.getElementsByClassName('triviaDiv').append('p').createTextNode('Do you even like Music').setAttribute('class', 'questFour');

    }

    console.log(newDivs());

    // Work on the timeOut/setInterval code for the timerDiv






    // Work on a counter that will populate a new page that displays results once timer has reached 0






    // Display timer

};