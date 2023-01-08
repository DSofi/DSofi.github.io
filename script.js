function verIdiomas() {
  document.getElementById("idiomas-ocult").style.display = "block";
  document.getElementById("ver-idiomas").style.display = "none";
  document.getElementById("ver-workshops").style.display = "list-item";

}
function verWorkshops() {
  document.getElementById("workshops-ocult").style.display = "block";
  document.getElementById("ver-workshops").style.display = "none";
}

function ocultarEstudios() {
  document.getElementById("workshops-ocult").style.display = "none";
  document.getElementById("idiomas-ocult").style.display = "none";
  document.getElementById("ver-idiomas").style.display = "list-item";
}

// function dibujarCirc(){
//   const existDiv = document.getElementsByClassName("algo");
//   const nuevoDivCirc = document.innerHTML ("<p>hola <strong>que</strong> tal</p>");
//   existDiv.appendChild(nuevoDivCirc);

// }

function addElement () {

  // obtener el elemento div con id = "div_example"

  const existDiv = document.getElementById("div_example");

  // crear un nuevo elemento div 

  const newDiv = document.createElement("div");

  // agregar el nuevo elemento div existente

  existDiv.appendChild(newDiv);

} 

