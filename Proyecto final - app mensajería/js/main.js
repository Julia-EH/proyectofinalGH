function nuevoCanal() {
    var nuevoCanal = document.getElementById("nuevo-canal-barra").value;
    var txtNode = document.createTextNode(nuevoCanal);
    var listNode = document.getElementById("lista-canales");
    var liNode = document.createElement("li");
    var aNode = document.createElement("a");
    var attr = document.createAttribute("href");

    attr.value = "#"; 

    aNode.setAttributeNode(attr);

    listNode.appendChild(liNode);
    liNode.appendChild(aNode);
    aNode.appendChild(txtNode);

    document.getElementById("nuevo-canal-barra").value = "";

}


function nuevoMensaje() {
    var nuevoMensaje = document.getElementById("nuevo-mensaje-barra").value;
    var nombreUser = document.getElementById("nombre-user-barra").value;
    var msjNode = document.createTextNode(nuevoMensaje);
    var userNode = document.createTextNode(nombreUser);
    var listNode = document.getElementById("zona-chat");
    var liNode = document.createElement("div");
    var pNode = document.createElement("p");
    var uNode = document.createElement("strong");
    var qNode = document.createElement("q");
    

    listNode.appendChild(liNode, pNode);
    liNode.appendChild(qNode);
    pNode.appendChild(uNode);
    qNode.appendChild(msjNode);
    uNode.appendChild(userNode); /* NADA, ESTO NO SÉ HACERLO, o consigo el mensaje o el usuario... y no sé cómo hacer para que tengan el formato que yo quiero. Ah, y le tengo que meter la clase "caja-mensajes"*/

    document.getElementById("nuevo-mensaje-barra").value = "";
    document.getElementById("nombre-user-barra").value = "";

}
