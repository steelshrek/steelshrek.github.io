const pattern=/[A-Z А-ЯІЇЄ][A-Za-zА-ЯІіЇїЄєа-я]*/;
document.getElementById('input').addEventListener('keydown',function(event){
    if(event.key==='Enter'&&pattern.test(document.getElementById('input').value))
        {document.getElementById('User').innerText=document.getElementById('input').value;}
})
let userScore=0;
let computerScore=0;
let counter=0;
let cards=['6.png','7.png','8.png','9.png','10.png','j.png','q.png','k.png','a.png'];
function func()
{
    if(document.getElementById('User').innerText!=="User")
    {
        let userCard=Math.floor(Math.random()*cards.length);
        let compCard=Math.floor(Math.random()*cards.length);
        let userNum=0;
        let computerNum=0;
        document.getElementById('usCardImg').setAttribute('src',cards[userCard]);
        document.getElementById('compCardImg').setAttribute('src',cards[compCard]);
        switch(cards[userCard])
        {
            case '6.png':
                userNum=6;
                break;
            case '7.png':
                userNum=7;
                break;
            case '8.png':
                userNum=8;
                break;
            case '9.png':
                userNum=9;
                break;
            case '10.png':
                userNum=10;
                break;
            case 'j.png':
                userNum=2;
                break;
            case 'q.png':
                userNum=3;
                break;
            case 'k.png':
                userNum=4;
                break;
            case 'a.png':
                userNum=11;
                break;
        }
        switch(cards[compCard])
        {
            case '6.png':
                computerNum=6;
                break;
            case '7.png':
                computerNum=7;
                break;
            case '8.png':
                computerNum=8;
                break;
            case '9.png':
                compNum=9;
                break;
            case '10.png':
                computerNum=10;
                break;
            case 'j.png':
                computerNum=2;
                break;
            case 'q.png':
                computerNum=3;
                break;
            case 'k.png':
                computerNum=4;
                break;
            case 'a.png':
                computerNum=11;
                break;
        }
        userScore+=userNum;
        computerScore+=computerNum;
        document.getElementById('userPoint').innerText=userScore;
        document.getElementById('computerPoint').innerText=computerScore;
        counter++;
        document.getElementById('counter').innerText=counter;
    }
    if(counter>=3){
        if(Number(document.getElementById('userPoint').innerText)>Number(document.getElementById('computerPoint').innerText))
            {document.getElementById('middle').innerHTML+='<b>You are winner</b>'}
        if(Number(document.getElementById('userPoint').innerText)<Number(document.getElementById('computerPoint').innerText))
            {document.getElementById('middle').innerHTML+='<b>Computer is winner</b>'}
        if(Number(document.getElementById('userPoint').innerText)==Number(document.getElementById('computerPoint').innerText))
            {document.getElementById('middle').innerHTML+='<b>Tie</b>'}
    
    }
}
document.getElementById('generate').addEventListener('click',func);
