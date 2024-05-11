let x=['11','22','33'];

let mainDiv=document.querySelector("#mainDiv");
let counter=0;

    setInterval(function(){
        mainDiv.innerHTML=x[counter++];
        if(counter>x.length -1){
        counter=0;
        }
    },1000)





