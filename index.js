let questionList = [
    {
        question : "จะติดมหาลัยมั้ย",
        choiceList: [
            {
                choice: 'a',
                text: 'ติด'
            },
            {
                choice: 'b',
                text: 'ไม่ติด'
            },
            {
                choice: 'c',
                text: 'ติดมั้ง'
            },
            {
                choice: 'd',
                text: 'ไม่บอก'
            },
        ],
        correct : 'a'
    },
    // {
    //     question : "Is Team gay?",
    //     choiceList: [
    //         {
    //             choice: 'a',
    //             text: 'No'
    //         },
    //         {
    //             choice: 'b',
    //             text: 'Yes'
    //         },
    //         {
    //             choice: 'c',
    //             text: 'Mueng a gay'
    //         },
    //         {
    //             choice: 'd',
    //             text: 'Mai bok'
    //         },
    //     ],
    //     correct : 'a'
    // }
];

var currentQuestion = 0;


// window.addEventListener('DOMContentLoaded',() => {
//     console.log(questionList[0].question);
//     $('.question').text(questionList[0].question);
//     for(let i='a';i<='d';++i){
//         $('#')
//     }
//     $('#'+questionList[0].correct).attr("correct",1);
//     console.log($('#a').attr("correct"));
//     console.log($('#b').attr("correct"));
// });


// document.querySelectorAll('.choice').addEventListener('click', choiceClick);
let abcd = ['a','b','c','d']

function choiceClick () {
    let crt = questionList[currentQuestion].correct
    console.log(crt)
    // $('.choice[correct]').css('background-color', 'green');
    $(this).parent().children(':not([correct])').css('opacity',0)
    $('.choice' + crt).css({'background-color': 'green', 'opacity': 1})
    $('.choice' + crt).attr('correct',1)
    console.info(this)

    const isCorrect = typeof $(this).attr('correct') != 'undefined'

    console.info('isCorrect', isCorrect)

    if(!isCorrect){
        $(this).css({
            'background-color':'red',
            'opacity': 1
        });
        // $('#'+questionList[0].correct).css('background','green');
    }

    setTimeout(changeQuestion, 2000);

    for(let i of abcd){
        $('.choice' + i).off('click', choiceClick)
    }

}

function renderQuestion(){
    const question = questionList[currentQuestion]
    const choiceBlock = $('.choices')
    $('.question').text(question.question)
    let i = 0
    
    for(let choice of question.choiceList) {
        let choiceElem = $('<div>',{
            class: 'choice' + abcd[i],
            html: choice.text
        })
        
        // if(choice.choice == question.correct) {
        //     choiceElem.attr('correct', 1)
        // }
        
        choiceBlock.append(choiceElem)
        $('.choice' + abcd[i]).click(choiceClick)
        ++i
    }
    // for(let i;i<4;++i){
    //     $('.choice' + abcd[i]).click(choiceClick)
    // }
}

$(document).ready(function() {
    renderQuestion();
})

function changeQuestion() {
    console.info('hello change question')

    ++currentQuestion  
    if(currentQuestion == questionList.length){
        $('body').children().remove()
        $('body').append($('<div>',{
            html: "The end",
            id: 'end'
        }))
        return
    }

    const choiceBlock = $('.choices')
    choiceBlock.children().remove()
    renderQuestion();
}

// document.getElementById('a').addEventListener('click',() => {
//     if('a' == questionList[0].correct){
//         $('#a').css('background-color', 'green');
//     }
//     else{
//         $('#a').css('background-color', 'red');
//         $('#'+questionList[0].correct).css('background-color', 'green');
//         for(let i = 1;i <= 4; ++i){
//             let current = choices[i];
//             if(current == 'a' || i == questionList[0].correct){
//                 continue;
//             }
//             document.getElementById(current).style.opacity = 0;
//         }
//     }
// });
// document.getElementById('b').addEventListener('click',() => {
//     if('b' == questionList[0].correct){
//         $('#b').css('background-color', 'green');
//     }
//     else{
//         $('#b').css('background-color', 'red');
//         $('#'+questionList[0].correct).css('background-color', 'green');
//         for(let i = 1;i <= 4; ++i){
//             let current = choices[i];
//             if(current == 'b' || i == questionList[0].correct){
//                 continue;
//             }
//             document.getElementById(current).style.opacity = 0;
//         }
//     }
// });
// document.getElementById('c').addEventListener('click',() => {
//     if('c' == questionList[0].correct){
//         $('#c').css('background-color', 'green');
//     }
//     else{
//         $('#c').css('background-color', 'red');
//         $('#'+questionList[0].correct).css('background-color', 'green');
//         for(let i = 1;i <= 4; ++i){
//             let current = choices[i];
//             if(current == 'c' || i == questionList[0].correct){
//                 continue;
//             }
//             document.getElementById(current).style.opacity = 0;
//         }
//     }
// });
// document.getElementById('d').addEventListener('click',() => {
//     if('d' == questionList[0].correct){
//         $('#d').css('background-color', 'green');
//     }
//     else{
//         $('#d').css('background-color', 'red');
//         $('#'+questionList[0].correct).css('background-color', 'green');
//         for(let i = 1;i <= 4; ++i){
//             let current = choices[i];
//             if(current == 'd' || i == questionList[0].correct){
//                 continue;
//             }
//             document.getElementById(current).style.opacity = 0;
//         }
//     }
// });

// console.log(questionList);