window.document.onload = function() {

    function mainContent() {
        // Creating the div elements with JS 

        var newDivs = function() {

            document.getElementsByClassName('mainBody').createElement('div').setAttribute('class', 'triviaDiv');
            document.getElementsByClassName('mainBody').createElement('div').setAttribute('class', 'timerDiv');
            document.getElementsByClassName('mainBody').createElement('div').setAttribute('class', 'statsDiv');
            document.getElementsByClassName('mainBody').createElement('div').setAttribute('class', 'resultDiv')

            // Creating elements inside the triviaDiv
            var triviaDiv = function() {


                document.getElementsByClassName('triviaDiv').createElement('p').createTextNode('Is this your kind of song?').setAttribute('class', 'questOne');
                document.getElementsByClassName('questOne').createElement('INPUT').setAttribute('type', 'radio');
                document.getElementsByClassName('triviaDiv').createElement('p').createTextNode('Are these good lyrics?').setAttribute('class', 'questTwo');
                document.getElementsByClassName('triviaDiv').createElement('p').createTextNode('Is this too old?').setAttribute('class', 'questThree');
                document.getElementsByClassName('triviaDiv').createElement('p').createTextNode('Do you even like Music').setAttribute('class', 'questFour');


            }
        }


        // Work on the timeOut/setInterval code for the timerDiv






        // Work on a counter that will populate a new page that displays results once timer has reached 0






        // Display timer

    };
    console.log(triviaDiv);
}