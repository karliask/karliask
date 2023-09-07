let lagegariable = [
  "Tema facha",
  "Zoro y Sanji peleando",
  "Franky Super",
  "Chopper siendo tierno",
  "Shanks Aparece",
  "Risa funky",
  '"OE LUFFY"',
  "Sanji siendo simp",
  "Robin humor negro",
  "Usopp mintiendo",
  "Luffy siendo goofy",
  "Uso de un gear",
  "Sanji prende un cigarrillo",
  "Cara funky",
  "Personaje llorando",
  "Cara de daniel",
  "Luffy Stuffing",
  "Zoro usa el Santoryu",
  "Un mugiwara siendo una inconveniencia",
  "Flashback",
  "Comically large chichon",
  "Luffy ataca a alguien sabiendo muy bien que no le va a hacer nada",
  '"Choppa"',
  "Pandaman/Doskoi Panda",
  "Subtrama",
  "Personaje deforme",
  "Referencia",
  "Zoro perdiendose",
  "Momos",
  "Epic Gaming Moment",
  "Fruta del Diablo nueva"
]
let element = document.getElementById('card');
let children = element.children;


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(lagegariable)

function execute(){
  for(let i = 0; i < children.length; i++){
      let child = children[i]
      let bool = false
      child.addEventListener('click', () => {
        if(bool == false){
          bool = true;
          child.classList.add('marked');
        }
        else{
          bool = false;
          child.classList.remove('marked');
        }
        
      })
      if(i != 12){
        child.innerText = lagegariable[i];
      }
  }
}

execute()