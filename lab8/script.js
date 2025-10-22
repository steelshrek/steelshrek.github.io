const pattern=/[A-Z А-ЯІЇЄ][A-Za-zА-ЯІіЇїЄєа-я]*/;
document.getElementById('input').addEventListener('keydown',function(event){
    if(event.key==='Enter'&&pattern.test(document.getElementById('input').value))
        {document.getElementById('User').innerText=document.getElementById('input').value;}
})
let userScore=0;
let computerScore=0;
function func()
{
    if(document.getElementById('User').innerText!=="User")
    {
        let userNum=Math.floor(Math.random()*101);
        let compNum=Math.floor(Math.random()*101);
        document.getElementById('userNumber').innerText=userNum;
        document.getElementById('computerNumber').innerText=compNum;
        if(compNum>userNum)computerScore++;
        else if(compNum<userNum)userScore++;
        else {userScore++;computerScore++;}
        document.getElementById('userPoint').innerText=userScore;
        document.getElementById('computerPoint').innerText=computerScore;
    }
    if(userScore===3||computerScore===3){userScore=0;computerScore=0;}
}
document.getElementById('generate').addEventListener('click',func);