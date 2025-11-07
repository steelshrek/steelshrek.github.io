const pattern=/[A-Z А-ЯІЇЄ][A-Za-zА-ЯІіЇїЄєа-я]*/;
document.getElementById('input').addEventListener('keydown',function(event){
    if(event.key==='Enter'&&pattern.test(document.getElementById('input').value))
        {document.getElementById('User').innerText=document.getElementById('input').value;}
})
let counter=0;
let fruits=['blueberry.png','cherry.png','lemon.png','nod.png','orange.png','pear.png','plum.png','raspberry.png'];
function func()
{
counter++;
document.getElementById('counter').innerText=counter;
for(let col of document.querySelectorAll('.column')){
    let colfruits=[...fruits];
    for (let element of col.querySelectorAll('.cell'))
        {
            let fruit=Math.floor(Math.random()*colfruits.length);
            element.querySelector('img').setAttribute('src',colfruits[fruit]);
            element.querySelector('img').style.display='block';
            colfruits.splice(fruit,1);
        }
    }
if((document.querySelector('#col1 > div:nth-child(1) > img').getAttribute('src')===document.querySelector('#col2 > div:nth-child(1) > img').getAttribute('src')&&document.querySelector('#col2 > div:nth-child(1) > img').getAttribute('src')===document.querySelector('#col3 > div:nth-child(1) > img').getAttribute('src'))
||(document.querySelector('#col1 > div:nth-child(2) > img').getAttribute('src')===document.querySelector('#col2 > div:nth-child(2) > img').getAttribute('src')&&document.querySelector('#col2 > div:nth-child(2) > img').getAttribute('src')===document.querySelector('#col3 > div:nth-child(2) > img').getAttribute('src'))
||(document.querySelector('#col1 > div:nth-child(3) > img').getAttribute('src')===document.querySelector('#col2 > div:nth-child(3) > img').getAttribute('src')&&document.querySelector('#col2 > div:nth-child(3) > img').getAttribute('src')===document.querySelector('#col3 > div:nth-child(3) > img').getAttribute('src')))
{
    document.querySelector('.info').innerHTML='<div><b>You are winner</b></div>';
}
if(counter>=3){ 
    document.querySelector('.info').innerHTML='<div><b>Better luck next time</b></div>';
}
}
document.getElementById('generate').addEventListener('click',func);
