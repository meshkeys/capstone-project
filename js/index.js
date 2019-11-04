const selectedQuestion= qandA.sort(() => {
     return (Math.random() - Math.random())}).slice(0, 6);
let score = 0;
let questionIndex = 0;

const gradeQuestion = (ans) => {
    if (ans == selectedQuestion[questionIndex].answer) {
        score += 5;
    }
    questionIndex += 1;
}
const renderSuccess = () => {
    $('.question-number').text('');
    $('.question').text('');
    $('.option1').text('');
    $('.option2').text('');
    $('.option3').text('');
    $('.option4').text('');
    if (score >= 15) {
        $('<p>Healthy Food Sense</p>').appendTo('.question')
        $('<iframe src="https://giphy.com/embed/3o7abKhOpu0NwenH3O" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spongebob-cartoon-nickelodeon-thumbs-3o7abKhOpu0NwenH3O">via GIPHY</a></p>').appendTo('.question-option')
    } else {
        $('<p>You can do better</p>').appendTo('.question')
        $('<iframe src="https://giphy.com/embed/26xBKqeFFspRZjDTW" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rosewood-fox-tv-26xBKqeFFspRZjDTW">via GIPHY</a></p>').appendTo('.question-option')
    };
    $('.question').text(`You scored ${score}!`);
    let viewSpace = $('.question-option')
    gif.appendTo(viewSpace);
}
const renderQuestion = (qIndex) => {
 let question = selectedQuestion[qIndex];
 $('.question-number').text('question ' + (qIndex + 1));
 $('.question').text(question.question);
 $('.option1').text('');
 $('.option2').text('');
 $('.option3').text('');
 $('.option4').text('');
  question.option.forEach((element, i) => {
    let opt = '.option' + (i + 1);
    let radioBut = $('<input type="radio" name="answer" value=' + element + ' />');
    let radioLabel = $('<label for=' + element + '>' + element + '</label>');
    radioBut.appendTo(opt);
    radioLabel.appendTo(opt);
  });  
  $("input:radio[name='answer']").click(function(){
    // grade question
    gradeQuestion(this.value);
    if(questionIndex == (selectedQuestion.length)) {
        renderSuccess();
    } else {
    // render the next question
    renderQuestion(questionIndex);
    }
    })
}
$( document ).ready(function() {
    renderQuestion(questionIndex);
});