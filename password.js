const uppercase=document.getElementById("uppercase");
const lowercase=document.getElementById("lowercase");
const numbers=document.getElementById("numbers");
const symbols=document.getElementById("symbols");
const result=document.getElementById("pass");

const vallow="abcdefghijklmnopqrstuvwxyz";
const valup=vallow.toUpperCase();
const valnum="0123456789";
const valsym="!@#$%^&*()";

let length=10;


function generate(){

    let password="";
    let finalpass="";

    if(uppercase.checked){
        password+=valup;
    }
    if(lowercase.checked){
        password+=vallow;
    }
    if(numbers.checked){
        password+=valnum;
    }
    if(symbols.checked){
        password+=valsym;
    }

    for(let i=0;i<length;i++){
        let randomIndex=Math.floor(Math.random()*password.length);
        finalpass+=password.charAt(randomIndex);
        
        }

    result.textContent=finalpass;

    
}





