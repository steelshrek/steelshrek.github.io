let easyDict = [{ en: "cat", ua: "кіт", is: 0 }, { en: "dog", ua: "собака", is: 0 }, { en: "sun", ua: "сонце", is: 0 }, { en: "book", ua: "книга", is: 0 }, { en: "water", ua: "вода", is: 0 }, { en: "school", ua: "школа", is: 0 }, { en: "food", ua: "їжа", is: 0 }, { en: "car", ua: "машина", is: 0 }, { en: "friend", ua: "друг", is: 0 }, { en: "home", ua: "дім", is: 0 }];
let medDict=[ { en: "journey", ua: "подорож", is: 0 }, { en: "decision", ua: "рішення", is: 0 }, { en: "dangerous", ua: "небезпечний", is: 0 }, { en: "comfortable", ua: "зручний", is: 0 }, { en: "beautiful", ua: "гарний", is: 0 }, { en: "strong", ua: "сильний", is: 0 }, { en: "important", ua: "важливий", is: 0 }, { en: "problem", ua: "проблема", is: 0 }, { en: "weather", ua: "погода", is: 0 }, { en: "usually", ua: "зазвичай", is: 0 } ];
let hardDict=[{ en: "achievement", ua: "досягнення", is: 0 }, { en: "responsibility", ua: "відповідальність", is: 0 }, { en: "consequence", ua: "наслідок", is: 0 }, { en: "determination", ua: "рішучість", is: 0 }, { en: "opportunity", ua: "можливість", is: 0 }, { en: "environment", ua: "довкілля", is: 0 }, { en: "development", ua: "розвиток", is: 0 }, { en: "relationship", ua: "стосунки", is: 0 }, { en: "knowledge", ua: "знання", is: 0 }, { en: "improvement", ua: "покращення", is: 0 }];
let dict;
let difficulty;
let index=0;
let correctAns=0;
let wrongAns=0;
const pattern=/[А-Яа-яІіЇїЄє]/;
$(".difficulty").keydown(function(event)
{
    if(event.key==='Enter')
        {
            difficulty=($("input[name='difficulty']:checked").val());
            if(difficulty=='easy')
                {dict=easyDict;}
            else if(difficulty=='medium')
                {dict=medDict;}
            else
                {dict=hardDict;}
            $(".difficulty").css("display","none");
            $(".card").css("display","block");
            index = 0;
            correctAns = 0;
            wrongAns = 0; 
            dict.sort(function(a,b){return Math.random()-0.5;});
            $("#word").text(dict[index].en);
        }
})
$("#answer").keydown(
function(event)
    {
    if(event.key==='Enter'&&pattern.test($("#answer").val())&&dict[index].is==0)
        isCorrect($("#answer").val());
    });
$(function(){
$("#next").on('click',()=>nextPast(1));
$("#prev").on('click',()=>nextPast(-1));
});
function isCorrect(answer)
{
    if($("#answer").val().toLowerCase()===dict[index].ua)
        {
            dict[index].is=1;
            color();
            correctAns++;
            $("#correctCount").text(correctAns);
        }
    else
    {
        dict[index].is=-1;
        color();
        wrongAns++;
        $("#wrongCount").text(wrongAns);
    }


    if (correctAns+wrongAns==10)
        {
            if(correctAns<3)
                {
                    alert("You have very bad English");
                }
            else if(correctAns>3&&correctAns<5)
                {
                    alert("You have to train your English");
                }
            else if(correctAns>5&&correctAns<8)
            {
                alert("You have not bad level of English");
            }
            else if(correctAns>=8)
                {
                    alert("You have exelent level of English");
                }
        }
}
function color(){
    if(dict[index].is==-1){
        $(".card").css("box-shadow","0 6px 10px rgba(255, 0, 0, 0.54)");
    }
    else if(dict[index].is==0)
        {
            $(".card").css("box-shadow","0 6px 10px rgba(0, 0, 0, 0.54)");
        }
    else if(dict[index].is==1)
    {
        $(".card").css("box-shadow","0 6px 10px rgba(0, 255, 0, 0.54)");
    }
}
function nextPast(to)
{
if (index+to<0){
    index=9;
}
else if(index+to>=10)
{
    index=0;   
}
else{
index+=to;
}
$("#word").text(dict[index].en);
color();
$("#answer").val("");
$("#index").text(index+1);
}
