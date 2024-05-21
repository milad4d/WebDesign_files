let mainBody=document.querySelector('body');




let container=document.createElement('div');
    container.style.display='flex';
    container.style.width='400px';
    // container.style.height='200px';
    container.style.flexDirection='column';
    container.style.backgroundColor='blue';
    mainBody.appendChild(container);



let mainInput=document.createElement('input');
    container.appendChild(mainInput);
    mainInput.style.width='400px';
    mainInput.style.height='20px';



let subContainer1=document.createElement('div');
    subContainer1.style.display='flex';
    subContainer1.style.width='400px';
    // subContainer1.style.height='100px';
    subContainer1.style.flexDirection='row';
    container.appendChild(subContainer1);


let button7=document.createElement('button');
    subContainer1.append(button7);
    button7.style.width='100px';
    button7.style.height='40px';
    button7.innerText='7';

    let button8=document.createElement('button');
    subContainer1.append(button8);
    button8.style.width='100px';
    button8.style.height='40px';
    button8.innerText='8';

    let button9=document.createElement('button');
    subContainer1.append(button9);
    button9.style.width='100px';
    button9.style.height='40px';
    button9.innerText='9';

    let sumButton=document.createElement('button');
    subContainer1.append(sumButton);
    sumButton.style.width='100px';
    sumButton.style.height='40px';
    sumButton.innerText='+';

    let subContainer2=document.createElement('div');
    subContainer2.style.display='flex';
    subContainer2.style.width='400px';
    // subContainer2.style.height='100px';
    subContainer2.style.flexDirection='row';
    container.appendChild(subContainer2);

    let button4=document.createElement('button');
    subContainer2.append(button4);
    button4.style.width='100px';
    button4.style.height='40px';
    button4.innerText='4';

    let button5=document.createElement('button');
    subContainer2.append(button5);
    button5.style.width='100px';
    button5.style.height='40px';
    button5.innerText='5';

    let button6=document.createElement('button');
    subContainer2.append(button6);
    button6.style.width='100px';
    button6.style.height='40px';
    button6.innerText='6';

    let minusButton=document.createElement('button');
    subContainer2.append(minusButton);
    minusButton.style.width='100px';
    minusButton.style.height='40px';
    minusButton.innerText='-';



    let subContainer3=document.createElement('div');
    subContainer3.style.display='flex';
    subContainer3.style.width='400px';
    // subContainer2.style.height='100px';
    subContainer3.style.flexDirection='row';
    container.appendChild(subContainer3);

    let button1=document.createElement('button');
    subContainer3.append(button1);
    button1.style.width='100px';
    button1.style.height='40px';
    button1.innerText='1';
    button1.setAttribute('data-amount',1);

    let button2=document.createElement('button');
    subContainer3.append(button2);
    button2.style.width='100px';
    button2.style.height='40px';
    button2.innerText='2';

    let button3=document.createElement('button');
    subContainer3.append(button3);
    button3.style.width='100px';
    button3.style.height='40px';
    button3.innerText='3';

    let equalButton=document.createElement('button');
    subContainer3.append(equalButton);
    equalButton.style.width='100px';
    equalButton.style.height='40px';
    equalButton.innerText='=';


    let mainOutput=document.createElement('input');
    container.appendChild(mainOutput);
    mainOutput.style.width='400px';
    mainOutput.style.height='20px';


button1.addEventListener('click',function(){
    mainInput.value+='1';
});
button2.addEventListener('click',function(){
    mainInput.value+='2';
});
button3.addEventListener('click',function(){
    mainInput.value+='3';
});
button4.addEventListener('click',function(){
    mainInput.value+='4';
});
button5.addEventListener('click',function(){
    mainInput.value+='5';
});
button6.addEventListener('click',function(){
    mainInput.value+='6';
});
button7.addEventListener('click',function(){
    mainInput.value+='7';
});
button8.addEventListener('click',function(){
    mainInput.value+='8';
});
button9.addEventListener('click',function(){
    mainInput.value+='9';
});

let mem1=null;
let mem2=null;

sumButton.addEventListener('click',function(){
    mem1=mainInput.value;
    mainInput.value='';
});


equalButton.addEventListener('click',function(){
    mem2=mainInput.value;
    mainInput.value=parseInt(mem1)+parseInt(mem2);
    container.addEventListener('click',function(){
        mainInput.value='';
    })

})