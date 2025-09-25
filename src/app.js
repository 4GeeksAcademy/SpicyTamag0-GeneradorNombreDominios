const articulos = ["el", "la", "mi", "tu", "su", "nuestro", "este", "esa"];
const nombres = ["gato", "perro", "codigo", "mundo", "robot", "viaje", "cloud", "byte"];
const adjetivos = ["rapido", "inteligente", "feliz", "moderno", "digital", "loco", "seguro", "verde"];
const extensiones = [".com", ".es", ".org", ".net", ".dev"];

document.getElementById("botonGenerar").addEventListener("click", generarDominios);

function aleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function generarDominios() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const generados = new Set();

  while (generados.size < 5) {
    const articulo = aleatorio(articulos);
    const nombre = aleatorio(nombres);
    const adjetivo = aleatorio(adjetivos);
    const extension = aleatorio(extensiones);

    generados.add(articulo + nombre + adjetivo + extension);
  }

  generados.forEach(dominio => {
    const div = document.createElement("div");
    div.classList.add("fs-5", "fw-medium");
    div.textContent = dominio;
    resultado.appendChild(div);
  });
}