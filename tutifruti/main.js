const letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o' , 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '}'
];
let randomNumber

if(randomNumber == null || randomNumber == "" || randomNumber == undefined){
    setEditable('false')
}

function returnLetter(){
    randomNumber = Math.floor(Math.random() * 26)
    document.getElementById('labelLetter').innerText = letters[randomNumber]
    var labels = document.querySelectorAll(".escribir");
    for (var i = 0; i < labels.length; i++) {
        var str = labels[i].innerHTML = letters[randomNumber]
        labels[i].innerHTML = str;
    }

    setEditable('true')
}

function setLetter(){
    let WrittenLetter = document.getElementById('letterWrite').value
    var labels = document.querySelectorAll(".escribir");
    for (var i = 0; i < labels.length; i++) {
        var str = labels[i].innerHTML = WrittenLetter
        labels[i].innerHTML = str;
    }
    setEditable('true')
}

function setEditable(bool){
    var labels = document.querySelectorAll(".palabra");
    for (var i = 0; i < labels.length; i++) {
        labels[i].contentEditable = bool;
    }
}

var audio = new Audio('elegivos.mp3');

/* 
window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('so').focus()
    }
})
 */