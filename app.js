const articulos = ["el", "la", "mi", "tu", "su", "nuestro", "este", "esa"];
const nombres = ["gato", "perro", "codigo", "mundo", "robot", "viaje", "cloud", "byte"]
const adjetivos = ["rapido", "inteligente", "feliz", "moderno", "digital", "loco", "seguro", "verde"]
const extensiones = [".com", ".es", ".org", ".net", ".dev"]


function aleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function generarDominio() {
    const articulo = aleatorio(articulos);
    const nombre = aleatorio(nombres);
    const adjetivo = aleatorio(adjetivos);
    const extension = aleatorio(extensiones);
    
    const dominio = articulo+nombre+adjetivo+extension;
    const parrafo = document.createElement("p");

    parrafo.innerHTML = dominio
    

document.getElementById("resultado").textContent = dominio;

}

console.log()
