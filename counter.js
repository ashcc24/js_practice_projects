const decr=document.getElementById("decr");
const reset=document.getElementById("reset");
const incr=document.getElementById("incr");
const counter=document.getElementById("counter");

let count=0;

incr.onclick = function(){
    count++;
    counter.textContent=count;
}

decr.onclick = function(){
    count--;
    counter.textContent=count;
}

reset.onclick = function(){
    count=0;
    counter.textContent=count;
}