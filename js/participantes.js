// ==========================================
// MÓDULO DE PARTICIPANTES
// ==========================================


// Elementos

const botonNombres =
document.getElementById("btnNombres");

const modalNombres =
document.getElementById("modalNombres");

const cerrarModal =
document.getElementById("cerrarModal");

const agregarNombre =
document.getElementById("agregarNombre");

const inputNombre =
document.getElementById("inputNombre");

const listaNombres =
document.getElementById("listaNombres");


// ==========================================
// DATOS
// ==========================================


let participantes =
JSON.parse(
    localStorage.getItem("participantes")
)
|| [];



// ==========================================
// GUARDAR
// ==========================================


function guardarParticipantes(){

    localStorage.setItem(

        "participantes",

        JSON.stringify(participantes)

    );

}



// ==========================================
// MODAL
// ==========================================


botonNombres.addEventListener(
    "click",
    ()=>{

        modalNombres.style.display="flex";

    }
);



cerrarModal.addEventListener(
    "click",
    ()=>{

        modalNombres.style.display="none";

    }
);



window.addEventListener(
    "click",
    (e)=>{

        if(e.target === modalNombres){

            modalNombres.style.display="none";

        }

    }
);



// ==========================================
// AGREGAR
// ==========================================


function agregarParticipante(){


    const nombre =
    inputNombre.value.trim();



    if(nombre === ""){

        alert(
            "Escribe un nombre primero."
        );

        return;

    }



    if(
        participantes.some(
            p =>
            p.toLowerCase()
            ===
            nombre.toLowerCase()
        )
    ){

        alert(
            "Ese nombre ya existe."
        );

        return;

    }



    participantes.push(nombre);



    guardarParticipantes();



    inputNombre.value="";



    mostrarParticipantes();

}



agregarNombre.addEventListener(
    "click",
    agregarParticipante
);



inputNombre.addEventListener(
    "keydown",
    (e)=>{

        if(e.key==="Enter"){

            agregarParticipante();

        }

    }
);



// ==========================================
// MOSTRAR LISTA
// ==========================================


function mostrarParticipantes(){


    listaNombres.innerHTML="";



    participantes.forEach(
        (persona,index)=>{


        listaNombres.innerHTML += `


        <div class="persona">


            <span>
                ${persona}
            </span>



            <div class="botones">


                <button
                class="editar"
                onclick="editarParticipante(${index})">

                    ✏️

                </button>



                <button
                class="eliminar"
                onclick="eliminarParticipante(${index})">

                    🗑️

                </button>


            </div>


        </div>


        `;


    });


}



// ==========================================
// ELIMINAR
// ==========================================


function eliminarParticipante(index){


    participantes.splice(
        index,
        1
    );


    guardarParticipantes();


    mostrarParticipantes();


}



// ==========================================
// EDITAR
// ==========================================


function editarParticipante(index){


    const nuevo =
    prompt(
        "Nuevo nombre:",
        participantes[index]
    );



    if(nuevo === null)
        return;



    const nombre =
    nuevo.trim();



    if(nombre==="")
        return;



    participantes[index]=nombre;



    guardarParticipantes();



    mostrarParticipantes();


}



// Inicializar

mostrarParticipantes();