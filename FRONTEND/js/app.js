// capturó el botón de guardar y la capa de mensajes y las declaro en una variable cada una
const botonGuardar = document.querySelector("#Guardar");
const mensajes = document.querySelector("#mensajes");


// guardar campo
botonGuardar.addEventListener("click", () => {
  // campos del formulario
  const campo1 = document.querySelector("#campo1");

  // variable del total de caracteres que aceptaremos
  const caracteresMax = 10;

  //este if comprueba que los datos que llegan no estén vacíos
  if (campo1.value.length === 0) {
    mensajes.innerHTML ="Campo vacio ...  Va ingresa algún dato please";
    mensajes.classList.add("spanError");
    mensajes.classList.remove("spanOK");
    return;}

    //este if comprueba que los datos que llegan  no pasen de los caracteres máximos declarados en la variable "caracteresMax".
  if (campo1.value.length > caracteresMax) {
    mensajes.innerHTML = "Lo que has puesto es demasiado largo, no me creo que tengas tanto por decir.";
      campo1.classList.add("inputError");
      mensajes.classList.add("spanError");
      mensajes.classList.remove("spanOK");
    return;
  }

  //una vez esta todo bien lo enviamos por una url de guardar 
  const url = "http://localhost:3500/api/v1/guardarEF";
  fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      campo1: campo1.value,
    }),
  })
    .then((res) => res.json())
    .then((mensaje) => {
      mensajes.classList.remove("spanError");
      mensajes.classList.add("spanOK");
      mensajes.innerHTML = "Campo guardado correctamente";
      setTimeout(() => {
        location.reload();
      }, 2000);
    })
    .catch((error) => (mensajes.innerHTML = error));
});




// Leer los datos de la BBDD
// por la url creada leo los datos para luego en el html mostrarlos 
fetch("http://localhost:3500/api/v1/leerEF")
  .then((res) => res.json())
  .then((datos) => {
    const mostrar = document.getElementById("mostrar");
    const resultados = datos.resultado;
    if (resultados.length === 0) {
      mostrar.innerHTML =
        "No hay datos a mostrar";
    } else {
      for (let i = 0; i < resultados.length; i++) {
        const campo = resultados[i];
        mostrar.innerHTML += "<ul><li class='tituloLista'><b>Dato</b></li><li class='contenidoLista'>" + campo.campo +"</li></ul>";
      }
    }
  })
  .catch((error) => (mensajes.innerHTML = error));