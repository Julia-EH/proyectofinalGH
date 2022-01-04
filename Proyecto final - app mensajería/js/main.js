function nuevoCanal() {
    var newName = document.getElementById("nuevo-canal-barra").value;
    var listNode = document.getElementById("listacanales");
    var liNode = document.createElement("li");
    var aNode = document.createElement("a");
    var txtNode = document.createTextNode(newName);
    var attr = document.createAttribute("href");

    attr.value = "#"; 

    aNode.setAttributeNode(attr);

    aNode.appendChild(txtNode);
    liNode.appendChild(aNode);
    listNode.appendChild(liNode);

    document.getElementById("nuevo-canal-barra").value = "";

}
