const articulos = ["el", "la", "mi", "tu", "su", "nuestro", "este", "esa"];
const nombres = ["gato", "perro", "codigo", "mundo", "robot", "viaje", "cloud", "byte"];
const adjetivos = ["rapido", "inteligente", "feliz", "moderno", "digital", "loco", "seguro", "verde"];
const extensiones = [".com", ".es", ".org", ".net", ".dev"];

document.getElementById("botonGenerar").addEventListener("click", generarDominios);

function obtenerElementoAleatorio(lista) { /*Soy Looperrrrrr, te he mejorado aquí la legibilidad cambiando el nombre de la funcion "aleatorio" a "obtenerElementoAleatorio" considero que así se entiende mucho mejor la función, por el resto veo que está todo bastante correcto.*/
  return lista[Math.floor(Math.random() * lista.length)];
}

function generarDominios() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const generados = new Set();

  while (generados.size < 5) {
    const articulo = obtenerElementoAleatorio(articulos); /*Soy Looperrrrrr, te he mejorado aquí la legibilidad cambiando el nombre de la funcion "aleatorio" a "obtenerElementoAleatorio" considero que así se entiende mucho mejor la función, por el resto veo que está todo bastante correcto.*/
    const nombre = obtenerElementoAleatorio(nombres);
    const adjetivo = obtenerElementoAleatorio(adjetivos);
    const extension = obtenerElementoAleatorio(extensiones);

    generados.add(articulo + nombre + adjetivo + extension);
  }

  generados.forEach(dominio => {
    const div = document.createElement("div");
    div.classList.add("fs-5", "fw-medium");
    div.textContent = dominio;
    resultado.appendChild(div);
  });
}


