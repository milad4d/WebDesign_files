

let mainDiv=document.querySelector("#mainDiv");
let body=document.querySelector('body');

mainDiv.addEventListener('click', () => {mainDiv.style.backgroundColor = 'red'})


body.innerHTML+= 'hey buddy';

let testInterval = setInterval(function(){
    body.innerHTML+= 'salam'
},2000);

setTimeout(function(){
    clearInterval(testInterval)
},10000);