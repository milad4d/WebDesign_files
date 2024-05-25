let mainDiv=document.querySelector('#mainDiv');
let coinNum=document.querySelector('#coinNum'); 
let coinEnergy=document.querySelector('#coinEnergy');
let coinImg=document.querySelector('#coinImg');
let coinBoost=document.querySelector('#coinBoost');
let boostText=document.querySelector('#boostText');
let reset=document.querySelector('#reset');


let main={
    number:0,
    energy:20,
};

setInterval(function(){
    main.energy+=1;
    coinEnergy.innerHTML=main.energy;
},500);
  
coinImg.addEventListener('click',function(){
    if(main.energy>2){
    main.number+=1;
    coinNum.innerHTML=main.number;
    main.energy-=3;
    coinEnergy.innerHTML=main.energy;
    coinImg.style.transform+='rotate(45deg)';
  }
    else{
        main.energy=1;
        coinEnergy.innerHTML=main.energy;
        alert('ENERGY IS LOW....PLEASE WAIT!!!!!')
    }
});

reset.addEventListener('click',function(){
    main.number=0;
    main.energy=20;
    coinNum.innerHTML=main.number;
    coinImg.style.transform='rotate(0deg)';
    boostText.textContent=''
});

coinBoost.addEventListener('click',function(){
    if(main.energy<50){
        main.energy+=100;
        coinEnergy.innerHTML=main.energy;
        boostText.textContent='Booooooost Completed!'
    }else{
        boostText.textContent='not now buddy:('
    }
  
})

