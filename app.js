let $lowerKeyboard = $("#keyboard-lower-container"); //value for lowercase keyboard
let $upperKeyboard = $("#keyboard-upper-container"); //value for uppercase keyboard
let $keys = $(".well well-lg key") //keys class
let $yellowBlock = $("#target") //idk if i need
let s = 0; //individual sentence
let l = 0; //individual letter of sentence   restarts on new sentence
let $sentenceLine = $("#sentence") //puts sentences in their PLACE FOO  vvvv sentences
let sentences = ['ten',
    'ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
$sentenceLine.append(sentences[s]); //appends said sentences to the document
let targetLetter = sentences[s][l] //targets invidual letters in sentence
// let endSentence = sentences[s].length
let errors = 0

//THIS IS A MAYBE PROJECT//////////////////////////////////////////////////
// let highlighter = $(`<span id="tl-actual">${targetLetter}</span>`);   /
// sentences[s][l] = highlighter;                                       /
////////////////////////////////////////////////////////////////////////

// let targetLetter = $("#target-letter");
// let $letter = $sentences[$targetLetter][l]

function printLetter() {
    $("#target-letter").append(targetLetter)
}
printLetter();
let startTime
let endTime
$upperKeyboard.hide();

$(document).one("keypress", function() {
})



$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        $lowerKeyboard.show();
        $upperKeyboard.hide();
    }
    $(".highlight").removeClass("highlight");
    if (sentences[s] === undefined){
        $("#sentence").empty();
        $("#feedback").empty();
        $("#yellow-block").css('background-color', 'white')
        $("#sentence").append(`<P> Yov've finished the typing game! Results:</P>`)
        $("#feedback").append(`<P> You made ${errors} errors</P>`)
        endTime = Date.now();
        console.log(endTime);
        let finalTime = endTime - startTime / 1000 
        function secondsToMins(param) {
            let h = Math.floor(param / 3600)
            s-= h*3600;
            let m = Math.floor(s/ 60)
            s-= m*60
            return (s < 10 ? '0'+s : s);
        } 
        console.log(secondsToMins(finalTime))
        
    }
})

$(document).keydown(function (e) {
    if (!startTime){
    startTime = Date.now();
       console.log(startTime);
    }
    // if (targetLetter.keyCode === 32) {
        //     $("#target-letter").append("<p>Space</p>")
        // }
        if (e.keyCode == 16) {
            $lowerKeyboard.hide();
            $upperKeyboard.show();
        }
        if (e.key.charCodeAt(0) == targetLetter.charCodeAt(0)) {
            $("#feedback").append(`<span class="glyphicon glyphicon-thumbs-up"></span>`);
            $("#target-letter").empty();
            l++;
            targetLetter = sentences[s][l]
            $("#target-letter").append(targetLetter)
            $("#yellow-block").css('margin-left', '+=17.5px')
        } else if (e.keyCode == 16){
           
        } else if (e.key.charCodeAt(0) !== targetLetter.charCodeAt(0)) {
            $("#feedback").append(`<span class="glyphicon glyphicon-thumbs-down"></span>`) // did not 
            errors++;
        }
    });
    
    $(document).keypress(function (e) {
        $("#" + e.keyCode).addClass("highlight")
        if (l == sentences[s].length) {
            $sentenceLine.empty();
            $("#yellow-block").css('margin-left', '0');
            s++;
            l = 0;
            targetLetter = sentences[s][l];
            endSentence = sentences[s].length;
            $("#target-letter").empty();
            $("#target-letter").append(targetLetter);
            $("#feedback").empty();
            $sentenceLine.append(sentences[s]);
   
            // endSentence = sentences[s].length
        //  $("#sentence").append(`<p>You've completed the typing test! Here are your results:</p>`);
        //  $("#feedback").append(`<p> errors </p>`);
        }
    }
    );
    