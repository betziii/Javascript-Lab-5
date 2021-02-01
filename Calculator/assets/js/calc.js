var num;

var amount;
let service;
var result = 0;
const resu = document.getElementById('rasu').innerHTML;
let pa = document.getElementById('p');
console.log(pa);
const subBtn = document.querySelector('#res');
const divBtn = document.querySelector('#dive');
subBtn.addEventListener('click', sub);
divBtn.addEventListener('click', devide);
function sub(){
    
    let num1 = Number(document.getElementById('fnum').value);
    let num2 = Number(document.getElementById('snum').value);
    result = num1 - num2;
    pa.innerHTML = (result).toString();
    }
function devide(){
    let num1 = Number(document.getElementById('fnum').value);
    let num2 = Number(document.getElementById('snum').value);
    result = num1 / num2;
    pa.innerHTML = (result).toString();
    }
