const pattern=/[А-Яа-яІіЇїЄє]/;
let dict=[{ en: "always", ua: "завжди",is:0 }, { en: "never", ua: "ніколи",is:0 }, { en: "sometimes", ua: "іноді",is:0 }, { en: "usually", ua: "зазвичай",is:0 }, { en: "often", ua: "часто",is:0 }, { en: "rarely", ua: "рідко", is:0 }, { en: "happy", ua: "щасливий", is:0 }, { en: "sad", ua: "сумний", is:0 }, { en: "beautiful", ua: "гарний", is:0 }, { en: "strong", ua: "сильний",is:0}];
dict.sort(function(a,b){return Math.random()-0.5;});
let index=0;
let correctAns=0;
let wrongAns=0;
$("#word").text(dict[index].en);
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
