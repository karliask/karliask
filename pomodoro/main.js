const button = document.getElementById("start")
let timer = document.getElementById("timer")
const bar = document.getElementById("bar")
let num = 0
var minute = 0;
var sec = 0;

function play() {
  var audio = new Audio('Bell Ding Sound Effect (download).mp3');
  audio.play();
}



function recess(){
    minute = 4; // estaba en 4
    sec = 59;
    bar.style.animation =  'test 300s linear';
    let recessInterval = setInterval(function() {
      timer.innerHTML = minute + ":" + sec;
      timer.innerHTML.substring(1)
      sec--;
      if (sec == 9 || sec == 8 || sec == 7 || sec == 6 || sec == 5 || sec == 4 || sec == 3 || sec == 2 || sec == 1 || sec == 0){
        sec = "0" + sec;}
      if (sec == -1) {
        minute--;
        sec = 59;
      if (minute == -1) {
          play()
          work()
          clearInterval(recessInterval)
        }
      }
    }, 1000);
  }

function work(){
    minute = 24; //estaba en 24
    sec = 59;
    let workInterval = setInterval(function() {
      timer.innerHTML = minute + ":" + sec;
      timer.innerHTML.substring(1)
      sec--;
      if (sec == 9 || sec == 8 || sec == 7 || sec == 6 || sec == 5 || sec == 4 || sec == 3 || sec == 2 || sec == 1 || sec == 0){
        sec = "0" + sec;}
      if (sec == -1) {
        minute--;
        sec = 59;
      if (minute == -1) {
            play()
            recess()
            clearInterval(workInterval)
        }
      }
    }, 1000);
  }




function timerCheck(){
    if(num == 0){
        num++
        work()
        bar.style.animation =  'test 1500s linear';}
    else{
        num++
    }}


    document.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        timerCheck()
      }
    });
    