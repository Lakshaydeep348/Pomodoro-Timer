const StartEl=document.getElementById("start");
const StopEl=document.getElementById("stop");
const ResetEl=document.getElementById("reset");
const timerEl=document.getElementById("timer");
const paraEl=document.getElementById("para");
let timeLeft=1500;
let interval;

function updateTimer()
{
    interval=setInterval(()=>{
        timeLeft--;
        if(timeLeft===0)
        {
           alert("Times up")
          resetTimer();
        }
        let minutes=Math.floor(timeLeft/60);
        let seconds=Math.floor(timeLeft%60);
        timerEl.innerHTML=`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
      } ,1000)
}
 function startTimer()
 {
  updateTimer();

 }
 function stopTimer()
 {
    clearInterval(interval);
    paraEl.innerHTML="";

 }
 function resetTimer()
 {
    clearInterval(interval);
    timeLeft=1500;
    timerEl.innerHTML="25:00";
    
 }
StartEl.addEventListener("click",startTimer);
StopEl.addEventListener("click",stopTimer);
ResetEl.addEventListener("click",resetTimer);