// first

// let input1=document.querySelector('#input1');
// let input2=document.querySelector('#input2');
// let input3=document.querySelector('#input3');
// let btn=document.querySelector('#btn');
// let cont=document.querySelector('#cont');
// let span1=document.querySelector('#span1');
// let span2=document.querySelector('#span2');
// let span3=document.querySelector('#span3');
// let form = document.querySelector('#form')



//   input1.addEventListener('keyup',function(){
//     span1.textContent=input1.value;

// });
// input2.addEventListener('keyup',function(){
//     span2.textContent=input2.value;

// });
// input3.addEventListener('keyup',function(){
//     span3.textContent=input3.value;

// });
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     cont.style.backgroundColor = 'green'
// })

// second

// let inputs = document.querySelectorAll('input');
// let spans = document.querySelectorAll('span');


// for (let i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('keyup', function () {
//         spans[i].textContent = inputs[i].value;
//     })
// };



// third

function $(selector){
    if (selector[0]=='#'){
        return document.querySelector(selector);
    }
    return document.querySelectorAll(selector);
}
let output=$('#output')
let inputs =$('input');



inputs.forEach(function(input) {
    input.addEventListener('keyup',function(){
        $('#'+input.name+'output').textContent=this.value
    })
});

///////////////////////////////////////////////////////////

let newParageraph=document.createElement('p');
newParageraph.innerText='new Parageraph';
newParageraph.style.backgroundColor='red';
newParageraph.id='newParageraph';

let output2=document.querySelector('#cont');
output2.appendChild(newParageraph);

setTimeout(()=>output2.removeChild(newParageraph),3000)

