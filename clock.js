const set=document.getElementById("time");

function getTime(){
const rn=new Date();
const hours=rn.getHours().toString().padStart(2,"0");
const mins=rn.getMinutes().toString().padStart(2,"0");
const secs=rn.getSeconds().toString().padStart(2,"0");
let time=`${hours}:${mins}:${secs}`;
set.textContent=time;
}

setInterval(getTime,1000);

