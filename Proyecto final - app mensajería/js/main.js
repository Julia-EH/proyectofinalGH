function nuevoCanal() {
    var canalLoc = document.getElementById("nuevo-canal-barra").value;
    var canalNuevo = document.createTextNode(canalLoc);
    var listaLoc = document.getElementById("lista-canales");
    var listaNuevo = document.createElement("li");
    var aNuevo = document.createElement("a");
    var attr = document.createAttribute("href");

    attr.value = "#"; 

    aNuevo.setAttributeNode(attr);

    listaLoc.appendChild(listaNuevo);
    listaNuevo.appendChild(aNuevo);
    aNuevo.appendChild(canalNuevo);

    document.getElementById("nuevo-canal-barra").value = "";

}

function nombreUser() {
    var userLoc = document.getElementById("nombre-user-barra").value;
    var userNuevo = document.createTextNode(userLoc);
    var listaLoc = document.getElementById("zona-user"); /* no existe aún zona-user (de hecho, no "getElement": esto no será una list, tiene que sustituir (aunque lo tengo que crear primero) y entonces lo de abajo creo que tampoco me hace falta si encuentro el "sustituir"*/
    var listaNuevo = document.createElement("div");
    var pNuevo = document.createElement("p");
    var uNuevo = document.createElement("strong");
    
/* Revisar qué me vale de aquí; y del document, a ver cómo llamo a la "barra" -imagino que igual- */
    listaLoc.appendChild(listaNuevo, pNuevo);
    listaNuevo.appendChild(qNode);
    pNuevo.appendChild(uNuevo);
    uNuevo.appendChild(userNuevo);

    document.getElementById("nombre-user-barra").value = "";

}

function nuevoMensaje() {
    var mensajeLoc = document.getElementById("nuevo-mensaje-barra").value;
    var mensajeNuevo = document.createTextNode(mensajeLoc);
    var listaLoc = document.getElementById("zona-chat");
    var listaNuevo = document.createElement("div");
    var pNuevo = document.createElement("p");
    var qNuevo = document.createElement("q");

    listaLoc.appendChild(listaNuevo);
    listaNuevo.appendChild(pNuevo);
    pNuevo.appendChild(qNuevo);
    qNuevo.appendChild(mensajeNuevo);

    document.getElementById("nuevo-mensaje-barra").value = "";
}
