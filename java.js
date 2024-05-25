let mainBody=document.querySelector('body');

let mainDiv=document.createElement('div');
mainBody.appendChild(mainDiv);
mainDiv.style.backgroundColor='blue';
mainDiv.style.width='400px';
mainDiv.style.display='flex';
mainDiv.style.flexWrap='Wrap';

let mainInput=document.createElement('input');
mainDiv.appendChild(mainInput);
mainInput.style.width='400px';
mainInput.style.height='50px';

let buttons=[];
let buttonsNum=[7,8,9,'-',4,5,6,'+',1,2,3,'='];

    for (let i=0;i<12;i++){
        buttons[i]=document.createElement('button');
        mainDiv.appendChild(buttons[i]);
        buttons[i].textContent=buttonsNum[i]
        buttons[i].style.width='100px';
        buttons[i].style.height='50px';   
    };
    
for(let e=0;e<3;e++){
    buttons[e].addEventListener('click',function(){
        mainInput.value+=buttonsNum[e];
    })
    
};
for(let e=4;7>e;e++){
    buttons[e].addEventListener('click',function(){
        mainInput.value+=buttonsNum[e];
    })
};
for(let e=8;11>e;e++){
    buttons[e].addEventListener('click',function(){
        mainInput.value+=buttonsNum[e];
    })
};

window.addEventListener('keyup',function(value){
    if(value.key=='7'){
    mainInput.value+=buttonsNum[0];
    }else if(value.key=='8'){
        mainInput.value+=buttonsNum[1];
    }else if(value.key=='9'){
        mainInput.value+=buttonsNum[2];
    }else if(value.key=='4'){
        mainInput.value+=buttonsNum[4];
    }else if(value.key=='5'){
        mainInput.value+=buttonsNum[5];
    }else if(value.key=='6'){
        mainInput.value+=buttonsNum[6];
    }else if(value.key=='1'){
        mainInput.value+=buttonsNum[8];
    }else if(value.key=='2'){
        mainInput.value+=buttonsNum[9];
    }else if(value.key=='3'){
        mainInput.value+=buttonsNum[10];
    }
})