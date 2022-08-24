let texto1 = document.getElementById('texto1');
let texto2 = document.getElementById('texto2');
let scoreDisplay = document.getElementById('score');
let body = document.querySelector('body');
let arrows = document.getElementById('click')
let arrows2 = document.getElementById('click2')
let croot = document.querySelector(':root');
let moon = document.getElementById('moon')
let number1 = makeCalc()
let number2 = makeCalc()
let res1 = Math.floor(eval(number1));
let res2 = Math.floor(eval(number2));
let popup = document.getElementById('popup')
let score = 0;
let boolean = false;

let cosas = {
    'texto1': number1,
    'texto2': number2, 
    'numero': res1,
    'numero2': res2,
} 

function openPopup(){
    popup.classList.add('openPopup');
}

function closePopup(){
    popup.classList.remove('openPopup');
}

function changeTheme(){
    if(boolean === false){
        let sec = 1
        croot.style.setProperty('--firstDark', '#e8e8e8')
        croot.style.setProperty('--secondDark', '#fafafa')
        body.style.animation = 'dtl 1s ease-in-out forwards'
        moon.classList.remove('fa-sun')
        moon.classList.add('fa-moon')
        moon.style.animation = 'themeChange 1s ease-in-out'
        croot.style.setProperty('--shadow', '#fdd5dc')
        setInterval(function(){
            sec--
            if(sec == 0){
                moon.style.animation = 'none'
            }
        }, 1000)
        arrows.classList.add('lightArrows')
        arrows2.classList.add('lightArrows')
        boolean = true;
    }
    
    else{
        let sec = 1
        croot.style.setProperty('--firstDark', '#1e1e1e')
        croot.style.setProperty('--secondDark', '#242424')
        body.style.animation = 'ltd 1s ease-in-out forwards'
        moon.classList.add('fa-sun')
        moon.classList.remove('fa-moon')
        moon.style.animation = 'themeChange 1s ease-in-out'
        croot.style.setProperty('--shadow', '#281517')
        setInterval(function(){
            sec--
            if(sec == 0){
                moon.style.animation = 'none'
            }
        }, 1000)
        arrows.classList.remove('lightArrows')
        arrows2.classList.remove('lightArrows')
        arrows.classList.add('arrows')
        arrows2.classList.add('arrows')
        boolean = false;
    }
}

function reDisplay(){
    number1 = makeCalc();
    number2 = makeCalc();
    res1 = Math.floor(eval(number1));
    res2 = Math.floor(eval(number2));
    cosas.numero = number1;
    cosas.numero2 = number2;
    texto1.innerHTML = cosas.numero;
    texto2.innerHTML = cosas.numero2;
}

function reset(){
    score = 0;
    scoreDisplay.innerHTML = score;
    reDisplay();
}

function higher(){
    if (res1 >= res2){
        score++;
        scoreDisplay.innerHTML = score;
        texto1.innerHTML = cosas.texto1;
        texto2.innerHTML = cosas.texto2;
        reDisplay();
    }
    else{
        reset();
    }
}

function lower(){
    if (res1 <= res2){
        score++;
        scoreDisplay.innerHTML = score;
        texto1.innerHTML = cosas.texto1;
        texto2.innerHTML = cosas.texto2;
        reDisplay();
    }
    else{
        reset();
    }
}

function makeCalc(){
    let numstart = Math.round(Math.random() * 10);
    let start = numstart.toString();
    let firstSymbol = Math.round(Math.random() * 3 + 1);
    let secondStep = start

    if(firstSymbol == 1){
        secondStep = start.concat('+')
    }

    else if(firstSymbol == 2){
        secondStep = start.concat('-')
    }

    else if(firstSymbol == 3){
        secondStep = start.concat('*')
    }
    
    else if(firstSymbol == 4){
        secondStep = start.concat('/')
    }

    let sNumbermath = Math.round(Math.random() * 10)
    let sNumber = sNumbermath.toString();
    let thirdStep = secondStep.concat(sNumber);
    let forthStep = thirdStep
    let secondSymbol = Math.round(Math.random() * 3 + 1);
    
    if(secondSymbol == 1){
        forthStep = thirdStep.concat('+')
    }

    else if(secondSymbol == 2){
        forthStep = thirdStep.concat('-')
    }

    else if(secondSymbol == 3){
        forthStep = thirdStep.concat('*')
    }
    
    else if(secondSymbol == 4){
        forthStep = thirdStep.concat('/')
    }

    let thirdNumberMath = Math.round(Math.random() * 10)
    let thirdNumber = thirdNumberMath.toString();
    let lastStep = forthStep.concat(thirdNumber);;
    return lastStep;
}

makeCalc();

reDisplay();
