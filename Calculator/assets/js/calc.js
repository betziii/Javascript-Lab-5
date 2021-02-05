
var multiresult = 1;
var amount;
let service;
let result = 0;
const resu = document.getElementById('rasu').innerHTML;
let pa = document.getElementById('p');
let par = document.getElementById('par');
let para = document.getElementById('para');
console.log(pa);
const subBtn = document.querySelector('#res');
const divBtn = document.querySelector('#dive');
const addBtn = document.querySelector('#add');
const mulBtn = document.querySelector('#mult');
const maxBtn = document.querySelector('#max');
const minBtn = document.querySelector('#min');
const aveBtn = document.querySelector('#ave');
const squareBtn = document.querySelector('#square');
const sqrtBtn = document.querySelector('#sqrt');
subBtn.addEventListener('click', sub);
divBtn.addEventListener('click', devide);
addBtn.addEventListener('click', addition);
mulBtn.addEventListener('click', multiplication);
maxBtn.addEventListener('click', maximum);
minBtn.addEventListener('click', minimum);
aveBtn.addEventListener('click', average);
squareBtn.addEventListener('click', squares);
sqrtBtn.addEventListener('click', squareroot);
const reloadIcon = document.querySelector('.fa');
reloadIcon.addEventListener('click',reloadPage);
function reloadPage(){
    location.reload();
}

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
function addition(){
    let num = document.getElementById('num').value.toString();
    let arr = num.split(',');
    console.log(arr);
    arr.forEach(add);
        function add(item){
            result += Number(item);
            par.innerHTML = (result).toString();
        }

}
function multiplication(){
    let num = document.getElementById('num').value.toString();
    let arr = num.split(',');
    arr.forEach(multi);
        function multi(item){
            console.log(typeof(item));
            multiresult *= Number(item);
            par.innerHTML = (multiresult).toString();
            }
}
function maximum(){
    let num = document.getElementById('num').value.toString();
    let arr = num.split(',');
    console.log(arr);
    let max = arr[0];
            for (let i = 1; i < arr.length; ++i) {
                if (arr[i] > max) {
                  max = arr[i];
                }
              }
              par.innerHTML = (max).toString();  
}
function minimum(){
    let num = document.getElementById('num').value.toString();
    let arr = num.split(',');
    let min = arr[0];
            for (let i = 1; i < arr.length; ++i) {
                if (arr[i] < min) {
                  min = arr[i];
                }
              }
              par.innerHTML = (min).toString();
}
function average(){
    let num = document.getElementById('num').value.toString();
    let arr = num.split(',');
    console.log(arr);
    var tot = 0;
    for(var i = 0; i < arr.length; i++) {
        tot += Number(arr[i]);
    }
    console.log(tot);
    var avg = tot / arr.length;
    par.innerHTML = (avg).toString();

}
function squares(){
    let anum = document.getElementById('anum').value.toString();
    result = Math.pow(anum,2);
    para.innerHTML = (result).toString();
}
function squareroot(){
    let anum = document.getElementById('anum').value.toString();
    result = Math.sqrt(Number(anum));
    para.innerHTML = (result).toString();
                
}