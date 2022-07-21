const terminal = document.getElementById("terminal");
const body = document.querySelector("body");
const a = document.querySelector("a");

function closemin(){
    terminal.style.animation = "animopen 0.1s linear forwards";
    body.style.userSelect = "none";
    let sec = 3;
    setInterval(function() {
          sec--;
          if (sec == -1) {
            window.location.reload()
          }
        }, 1000);
}

function minimize(){
  terminal.style.animation = "animmin 0.1s linear forwards";
  body.style.userSelect = "none";
  let sec = 3;
  setInterval(function() {
        sec--;
        if (sec == -1) {
          window.location.reload()
        }
      }, 1000);
}

function log2(){
    terminal.style.animation = "shake 0.75s ease-in-out";
    let sec = 1;
    setInterval(function() {
          sec--;
          if (sec == -1) {
            terminal.removeAttribute("style");
          }
        }, 1000);
    
}
