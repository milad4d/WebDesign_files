let inputOne=document.querySelector("input[name=inputOne]");
let body=document.querySelector('body');

inputOne.addEventListener('keyup',function(){
    let x=this.value.length;
    setTimeout(function(){
        inputOne.value = inputOne.value.trimEnd();
    },2000)
    if(x > 10){
        this.style.borderColor = 'red';

    }
    else{
        this.style.borderColor = 'initial'
    }

})

