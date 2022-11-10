//create a function to show and hide the menu
var lineasActivadas = document.getElementById("lineasActivadas");
var enServicio = document.getElementById("enServicio");

var pageItem = document.getElementById("page-item");

var showServicioId = document.getElementById("showServicioId");
var showActivadasId = document.getElementById("showActivadasId");

function showActivadas() {
    lineasActivadas.style.display = "block";

    enServicio.style.display = "none";
}

function showServicio() {
    enServicio.style.display = "block";
    lineasActivadas.style.display = "none";
}

function activeItem() {
    if (lineasActivadas.style.display == "none") {
        showServicioId.classList.add("active");
        showActivadasId.classList.remove("active");
    } else {
        showServicioId.classList.remove("active");
        showActivadasId.classList.add("active");
    }
}


