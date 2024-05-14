let input1=document.querySelector('#input1');
let input2=document.querySelector('#input2');
let input3=document.querySelector('#input3');
let btn=document.querySelector('#btn');
let cont=document.querySelector('#cont');
let span1=document.querySelector('#span1');
let span2=document.querySelector('#span2');
let span3=document.querySelector('#span3');
let form=document.querySelector('#form')



  input1.addEventListener('keyup',function(){
    span1.textContent=input1.value;

});
input2.addEventListener('keyup',function(){
    span2.textContent=input2.value;

});
input3.addEventListener('keyup',function(){
    span3.textContent=input3.value;

});
form.addEventListener('submit',function(e){
    e.preventDefault();
    cont.style.backgroundColor='green'
})