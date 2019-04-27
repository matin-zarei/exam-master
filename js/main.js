// Get quiz name
const urlParams = new URLSearchParams(window.location.search);
const quizName = urlParams.get('name');

// Quiz data
const quiz = {
    "quizzes": [{
        "title": "Abstract Quiz",
        "questions": [{
            "question": "If two left handed people argue, which one is right?",
            "answers": [{
                "content": "The one on the right.",
                "value": false
            }, {
                "content": "The one on the left.",
                "value": true
            }, {
                "content": "The one with the gun.",
                "value": false
            }, {
                "content": "Tom.",
                "value": false
            }]
        }, {
            "question": "What does Google use if it can't find an answer on Google?",
            "answers": [{
                "content": "Bing",
                "value": false
            }, {
                "content": "Bang",
                "value": false
            }, {
                "content": "Bong",
                "value": false
            }, {
                "content": "Ask Jeeves",
                "value": true
            }]
        }, {
            "question": "What kind of pants do Mario and Luigi wear?",
            "answers": [{
                "content": "Dussault apparel slashed jeans",
                "value": false
            }, {
                "content": "Tapered bell bottoms",
                "value": false
            }, {
                "content": "Acid washed Guccis",
                "value": false
            }, {
                "content": "Denim denim denim",
                "value": true
            }]
        }]
    }, {
        "title": "Dev Quiz",
        "questions": [{
            "question": "How many programmers does it take to change a lightbulb?",
            "answers": [{
                "content": "x = x + 1",
                "value": false
            }, {
                "content": "undefined",
                "value": false
            }, {
                "content": "NaN === NaN",
                "value": false
            }, {
                "content": "None. It's a hardware problem.",
                "value": true
            }]
        }, {
            "question": "What's the object oriented way to become wealthy?",
            "answers": [{
                "content": "Inheritance",
                "value": true
            }, {
                "content": "Have some class",
                "value": false
            }, {
                "content": "Super props",
                "value": false
            }, {
                "content": "Wealth is subjective",
                "value": false
            }]
        }, {
            "question": "What should you do when a bug is sad?",
            "answers": [{
                "content": "Help it out of a bind",
                "value": false
            }, {
                "content": "Console it",
                "value": true
            }, {
                "content": "Express your feelings",
                "value": false
            }, {
                "content": "Be more responsive",
                "value": false
            }]
        }]
    }]
};

$(document).ready(function () {
    // Find quiz index
    const index = quiz.quizzes.findIndex(x => x.title === quizName);
    if (index == -1) {
        // If the quiz doesn't exist
        alert("No Quiz Found !!!");
    } else {
        // Set the quiz title
        $("#quiztitle").text(quiz.quizzes[index].title);

        const questionSum = Object.keys(quiz.quizzes[index].questions).length;
        let questionCounter = 0;

        // Create form element
        function nextQuestion() {
            let question = quiz.quizzes[index].questions[questionCounter].question;
            for ($i = 0; $i < 4; $i++) {
                let answer = quiz.quizzes[index].questions[questionCounter].answers[$i].content;
                let value = quiz.quizzes[index].questions[questionCounter].answers[$i].value;
                $('#answer-' + $i).text(answer);
                $('#answer-' + $i).attr('value', value);
            }
            $('#question').text(question);
            questionCounter++;
        }
        nextQuestion();
        trueAnswer = 0;
        //next questions
        $('*.alert').click(function () {
            //if the answer is correct
            if ($(this).attr('value') == 'true')
                trueAnswer++;
            //style form elements
            for ($i = 0; $i < 4; $i++) {
                let result = quiz.quizzes[index].questions[questionCounter - 1].answers[$i].value;
                if (result == true)
                    $('#answer-' + $i).css('border', '1px solid green');
                else
                    $('#answer-' + $i).css('border', '1px solid red');
            }
            setTimeout(
                function () {
                    $('*.alert').css('border', '1px solid transparent');
                    //if all question were answered
                    if (questionCounter == questionSum) {
                        trueAnswer = trueAnswer * questionSum / 100;
                        location.href = 'result.html?score=' + trueAnswer;
                    }
                    nextQuestion();
                }, 2000);
        });

    }

});

