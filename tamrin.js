let inputOne=document.querySelector("input[name=inputOne]");

inputOne.addEventListener('keyup',function(){
    let x=this.value.length;
    setTimeout(function(){
        inputOne.value = inputOne.value.trimEnd();
    },1000)
    if(x > 10){
        this.style.borderColor = 'red';

    }
    else{
        this.style.borderColor = 'initial'
    }

})