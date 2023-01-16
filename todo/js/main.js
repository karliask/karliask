/* Custom Dragula JS */
dragula([
    document.getElementById("to-do"),
    document.getElementById("doing"),
    document.getElementById("done"),
    document.getElementById("trash")
  ]);
  removeOnSpill: false
    .on("drag", function (el) {
      el.className.replace("ex-moved", "");
    })
    .on("drop", function (el) {
      el.className += "ex-moved";
    })
    .on("over", function (el, container) {
      container.className += "ex-over";
    })
    .on("out", function (el, container) {
      container.className.replace("ex-over", "");
    });
  
  function addTask() {
    var inputTask = document.getElementById("taskText").value;
    if(inputTask != null && inputTask != undefined && inputTask != " " && inputTask != "") {
        let li = document.createElement("li");
        let p = document.createElement("p");
        let ball = document.createElement("div");
        let ballCount = 0;
        li.classList.add('task');
        p.innerHTML = inputTask;
        li.appendChild(p);
        ball.classList.add('ball');
        li.appendChild(ball);
        document.getElementById("to-do").appendChild(li);

        li.addEventListener('mouseenter', () => {
          ball.style.opacity = "1";
        })

        li.addEventListener('mouseleave', () => {
          ball.style.opacity = "0";
        })

        ball.addEventListener('click', () => {
          if(ballCount == 0){
            updateColors('#ff4444', ball, li)
            ballCount = 1
          }
          
          else if(ballCount == 1){
            updateColors('#ff872f', ball, li)
            ballCount = 2
          }

          else if(ballCount == 2){
            updateColors('#13a4d9', ball, li)
            ballCount = 3
          }

          else if(ballCount == 3){
            updateColors('#f292c7', ball, li)
            ballCount = 4
          }

          else if(ballCount == 4){
            updateColors('white', ball, li)
            ballCount = 0
          }
        })
        document.getElementById("taskText").value = "";
    }
    else{
        return
    }
  }

  function updateColors(color, ball, li){
    ball.style.background = color
    li.style.border = `2px solid ${color}` 
  }
  
  function emptyTrash() {
    document.getElementById("trash").innerHTML = "";
  }