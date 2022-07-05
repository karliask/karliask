const resultLabel = document.getElementById('resultLabel');
let first = 1
let second = 2
let counter = 0
let num = [first, second]
let type1 = "Si"
let type2 = "No"
let button = document.getElementById('change');

function Randomizer(){
    let firstRes = Math.floor(Math.random() * 2 + 1)
    let secondRes = Math.floor(Math.random() * 2 + 1)
    let thirdRes = Math.floor(Math.random() * 2 + 1)
    console.log(firstRes, secondRes, thirdRes)

    if(firstRes == 2 && secondRes == 2 || firstRes == 2 && thirdRes == 2 || secondRes == 2 && thirdRes == 2 || firstRes == 2 && secondRes == 2 && thirdRes == 2){
    {
        resultLabel.innerHTML = type1
    }
    }    
    else{
        resultLabel.innerHTML = type2
    }

}

function con(){
    console.log('EL PEPEEEEEEEEEEEEE')
}


function checker(){
    if(counter == 0){
        type1 = "A"
        type2 = "B"
        Randomizer()
        counter++
    }
    else{
        type1 = "Si"
        type2 = "No"
        Randomizer()
        counter--
    }
    console.log(counter)
}
