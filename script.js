// Arreglo con productos de ropa
const productos = [
  { nombre: "Blusa de encaje", precio: 25, descripcion: "Blusa elegante con detalles florales." },
  { nombre: "Pantalón palazzo", precio: 30, descripcion: "Cómodo y fresco para cualquier ocasión." },
  { nombre: "Vestido largo", precio: 45, descripcion: "Ideal para eventos formales o salidas nocturnas." }
];

// Función para mostrar los productos en pantalla
function renderizarProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = ""; // Limpiar lista antes de renderizar

  productos.forEach(producto => {
    const li = document.createElement("li");

    const nombreElem = document.createElement("strong");
    nombreElem.textContent = producto.nombre;

    const precioElem = document.createElement("span");
    precioElem.className = "precio";
    precioElem.textContent = `$${producto.precio}`;

    const descripcionElem = document.createElement("p");
    descripcionElem.textContent = producto.descripcion;

    li.appendChild(nombreElem);
    li.appendChild(document.createElement("br"));
    li.appendChild(precioElem);
    li.appendChild(document.createElement("br"));
    li.appendChild(descripcionElem);

    lista.appendChild(li);
  });
}

// Evento para agregar un nuevo producto con datos ingresados por el usuario
document.getElementById("agregar-producto").addEventListener("click", () => {
  const nombre = prompt("Ingrese el nombre de la prenda:");
  if (!nombre) {
    alert("Debe ingresar un nombre.");
    return;
  }

  const precioStr = prompt("Ingrese el precio:");
  const precio = parseFloat(precioStr);
  if (isNaN(precio) || precio <= 0) {
    alert("Precio inválido.");
    return;
  }

  const descripcion = prompt("Ingrese una descripción:");
  if (!descripcion) {
    alert("Debe ingresar una descripción.");
    return;
  }

  productos.push({ nombre, precio, descripcion });
  renderizarProductos();
});

// Renderizar productos al cargar la página
window.onload = renderizarProductos;
;
