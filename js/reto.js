// ==========================================
// MÓDULO DE RETO
// ==========================================


const pantallaReto =
document.getElementById("pantallaReto");


const cartaReto =
document.querySelector(".reto");


const textoReto =
document.getElementById("textoReto");


const personaReto =
document.getElementById("personaReto");


const btnAceptarReto =
document.getElementById("btnAceptarReto");


const btnJamás =
document.getElementById("btnJamás");


const btnElegirPersona =
document.getElementById("btnElegirPersona");


const btnReiniciarReto =
document.getElementById("btnReiniciarReto");

const popupCastigo =
document.getElementById("popupCastigo");


const ruleta =
document.getElementById("ruleta");


const resultadoShot =
document.getElementById("resultadoShot");


const cerrarCastigo =
document.getElementById("cerrarCastigo");

const mensajeAceptado =
document.getElementById("mensajeAceptado");



let retosDisponibles = [];

let personaSeleccionada = "";


function aceptarReto(){


    mensajeAceptado.classList.add(
        "mostrarAceptado"
    );


    setTimeout(()=>{


        mensajeAceptado.classList.remove(
            "mostrarAceptado"
        );


    },2500);


}

// ==========================================
// MAZO DE RETOS
// ==========================================


function mezclarRetos(){

    retosDisponibles = [...retos];


    for(
        let i = retosDisponibles.length - 1;
        i > 0;
        i--
    ){

        let j =
        Math.floor(
            Math.random()*(i+1)
        );


        [
            retosDisponibles[i],
            retosDisponibles[j]

        ] =
        [
            retosDisponibles[j],
            retosDisponibles[i]
        ];

    }

}



function obtenerReto(){


    if(retosDisponibles.length===0){

        mezclarRetos();

    }


    return retosDisponibles.pop();

}



// ==========================================
// ABRIR RETO
// ==========================================


function abrirReto(){

    pantallaInicio.classList.remove("activa");


    pantallaReto.classList.add("activa");


    nuevoReto();

}



// ==========================================
// NUEVO RETO
// ==========================================


function nuevoReto(){


    const carta = document.getElementById(
        "cartaReto"
    );


    carta.classList.remove(
        "revelarReto"
    );


    void carta.offsetWidth;


    carta.classList.add(
        "revelarReto"
    );



    setTimeout(()=>{


        textoReto.textContent =
        obtenerReto();



    },250);



    personaReto.textContent =
    "-";


}



// ==========================================
// ELEGIR PERSONA
// ==========================================


function elegirPersona(){


    if(participantes.length===0){

        alert(
            "Primero agrega participantes."
        );

        return;

    }


    personaReto.classList.add(
        "sorteando"
    );


    let vueltas = 0;


    const intervalo = setInterval(()=>{


        const numero =

        Math.floor(
            Math.random()*participantes.length
        );


        personaReto.textContent =
        participantes[numero];



        vueltas++;



        if(vueltas >= 20){


            clearInterval(intervalo);



            const final =

            Math.floor(
                Math.random()*participantes.length
            );



            personaSeleccionada =
            participantes[final];



            personaReto.textContent =
            personaSeleccionada;



            personaReto.classList.remove(
                "sorteando"
            );


            personaReto.classList.add(
                "nombreFinal"
            );


            setTimeout(()=>{

                personaReto.classList.remove(
                    "nombreFinal"
                );

            },500);


        }


    },100);


}



// ==========================================
// REINICIAR
// ==========================================


function cerrarReto(){


    pantallaReto.classList.remove("activa");


    pantallaInicio.classList.add("activa");


}



// ==========================================
// EVENTOS
// ==========================================


cartaReto.addEventListener(
    "click",
    abrirReto
);


btnElegirPersona.addEventListener(
    "click",
    elegirPersona
);


btnReiniciarReto.addEventListener(
    "click",
    cerrarReto
);

btnAceptarReto.addEventListener(
    "click",
    aceptarReto
);


mezclarRetos();

// ==========================================
// CASTIGO
// ==========================================


function abrirCastigo(){

    popupCastigo.style.display="flex";

    resultadoShot.textContent =
    "Presiona la ruleta";

}



function girarCastigo(){


    ruleta.classList.remove(
        "girarRuleta"
    );


    void ruleta.offsetWidth;


    ruleta.classList.add(
        "girarRuleta"
    );



setTimeout(()=>{

    const numero = Math.random();

    let resultado;

    if (numero < 0.60) {

        resultado = "🥃 1 Shot";

    }
    else if (numero < 0.99) {

        resultado = "🥃🥃 2 Shots";

    }
    else {

        resultado = "🥃🥃🥃 3 Shots";

    }

    resultadoShot.textContent = resultado;

},1500);


}

btnJamás.addEventListener(
    "click",
    abrirCastigo
);



ruleta.addEventListener(
    "click",
    girarCastigo
);



cerrarCastigo.addEventListener(
    "click",
    ()=>{

        popupCastigo.style.display="none";

    }
);