function createKarliask() { 
    var karliask = new Person();

    karliask.setName("karliask");
    karliask.setBio("dev @seesonss, dev @Peereira7 mod @ Team Heretics");
    karliask.setNicknames(["karliask", "karl"]);
    karliask.setLocation("Ciudad Autonoma de Buenos Aires, Argentina");

    /* spending my time on */
    karliask.addActivity({ name: "100DaysOfCode", link: "https://discord.gg/peereira7" });
    karliask.addActivity({ name: "Personal Projects"});
    karliask.addActivity({ name: "Team Heretics", role: "mod", link: "https://discord.gg/teamheretics" });
    karliask.addJob({ name: "seesonss", role: "dev", link: "https://discord.gg/seesonss" });
    karliask.addJob({ name: "danoninomb.es", role: "dev", link: "https://danoninomb.es" });

    /* contact me on */
    karliask.addContact({ name: "discord", link: "https://twitter.com/danonino_mb" });
    karliask.addContact({ name: "steam", link: "https://discord.gg/user/danonino.mb ツ" });
    karliask.addContact({ name: "instagram", link: "https://instagram.com/danonino.mb" });
    karliask.addContact({ name: "twitter", link: "https://github.com/danonino-mb" });
}

// Make the DIV element draggable:

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
    
    console.log("funca2")
}