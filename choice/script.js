const resultLabel = document.getElementById('resultLabel');
let second = 2
let counter = 0
let type1 = "Si"
let type2 = "No"
let button = document.getElementById('change');

function Randomizer(){
    let firstRes = Math.floor(Math.random() * 2 + 1)
    resultLabel.animate([
        {opacity: 0, marginBottom: "20px"},
        {opacity: 1, marginBottom: 0}
    ], {duration: 400})
    
    console.log(firstRes)

    if(firstRes == 1){
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
