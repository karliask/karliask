let label = document.getElementById("label");
let numbers = [1, 2, 3, 4];

let randomNumber = numbers[Math.floor(Math.random() * numbers.length)]; 
console.log(randomNumber)

if(randomNumber == 1){
    label.innerHTML = "Argentinian";
}

else if(randomNumber == 2){
    label.innerHTML = "Furry";
}

else if(randomNumber == 3){
    label.innerHTML = "Gamer";
}

else if(randomNumber == 4){
    label.innerHTML = "Web Developer";
}