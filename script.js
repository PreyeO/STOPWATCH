//define variables
let seconds= 0;
let minutes= 0;
let hours=0;
//define variables to hold timer values
let showSeconds=0;
let showMinutes=0;
let showHours=0;
//var to hold setIntervals
let interval= null;
//how to know when to increase next value.
function stopWatch() {

  seconds++;

if(seconds / 60=== 1) {
    seconds= 0;
    minutes++;

     if(minutes / 60===1) {
    minutes= 0;
    hours++;
   }
  }
 

/*To add additional digit if seconds/minutes/hours are only one digit, we use toString.toString returns a string rep a specified number*/
if (seconds< 10) {
  showSeconds= "0" + seconds.toString();
  }

  else{
    showSeconds=seconds;
  }
  if (minutes< 10) {
    showMinutes= "0" + minutes.toString();
  }
  else{
    showMinutes=minutes;
  }

  if (hours< 10) {
    showHours= "0" + hours.toString();
  }
  else{
      showHours=hours;
  }
    document.getElementById("time").innerHTML= showHours + ":" +  showMinutes + ":" + showSeconds;
}

function startStop() {
  if (status === "stopped") {
    /*setInterval() executes/call afunction with a fixed delay btwn each call. it is canceled by using clearInterval()*/
    interval= window.setInterval(stopWatch, 1000); 
    document.getElementById("startStop").innerHTML= "Stop" ;
    status= "started";
  }
  else{
    window.clearInterval(interval); 
    document.getElementById("startStop").innerHTML= "Start" ;
    status= "stopped";
  }
   
};

function reset() {
  window.clearInterval(interval); 
  seconds=0;
  minutes=0;
  hours=0;
    document.getElementById("time").innerHTML= "00:00:00"
    document.getElementById("startStop").innerHTML= "Start";
}
function sets() {
  window.clearInterval(interval); 
  seconds=0;
  minutes=0;
  hours=0;
    document.getElementById("time").innerHTML= "00:00:00"
    document.getElementById("container")
    alert("Thank You!");
}

