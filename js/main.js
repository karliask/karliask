/*let spanish = {
    arg: "Orgullosa argentina",
    abt: "<b>Holaa, soy karliask</i> :D <br> Soy una desarrolladora web, gamer y furry. <br><br> Mas que nada juego roguelikes como Spelunky 2<br> o TBOI pero tambien juego Minecraft y Forager.<br><br>Siempre tengo mis MD abiertos, asi que no tengas miedo de decir hola!</b>"
}

let english = {
    arg: "Proud argentinian",
    abt: "<b>Heyy I'm <i>karliask</i> :D <br> Im a Web developer, a gamer and a furry. <br><br> I play mostly roguelikes games such as Spelunky 2<br> or TBOI but i also play Minecraft and Forager.<br><br>I always have my DMs open, so don't be scared!</b>"
}

var lang = english;
let count = 0

document.getElementById("change").onclick = function() {
    count += 1;
    if(count < 1 && count != 1){
    lang = english;  
    document.getElementById("arg").innerHTML = lang.arg;
    document.getElementById("texto").innerHTML = lang.abt;
}
    else if(count = 1){
        lang = spanish;  
        document.getElementById("arg").innerHTML = lang.arg;
        document.getElementById("texto").innerHTML = lang.abt;
    }
    
    else{
        lang = english;
        document.getElementById("arg").innerHTML = lang.arg;
        document.getElementById("texto").innerHTML = lang.abt;
    }
    
}


console.log(count)
*/