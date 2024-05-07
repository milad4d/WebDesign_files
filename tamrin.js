let inputOne=document.querySelector("input[name=inputOne]");

inputOne.addEventListener('keyup',function(){
    let x=this.value.length;
    setTimeout(function(){
        this.value = this.value.trim();
    },1000)
    if(x > 10){
        this.style.borderColor = 'red';

    }
    else{
        this.style.borderColor = 'initial'
    }

})