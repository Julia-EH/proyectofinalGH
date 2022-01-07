function nuevoCanal() {
    var canalOrigen = document.getElementById("nuevo-canal-barra").value;
    var canalNuevo = document.createTextNode(canalOrigen);
    var listaOrigen = document.getElementById("lista-canales");
    var listaNuevo = document.createElement("li");
    var aNuevo = document.createElement("a");
    var attr = document.createAttribute("href");

    attr.value = "#"; 

    aNuevo.setAttributeNode(attr);

    listaOrigen.appendChild(listaNuevo);
    listaNuevo.appendChild(aNuevo);
    aNuevo.appendChild(canalNuevo);

    document.getElementById("nuevo-canal-barra").value = "";

}

function nuevoMensaje() {
    var fechaOrigen = new Date();
    var yo = "yo: ";
    var mensajeOrigen = document.getElementById("nuevo-mensaje-barra").value;
    var listOrigen = document.getElementById("zona-chat");

    var listNuevo = document.createElement("div");
    var mensajeNuevo = document.createElement("div");
    var mensajeContenido = document.createTextNode(mensajeOrigen);
    var fechaNuevo = document.createElement("div");
    var fechaContenido = document.createTextNode(fechaOrigen);
    var userNuevo = document.createElement("div");
    var userContenido = document.createTextNode(yo);

    listOrigen.appendChild(listNuevo);
    listNuevo.appendChild(userNuevo);
    listNuevo.appendChild(mensajeNuevo);
    listNuevo.appendChild(fechaNuevo);
    userNuevo.appendChild(userContenido);
    mensajeNuevo.appendChild(mensajeContenido);
    fechaNuevo.appendChild(fechaContenido);

    listNuevo.classList.add("caja-mensajes");
    userNuevo.classList.add("user");
    mensajeNuevo.classList.add("mens");
    fechaNuevo.classList.add("fech");
 
    document.getElementById("nuevo-mensaje-barra").value = "";
}

function buscar() {
    var busqueda = document.getElementById("criterio").value;
    
    console.log (busqueda);
}