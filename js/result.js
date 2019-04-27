// Get quiz score
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');

$("#showscore").removeClass();
$('#showscore').text('your score : ' + score);
if (score >= 0.5) {
    $('.Congrat').text('congratulations you passed your exam');
    $('#showscore').addClass('fas fa-thumbs-up text-success');
} else {
    $('.Congrat').text('unfortunately you failed your exam');
    $('#showscore').addClass('fas fa-thumbs-down text-danger');
}


