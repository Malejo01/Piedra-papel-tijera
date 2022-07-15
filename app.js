// Variables
let userScore=0;
let compScore =0;

//arrays
const frasesFilo=[
    "No juzgamos a las personas que amamos (Jean-Paul Sartre)",
    "El amor inmaduro dice: “te amo porque te necesito”. El maduro dice: “te necesito porque te amo” (Erich Fromm)",
    "Exígete mucho a ti mismo y espera poco de los demás. Así te ahorrarás disgustos (Confucio)",
    "El corazón tiene razones que la razón ignora (Blaise Pascal)",
    "Nunca moriría por mis creencias porque podría estar equivocado (Bertrand Russell)",
    "Todo el mundo ve lo que aparentas ser, pocos experimentan lo que realmente eres (Maquiavelo)",
    "No es lo que te ocurre, sino cómo reaccionas lo que importa (Epíteto)",
    "Aquel que tiene un porqué para vivir se puede enfrentar a todos los cómos (Friedrich Nietzsche)",
    "Perro que ladra... todavia esta crudo (Confucio)",
    "Allá le estan jugando con la tijera",
    "No renuncies a tus sueños. Sigue durmiendo (Albert Einstein)",
]

// Llamado de elementos del HTML
const userScore_span = document.getElementById("marc-usuario");
const compScore_span = document.getElementById("marc-computadora");
const scoreBoard_div = document.querySelector("marcador")
const resultados_div = document.querySelector(".resultados p")
const piedra_div = document.getElementById("Piedra")
const papel_div = document.getElementById("Papel")
const tijeras_div = document.getElementById("Tijeras")
const frases_div = document.querySelector(".frases p")
// funciones

function principal () {
    piedra_div.addEventListener("click", () => juego ("Piedra"));
    papel_div.addEventListener("click", () => juego ("Papel"));
    tijeras_div.addEventListener("click", () => juego ("Tijeras"));
}

function juego (opcion) {
    const movidaComp = juegoComp()
    const movidaUsuario = opcion;
    
    (movidaUsuario==movidaComp) ? empate(movidaUsuario) :
    (movidaUsuario=="Piedra" && movidaComp=="Tijeras") ? ganar(movidaUsuario,movidaComp) :
    (movidaUsuario=="Papel" && movidaComp=="Piedra") ? ganar(movidaUsuario,movidaComp):
    (movidaUsuario=="Tijeras" && movidaComp=="Papel") ? ganar(movidaUsuario,movidaComp): 
    perder(movidaUsuario,movidaComp)
}
function juegoComp () { 
    const opciones =["Piedra","Papel","Tijeras"]
    const random = Math.floor(Math.random() *3)
    const movida =opciones[random]
    return movida
}

function ganar (opcionUsuario, opcionCompu) {
    userScore++,
    userScore_span.innerHTML=userScore
    resultados_div.innerHTML=opcionUsuario+" le gana a "+opcionCompu+" ¡Ganaste!"
    const userChoice_div =document.getElementById(opcionUsuario)
    const compuChoice_div =document.getElementById(opcionCompu)
    userChoice_div.classList.add("verde")
    compuChoice_div.classList.add("rojo")
    setTimeout(function(){
        userChoice_div.classList.remove("verde")
        compuChoice_div.classList.remove("rojo")
    },2000)
    fraseAleatoria()
    audioAleatorioGanar()
}

function perder (opcionUsuario, opcionCompu) {
    compScore++,
    compScore_span.innerHTML=compScore
    resultados_div.innerHTML=opcionUsuario+" pierde con "+opcionCompu+" ¡Gano el CPU!"
    const userChoice_div =document.getElementById(opcionUsuario)
    const compuChoice_div =document.getElementById(opcionCompu)
    userChoice_div.classList.add("rojo")
    compuChoice_div.classList.add("verde")
    setTimeout(function(){
        userChoice_div.classList.remove("rojo")
        compuChoice_div.classList.remove("verde")
    },2000)
    fraseAleatoria()
    audioAleatorioPerder()
}

function empate (opcionUsuario) {
    resultados_div.innerHTML="Ambos eligieron "+opcionUsuario+" Empate"
    const userChoice_div =document.getElementById(opcionUsuario)
    userChoice_div.classList.add("amarillo")
    setTimeout(function(){
        userChoice_div.classList.remove("amarillo")
    },2000)
    fraseAleatoria()
}

//--------------------------------------------------------------------detalles esteticos o random

function fraseAleatoria () { 
    const random = Math.floor(Math.random() *(frasesFilo.length))
    frases_div.innerHTML=frasesFilo[random]
}


// ejecucion

principal ()


/* ------------------------------------------------------------------------------------------ToDos

*/

/* 

colocar sonido de victoria y de derrota aleatorios

colocar imagen de conejito en el footer

hacer frases segun la diferencia en el marcador

agregar evento para cambiar el nombre en "jugador"

Hacer que en vez de emojis se puedan ver las imagenes de las opciones que seleccionaron

hacer un generador de frases consumiendo una API

las frases filosoficas se van eliminando cada vez que aparecen para no repetirse
*/

/*
function asignarEmoji(opcionUsuario, opcionCompu) {
    if (opcionUsuario=="piedra"){let emojiUsuario= document.getElementById("piedra")}
    else if (opcionUsuario=="papel") {let emojiUsuario=document.getElementById("papel")}
    else {let emojiUsuario=document.getElementById("tijera")}

    if (opcionCompu=="piedra"){let emojiCompu= document.getElementById("piedra")}
    else if (opcionCompu=="papel") {let emojiCompu=document.getElementById("papel")}
    else {let emojiCompu=document.getElementById("tijera")}
    return (emojiUsuario,emojiUsuario)

}
*/




